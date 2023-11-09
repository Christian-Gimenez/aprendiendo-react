export function TwitterFollowCard({ formatUserName, userName, name, isFollowing }) {
  const imageSrc = `https://unavatar.io/${userName}`;//Guardamos con templeate String la url dinamica
  const addAt = (userName) => `@${userName}`;
  return ( 
    //Aunque el estilo en linea no sea lo adecuado, a veces se hará, pero NO es lo adecuado
    //<article style={{ display: "flex", alignItems: "center", color: "#fff" }}>
    <article className="tw-followCard">
      <header className="tw-followCard-header">
        <img 
          className="tw-followCard-avatar" 
          src={imageSrc} //Introducimos la variable de la URL
          alt="El avatar de Goku">
        </img>
        <div className="tw-followCard-info">
          <strong>{name}</strong>
          <span
            className="tw-followCard-infoUserName">@{userName}
          </span>
        </div>
      </header>

      <aside>
        <button className="tw-followCard-button">
          Seguir
        </button>
      </aside>
    </article>
  );
}