import { useState } from 'react';
import { nanoid } from 'nanoid';
import data from './data';
const App = () => {
  const [count, setCount] = useState(1);
  const [text, setText] = useState([]);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(typeof parseInt(count));
    let amt = parseInt(count);
    setCount(amt);
    setText(data.slice(0, count));
  };
  return (
    <section className="section-center">
      <h1>
        Lorem Ipsum Pro{' '}
        <b>
          <i> Max Ultra</i>
        </b>{' '}
      </h1>
      <br></br>
      <br></br>
      <br></br>
      <h4>Silly Lorem and Sillier Ipsum</h4>
      <form className="lorem-form" onSubmit={handleSubmit}>
        <label htmlFor="amount">Num of Paras:</label>
        <input
          type="number"
          name="amount"
          id="amout"
          min="1"
          step="1"
          max="8"
          value={count}
          onChange={(e) => setCount(e.target.value)}
        />
        <button className="btn" type="submit">
          {' '}
          Generate
        </button>
      </form>
      <article className="lorem-text">
        {text.map((item) => {
          return <p key={nanoid}>{item}</p>;
        })}
      </article>
    </section>
  );
};
export default App;
