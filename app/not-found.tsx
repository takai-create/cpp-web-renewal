import Link from "next/link";

export default function NotFound() {
  return (
    <main className="not-found">
      <div className="not-found__inner">
        <p className="not-found__code">404</p>
        <h1 className="not-found__title">ページが見つかりません</h1>
        <p className="not-found__text">
          お探しのページは移動または削除された可能性があります。
          <br />
          お手数ですが、以下のリンクからお進みください。
        </p>
        <div className="not-found__actions">
          <Link href="/" className="not-found__btn not-found__btn--primary">
            トップページへ
          </Link>
          <Link href="/contact" className="not-found__btn">
            お問い合わせ
          </Link>
        </div>
      </div>
    </main>
  );
}
