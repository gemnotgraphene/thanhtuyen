// src/components/Projects/Project5.js
import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
// import Particle from "../Particle";



function Project6() {

  return (
    <Container fluid className="project5-section">
      {/* <Particle /> */}
      <Container>
        <h1 className="project-heading">
          Project 6: <strong className="blue">Advanced Infrastructure Reinforcement and Seismic Protection: Vietnam-Japan Collaboration on Innovative Engineering Solutions</strong>
        </h1>
        <p style={{ color: "blue" }}>
          A detailed view of the "SE " project.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={6}>
            <img
              src={require("../../Assets/Projects/seeproject.png")}
              alt="seeproject"
              className="img-fluid"
            />
          </Col>
          <Col md={6} className="project-details">
            <h2>Overview</h2>
            <p style={{ textAlign: "justify" }}>
            In collaboration with Vantin Interpretation and Translation Company Limited (Vietnam) and SE Corporation (Japan), this project, conducted in August 2019, involved the translation of advanced technical materials for infrastructure reinforcement and seismic safety. 
            </p>
            <h2>The focus was on key technologies and equipment, including:</h2>
            <ul>
              <li><strong>ESCON Panels:</strong> High-strength synthetic fiber-reinforced concrete</li>
              <li><strong>SEEE Anti-Collapse Devices:</strong> Bridge collapse prevention and vibration reduction systems</li>
              <li><strong>M-Type and F-Type Anchors:</strong> Innovative anchoring systems for soil reinforcement and seismic protection.</li>
              <li><strong>SEEEF-PH Cables:</strong> Advanced cable technology for structural durability.</li>
              <li><strong>Polyethylene U-Channels:</strong> Innovative drainage solutions.</li>
              <li><strong>Reinforcement of Water Dams and Embankments:</strong> Anti-erosion and seismic-resistant anchor methods for coastal and harbor protection.</li>
            </ul>
          </Col>
        </Row>

        {/* Section for Steel Pipe Pile Topics */}
        <h1 className="content-heading">
          Topics in <strong className="blue">Steel Pipe Pile Construction</strong>
        </h1>
        <Row style={{ justifyContent: "center", paddingBottom: "20px" }}>
          <Col md={10}>
            <ol>
            <li>
                <strong>BẢNG ĐIỀU KHIỂN ESCON | ESCON Panel | ESCON八°ネル</strong>
                <p>Advanced control panel system for construction and engineering projects.</p>
              </li>
              <li>
                <strong>Neo Đất Kiểu M | M-Type Anchor | タイブルアンカーM型</strong>
                <p>An innovative M-Type anchor system for soil reinforcement.</p>
              </li>
              <li>
                <strong>THIẾT BỊ PHÒNG CHỐNG SẬP CẦU | Bridge Collapse Prevention Device (SEEE Method) | SEEE工法落橋防止装置</strong>
                <p>Advanced technology to prevent bridge collapse, ensuring structural integrity.</p>
              </li>
              <li>
                <strong>Bê Tông Sử Dụng Sợi Tổng Hợp Siêu Bền ESCON | Ultra-High-Strength Fiber-Reinforced Concrete (ESCON) | ESCON 超高強度合成繊維補強コンクリート</strong>
                <p>Concrete reinforced with ultra-high-strength synthetic fibers for enhanced durability.</p>
              </li>
              <li>
                <strong>NEO SEEE CỐ ĐỊNH KIỂU F | F-Type SEEE Anchor | SEEE アンカーF型</strong>
                <p>F-Type SEEE anchor for secure and effective reinforcement in construction.</p>
              </li>
              <li>
                <strong>Dây Cáp Kiểu SEEEF-PH | SEEEF-PH Type Cable | SEEEF-PH型ケーブル</strong>
                <p>High-performance SEEEF-PH type cable for structural applications.</p>
              </li>
              <li>
                <strong>NEO KHÔNG BÁM DÍNH [KIỂU F-U] | Unbonded Anchor [F-U Type] | アンボンド アンカー[F-U型]</strong>
                <p>Unbonded anchor system for flexible and robust reinforcement solutions.</p>
              </li>
              <li>
                <strong>Thiết Bị Giảm Dao Động Cho Cầu | Energy-Absorbing Bridge Collapse Prevention Device | エネルギー吸収型落橋防止装置</strong>
                <p>Device designed to absorb energy and prevent bridge collapse during extreme conditions.</p>
              </li>
              <li>
                <strong>TẤM PHẢN ÁP SEEE-KIT | SEEE-KIT Bearing Plate | SEEE-KIT受圧板</strong>
                <p>High-strength bearing plate designed for SEEE-KIT anchoring systems.</p>
              </li>
              <li>
                <strong>KHUNG SEEE KIT | SEEE KIT Frame | SEEE KITフレーム</strong>
                <p>Framework specifically designed for SEEE KIT applications.</p>
              </li>
              <li>
                <strong>Ống MT | MT Pipe | MTバイプ</strong>
                <p>Durable MT pipe system for water and structural applications.</p>
              </li>
              <li>
                <strong>BẢNG ĐIỀU KHIỂN RS | RS Panel | RSパネル</strong>
                <p>Reliable control panel system for managing structural operations.</p>
              </li>
              <li>
                <strong>CÔNG NGHỆ NEO GIA CỐ ĐẬP NƯỚC NGĂN ĐẬP NƯỚC XÓI MÒN | Anchor Technology for Reinforcing and Protecting Water Dams from Erosion | 砂防堰堤補強アンカー工法</strong>
                <p>Technology for reinforcing water dams to prevent erosion and structural damage.</p>
              </li>
              <li>
                <strong>Mương Chữ U Từ Polyethylene | U-Channel Made from Polyethylene | U字溝ポリエチレン製U字郎</strong>
                <p>Polyethylene U-channels for water management and erosion control.</p>
              </li>
              <li>
                <strong>MƯƠNG CHỮ U | U-Channel | U字郎</strong>
                <p>Standard U-channel design for various engineering applications.</p>
              </li>
              <li>
                <strong>CÔNG NGHỆ NEO GIA CỐ ĐÊ PHÒNG HỘ - CẦU CẢNG | Seismic-Resistant Anchoring Technology for Embankments and Harbors | 岸壁•護岸耐震補強アンカー工法</strong>
                <p>Seismic-resistant anchoring technology for embankments and harbor protection.</p>
              </li>
              <li>
                <strong>Dây Cáp Kiểu SEEEF | SEEEF-Type Cable | SEEEF型ケーブル</strong>
                <p>High-performance SEEEF-type cable for structural reinforcement and stability.</p>
              </li>
            </ol>
          </Col>
        </Row>

        <h2>Links</h2>
        <ul>
          <li>
          <a href="https://drive.google.com/drive/folders/1fEa1sZwk67mQKYveSxTtNpRZ5Ec1sjAY?usp=sharing">
            Project Documentation
            </a>
          </li>
        </ul>
      </Container>
    </Container>
  );
}


export default Project6;
