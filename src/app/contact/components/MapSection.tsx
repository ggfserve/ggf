import React from 'react';

export const MapSection = () => {
  return (
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2404.808913866396!2d-113.59776982359959!3d53.56631497235482!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x53a01b2356f6533d%3A0x7b6f271df5fa6cc!2s15397%20117%20Ave%20NW%20%23204%2C%20Edmonton%2C%20AB%20T5M%203X4%2C%20Canada!5e0!3m2!1sen!2sca!4v1711704209151!5m2!1sen!2sca"
      width="100%"
      height="450"
      style={{ border: '0' }}
      allowFullScreen={true}
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      className="my-20 lg:my-44"
    ></iframe>
  );
};
