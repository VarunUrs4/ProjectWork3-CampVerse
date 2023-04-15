import React from "react";
import NotificationBox from "./NotificationBox";
import notifyLinks from "./notificationsLinks";

const Notifications = () => {
    return(<>
        <div className="border_curve notifications">
        <h4 className="all">All</h4>

        {notifyLinks.map((notif)=>{
            return(<>
                <NotificationBox Notifications={notif.notificationName} links={notif.notificationLink}/>
            </>);
        })}
        </div>
    </>);
}

export default Notifications;