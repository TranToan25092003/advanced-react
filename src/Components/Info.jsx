import React from "react";
export function Info({ person }) {
  const { name, nickName = "blyat", images } = person;

  // const img = images && images[0] && images[0].small && images[0].small.url;

  const img =
    images?.[0]?.small?.url ||
    "https://pbs.twimg.com/profile_images/1573239315634585600/iAyoSnBO_400x400.jpg";
  return (
    <div>
      <img src={img} alt="" style={{ width: "150px" }} />
      <h4>{person.name}</h4>
      <p>{nickName}</p>
    </div>
  );
}
