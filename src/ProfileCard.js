function ProfileCard({ image, title, handle, description }) {
  //   const title = props.title;
  //   const handle = props.handle;
  //   const { title, handle } = props;

  return (
    <div className="card">
      <div className="card-image">
        <figure className="image is-4by3">
          <img src={image} alt="" />
        </figure>
      </div>
      <div class="card-content">
        <div className="media-content">
          <p className="title is-4">{title}</p>
          <p className="subtitle is-6">{handle}</p>
        </div>
        <div className="content">{description}</div>
      </div>
    </div>
  );
}

export default ProfileCard;
