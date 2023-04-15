const NotificationBox = ({Notifications,links}) => {
  return (
    <>
      <div className="notify_box">
        <div className="notify_heading">
          <h4>{Notifications}</h4>
        </div>
        <div className="rightNotify">
        <a href={links} className="notify_btn">
          Check
        </a>
        </div>
      </div>
    </>
  );
};

export default NotificationBox;
