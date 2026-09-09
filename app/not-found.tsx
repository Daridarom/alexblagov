const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export default function NotFound() {
  return (
    <main className="not-found-page">
      <div>
        <p className="section-kicker">Александр Благов · 404</p>
        <h1>Страница не найдена</h1>
        <p>Возможно, ссылка изменилась. На главной странице можно выбрать консультацию, программу, книгу или проект в Крыму.</p>
        <div className="not-found-actions">
          <a className="button button-light" href={`${basePath}/`}>На главную</a>
          <a className="button button-outline" href={`${basePath}/#contact`}>Связаться</a>
        </div>
      </div>
    </main>
  );
}
