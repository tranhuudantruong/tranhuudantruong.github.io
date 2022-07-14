const form = document.getElementById('output').addEventListener('submit', (e) => {
    e.preventDefault();
    const ten = document.getElementById('nhapten').value;
    document.querySelector('.output-ten').textContent = `Họ và Tên: ${ten}`;

    const ngaysinh = document.getElementsById('ngaysinh').value;
    document.querySelector('.output-ngaysinh').textContent = `Ngày sinh: ${ngaysinh}`;

    const email = document.getElementById('nhapemail').value;
    document.querySelector('.output-email').textContent = `Email: ${email}`;

    const sodienthoai = document.getElementById('nhapsodienthoai').value;
    document.querySelector('.output-sodienthoai').textContent = `Số điện thoại: ${sodienthoai}`;

    const genders = document.getElementsByName('gioitinh');
    genders.forEach(gioitinh => {
        if (gioitinh.checked == true) {
            document.querySelector('.output-gioitinh').textContent = `Giới tính: ${gioitinh.value}`;
        };
    });

    const quoctich = document.getElementById('chonquoctich').value;
    document.querySelector('.output-quoctich').textContent = `Quốc tịch: ${quoctich}`;

    const hobbies = document.getElementsByName('sothich');
    sothichArray = [];
    hobbies.forEach(sothich => {
        if (sothich.checked == true) {
            sothichArray.push(sothich.value);
        };
    });
    document.querySelector('.output-sothich').textContent = `Sở thích: ${sothichArray.join(', ')}`;
});
