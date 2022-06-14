import React from "react";

function Menu({ items }) {
  return (
    <>
      <div className="wrapper">
        <section className="container-menu">
          {items.map((item) => (
            <article key={item.id} className="article-menu">
              <img src={item.img} alt={item.title} />
              <aside className="aside">
                <div className="header-menu">
                  <h4 className="aside-title">{item.title}</h4>
                  <h4 className="aside-price">${item.price}</h4>
                </div>
                <div className="desc-menu">{item.desc}</div>
              </aside>
            </article>
          ))}
        </section>
      </div>
    </>
  );
}

export default Menu;
