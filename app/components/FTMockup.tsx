export default function FTMockup() {
  return (
    <div className="ft-mockup">
      {/* ===== ノートPC ===== */}
      <div className="ft-laptop">
        <div className="ft-laptop__screen">
          <div className="ft-laptop__inner">
            <div className="ft-db">
              <div className="ft-db__header">
                <div className="ft-db__left">
                  <span className="ft-db__logo">First Touch</span>
                  <div className="ft-db__tabs">
                    <span className="ft-db__tab ft-db__tab--active">顧客一覧</span>
                    <span className="ft-db__tab">音声登録</span>
                    <span className="ft-db__tab">名刺スキャン</span>
                    <span className="ft-db__tab">活動集計</span>
                  </div>
                </div>
                <div className="ft-db__right">
                  <span className="ft-db__plan">LIGHT</span>
                  <div className="ft-db__user">
                    <span className="ft-db__avatar">蔵</span>
                    <span>蔵右戸 一郎</span>
                  </div>
                </div>
              </div>
              <div className="ft-db__main">
                <div className="ft-db__h1">営業チーム ダッシュボード</div>
                <div className="ft-db__sub">今月の活動集計 / 2026年4月</div>
                <div className="ft-db__kpi">
                  <div className="ft-db__kpi-card ft-db__kpi-card--blue"><div className="ft-db__kpi-label">総活動数</div><div className="ft-db__kpi-value ft-db__v-blue">66</div></div>
                  <div className="ft-db__kpi-card ft-db__kpi-card--green"><div className="ft-db__kpi-label">顧客登録</div><div className="ft-db__kpi-value ft-db__v-green">177</div></div>
                  <div className="ft-db__kpi-card ft-db__kpi-card--purple"><div className="ft-db__kpi-label">メール送信</div><div className="ft-db__kpi-value ft-db__v-purple">53</div></div>
                  <div className="ft-db__kpi-card ft-db__kpi-card--orange"><div className="ft-db__kpi-label">案件相談</div><div className="ft-db__kpi-value ft-db__v-orange">12</div></div>
                </div>
                <div className="ft-db__deal">
                  <span className="ft-db__deal-label">案件ヨミ</span>
                  <span className="ft-db__chip ft-db__chip--d"><b>見込あり</b> 12件</span>
                  <span className="ft-db__chip ft-db__chip--c"><b>C</b> 5件</span>
                  <span className="ft-db__chip ft-db__chip--b"><b>B</b> 3件</span>
                  <span className="ft-db__chip ft-db__chip--a"><b>A</b> 2件</span>
                  <span className="ft-db__chip ft-db__chip--won"><b>受注</b> 4件</span>
                  <span className="ft-db__deal-total">加重合計: <b>¥1,987万</b></span>
                </div>
                <div className="ft-db__panel">
                  <div className="ft-db__thead">
                    <span className="ft-db__ttitle">顧客一覧</span>
                    <div className="ft-db__filters">
                      <span className="ft-db__filter ft-db__filter--active">全件</span>
                      <span className="ft-db__filter">★ 重要</span>
                      <span className="ft-db__filter">見込みあり</span>
                    </div>
                  </div>
                  <table className="ft-db__table">
                    <thead><tr><th>★</th><th>氏名</th><th>会社名</th><th>役職</th><th>接触日</th><th>AI分析</th><th>メール</th><th>タグ</th></tr></thead>
                    <tbody>
                      <tr><td className="ft-star-on">★</td><td className="ft-name">山田 雄介</td><td>株式会社フロンティア</td><td>代表取締役</td><td>04/14</td><td><span className="ft-badge ft-badge--done">完了</span></td><td><span className="ft-badge ft-badge--done">確定</span></td><td><span className="ft-tag">交流会</span></td></tr>
                      <tr><td className="ft-star-on">★</td><td className="ft-name">佐藤 真由美</td><td>グローバルテック株式会社</td><td>経営企画部長</td><td>04/13</td><td><span className="ft-badge ft-badge--done">完了</span></td><td><span className="ft-badge ft-badge--done">確定</span></td><td><span className="ft-tag">士業紹介</span></td></tr>
                      <tr><td className="ft-star-off">☆</td><td className="ft-name">鈴木 健太郎</td><td>有限会社コネクト</td><td>営業部長</td><td>04/12</td><td><span className="ft-badge ft-badge--done">完了</span></td><td><span className="ft-badge ft-badge--done">確定</span></td><td><span className="ft-tag">IT</span></td></tr>
                      <tr><td className="ft-star-on">★</td><td className="ft-name">田口 葵</td><td>ブライトウェイブ株式会社</td><td>取締役CMO</td><td>04/11</td><td><span className="ft-badge ft-badge--done">完了</span></td><td><span className="ft-badge ft-badge--pending">AI済</span></td><td><span className="ft-tag">マーケ</span></td></tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="ft-laptop__base"></div>
      </div>

      {/* ===== スマホ ===== */}
      <div className="ft-phone">
        <div className="ft-phone__screen">
          <div className="ft-phone__notch"></div>
          <div className="ft-phone__inner">
            <img
              src="/images/photos/service/firsttouch-lp-sp.png"
              alt="First Touch LP"
              className="ft-phone__img"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
