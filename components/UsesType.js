import UsesData from "../data/UsesData.json"

const Uses = () => {
  return (
    <article className="my-12 grid gap-6">
      {UsesData.map((use, index) => (
        <section 
          key={index} 
          className={use.id}>
          <h2 className="mb-2">
            <i>{use.sectionName} </i>
            {use.sectionEmoji}
          </h2>
          <ul>
            {use.items.map((item, iIndex) => {
              return (
                <li 
                  key={iIndex} 
                  className="my-1">
                  <a 
                    href={item.href} 
                    target="_blank"
                    className="underline underline-offset-2 decoration-electric-purple decoration-2">
                    {item.name}:
                  </a>
                  <span> {item.description}</span>
                </li>
              );
            })}
          </ul>
        </section>
      ))}
    </article>
  );
};

export default Uses