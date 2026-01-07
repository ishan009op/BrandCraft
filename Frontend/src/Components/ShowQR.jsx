import { QRCodeCanvas } from "qrcode.react";

const AdminQR = ({ token }) => {
  return (
    <div style={{ textAlign: "center" }}>
      <h3>Scan to access Admin Panel</h3>
      <QRCodeCanvas
        value={token}
        size={220}
        level="H"
      />
      <p>Scan once on trusted device</p>
    </div>
  );
};

export default AdminQR;
