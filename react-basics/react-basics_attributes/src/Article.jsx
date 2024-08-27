export default function Article() {
  console.log("init");

  return (
    <article className="article">
      as a wrapper HTML element with the class
      <h2 className="article__title">
        with the class `article__title` and a text of your choice
      </h2>
      <label id="" htmlFor="inputElement">
        and tag connected with `id` and `htmlFor` (!) attributes
      </label>
      <input name="inputElement" placeholder="write" />
      <a href="" className="article__link">
        tag with the class `article__link` as well as text content and `href`
      </a>
    </article>
  );
}
