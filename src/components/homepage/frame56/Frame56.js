import React from 'react';
import './Frame56.css';

const Frame56 = () => {
  return (
    <div className="frame56-container">
      <div className="frame56-header">
        <div className="header-text">
          <h3 className="sub-heading">You already know?</h3>
          <h2 className="main-heading">Useful Pet Knowledge</h2>
        </div>
        <button className="view-more-btn">View more →</button>
      </div>

      <div className="frame56-cards">
        {/* Card 1 */}
        <div className="card">
          <img
            src="https://s3-alpha-sig.figma.com/img/164b/8551/c113c74555b6aeaec9a5b979c2ee53d4?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Pq0sjXZIKptdMfowPequcT8hv84FuHQ4ogzrLA7n7wgtM-bt4H2UfwcNsxQT1r3TlXn9GoIxWv~-EdGfZw58QeStoH1ewssZhLSnxlisqX6MMsWD8Nr~YB7OMf8xtYbhQKaHfBY18vsESKgPGRfflYw1s-vw7DamJg1rx1BrA65UvmBZ1GJ1B1mF42sZ5bFtGZUWiIWwp-LkItUl4yQ7MLqvHQ7o8~bliVpOPOqlGm6J7GQOv72z2WIT0cqkDB96EraoYr8EVN3FdLX~fjuAokUNECdPcVdhSxYa~q7uRtSeTN1TNjmBcSAXXskJj17fzeVqifozFAO~mI2ODiyRwQ__"
            alt="Pomeranian Dog"
            className="card-image"
          />
          <div className="card-body">
            <span className="card-tag">Pet Knowledge</span>
            <div className='des'>
            <div className='hed'> 
            <h3>What is a Pomeranian? How to Identify Pomeranian Dogs</h3></div>
            <p>
              The Pomeranian, also known as the Pomeranian (Pom dog), is always
              in the top of the cutest pets...
            </p>
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="card">
          <img
            src="https://s3-alpha-sig.figma.com/img/5e97/6f4f/0a476f3dabcbcedb02310d51a05973ad?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ej68CGiXO47AJcM-RL-cS0xpu6In~49GExOlFrLPjequ51wHspExKAMwIQ6EupviG1PP2W7BWNH2ZmcUd~nW9OjtJy8Mx6VKXv36odeYJCzmXCvIIq-n4NttIz4ufDoutRlLNCIas0lmUIry8chXxtD-tmWUHtH4pss9I3JYWTrsw-tbM4NBSJcMd6fAxnDzDRFgCgJP1L7squtyGFczNfbOhXya5DL-f0pj7LDGvL~HAQQYb716OhIbLZusCshTIvmho3PS5M-kqpTgughDThicVAblkOYITrxcZpEsZJH7ccPZF7EOZGvONKv~mnYahK16CbmtxNNbF0hN0Ql5Vw__"
            alt="Dog Diet"
            className="card-image"
          />
          <div className="card-body">
            <span className="card-tag">Pet Knowledge</span>
            <div className='des'>
            <div className='hed'> 
            <h3>Dog Diet You Need To Know</h3>
            </div>
            <p>
              
              Dividing a dog’s diet may seem simple at first, but there are some
              rules you should know so...
            </p>
            </div>
          </div>
        </div>

        {/* Card 3 */}
        <div className="card">
          <img
            src="https://s3-alpha-sig.figma.com/img/9c94/ebaa/40056d6caaf1af31cf6dd3725c34eb7f?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=f0RRGXuyJKKx-ZoBe-w1jlqEmYUDeBIyK4ixZoRm38cSNG1m4sMm93XSyPm18yUap72n0rosZBbkz0gfQqRAAqKEKHqJ-CEUz~0uCB2DcSm9wBetrXCPdVKtkloafpFrTXXxgkBHYK4OWDwlF6bOQ7muu2~ZHwi2qT5rOx2pHM484okSqqHaOZ-Hhaln0oDHf3-dn9~QAWhjb~RJiWHzAmM3Lbxaan2zPKGrkBqYqj4xDNXKYoKWVyLvPmiTb-ncwiwD3qPM3ENzy7B7ZTxcLqbHnTpAfLA4bH1woWqjaCqvv~dk7yIhpk5WfWFiqAF3M7fLPqCnrumcBSOlSE~wVg__"
            alt="Dog Behavior"
            className="card-image"
          />
          <div className="card-body">
            <span className="card-tag">Pet Knowledge</span>
            <div className='des'>
              <div className='hed'>            <h3>Why Dogs Bite and Destroy Furniture and How to Prevent It</h3></div>
            <p>
              Dog bites are common during development. However, no one wants
              their furniture or important...
            </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Frame56;
