import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
// src/pages/ItemDetail.jsx ※追加：既存のimportの下
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase.js";


export default function ItemDetail() {
  // URLパラメータを取得
  const { id } = useParams();
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);

  // src/pages/ItemDetail.jsx
  useEffect(() => {
    getDocs(collection(db, "items")).then((snapshot) => {
      const data = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      const found = data.find((i) => i.id === id);
      setItem(found ?? null);
      setLoading(false);
    });
  }, [id]);


  if (loading) {
    return <p className="loading">読み込み中...</p>;
  }

  // アイテムが見つからなかった場合
  if (!item) {
    return (
      <div className="item-detail-container item-detail-notfound">
        <p>アイテムが見つかりません。</p>
        <Link to="/" className="back-link">
          ← 一覧へ戻る
        </Link>
      </div>
    );
  }

  return (
    <div className="item-detail-container">
      <Link to="/" className="back-link">
        ← 一覧へ戻る
      </Link>
      <div className="item-detail-image-box">
        <img src={item.image} alt={item.name} />
        {item.status === 'soldout' && <span className="item-detail-badge">soldout</span>}
      </div>
      <div className="item-detail-info">
        <p className="item-detail-category">{item.category}</p>
        <h2 className="item-detail-title">{item.name}</h2>
        <p className="item-detail-price">¥{item.price.toLocaleString()}</p>
        <p className="item-detail-desc">{item.description}</p>
        <dl className="item-detail-specs">
          <div className="item-detail-spec-row">
            <dt>品番</dt>
            <dd>{item.code}</dd>
          </div>
          <div className="item-detail-spec-row">
            <dt>カラー</dt>
            <dd>{item.color}</dd>
          </div>
          <div className="item-detail-spec-row">
            <dt>サイズ</dt>
            <dd>{item.size}</dd>
          </div>
        </dl>
      </div>
    </div>
  );
}
