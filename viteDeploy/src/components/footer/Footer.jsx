import s from "./footer.module.css";

function Footer() {
  return (
    <footer className={s.footer}>
      <p className={s.desc}>
        Проект представляет собой планировщик дел, разбитых по проектам.
      </p>

      <div className={s.main}>
        <h3>Description</h3>
        <p>
          Планировщик должен представлять собой список проектов в виде ссылок.
          При нажатии на ссылку категории должен открываться список дел для
          данного проекта.
        </p>
        <p>
          Пользователь может совершать с <em>проектами и делами</em> следующие
          операции: создавать, редактировать, удалять.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
