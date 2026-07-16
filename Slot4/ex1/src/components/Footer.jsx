// tạo footer component chứa MyProfile
import React from 'react';
import MyProfile from './MyProfile';
function Footer() {
    //khai báo 1 đối tượng profile chứa các thông tin id, name, email, githubLink, avatar
  const profile = {
    id: "DE190086",
    name: "Nguyễn Đắc Thịnh",
    email: "nguyendacthinh2610@gmail.com",
    githubLink: "https://github.com/nguyendacthinh2610/FER202_ThinhND_SE20A05",
    avatarSrc: "./images/image.png"
  };
    return (
    //style lại footer thật chuyên nghiệp  , chỉnh lại ở giữa trang và màu sắc thật basic để nổi bật thông tin của bạn
    // chỉnh lại căn thẻ ở giữa trang và chữ trên cùng 1 hàng không thụt ra thụt vào
        <footer style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#f8f9fa',
            padding: '20px',
            marginTop: 'auto',
            fontSize: '14px',
        }}>
            <MyProfile profile={profile} />
        </footer>
    );
}
export default Footer;