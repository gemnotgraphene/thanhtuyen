// src/components/Projects/Project5.js
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
// import Particle from "../Particle";

function Project5() {
  return (
    <Container fluid className="project5-section">
      {/* <Particle /> */}
      <Container>
        <h1 className="project-heading">
          Project 5: <strong className="blue">Knowledge Bridge: Advancing Engineering Education Through Vietnam-Japan Collaboration</strong>
        </h1>
        <p style={{ color: "blue" }}>
          A detailed view of the "JFE Steel" project.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={6}>
            <img
              src={require("../../Assets/Projects/jfehaihan.jpg")}
              alt="jfehaihan"
              className="img-fluid"
            />
          </Col>
          <Col md={6} className="project-details">
            <h2>Overview</h2>
            <p style={{ textAlign: "justify" }}>
              In collaboration with HAI HAN Intellectual Property Company Limited and JFE Steel Corporation (Japan), this project focused on translating technical training materials on advanced steel pipe and pile construction methods for Vietnamese students. Conducted from November 2016 to February 2017, the project emphasized knowledge transfer, aligning with Japan's Official Development Assistance (ODA) initiatives to support Vietnam's infrastructure and education sectors. Key topics included steel pipe pile construction, seismic and fatigue design, and ODA-funded infrastructure projects like Hanoi Metro Line 2. This initiative showcased innovative engineering practices while strengthening Vietnam-Japan partnerships in education and sustainable development.
            </p>
            <h2>Features</h2>
            <ul>
              <li>Knowledge transfer on advanced steel pipe and pile construction methods</li>
              <li>Focus on seismic and fatigue design</li>
              <li>Support for infrastructure projects like Hanoi Metro Line 2</li>
              <li>Collaboration between Vietnam and Japan in education</li>
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
                <strong>鋼管杭の施工方法 | Method of Steel Pipe Pile Construction | Phương pháp thi công cọc ống thép</strong>
                <p>Overview of traditional and modern methods for steel pipe pile installation.</p>
              </li>
              <li>
                <strong>新しい鋼管杭工法 | New Steel Pipe Pile Construction Technique | Kỹ thuật cọc ống thép mới</strong>
                <p>Latest advancements in construction techniques for improved efficiency and safety.</p>
              </li>
              <li>
                <strong>地すべり抑止鋼管杭 | Landslide Prevention Steel Pipe Pile | Cọc ống thép chống sạt lở</strong>
                <p>Application of steel pipe piles to prevent landslides in vulnerable areas.</p>
              </li>
              <li>
                <strong>杭頭の結合方法 | Pile Head Welding Method | Hàn đầu cọc</strong>
                <p>Techniques for welding pile heads to ensure structural integrity.</p>
              </li>
              <li>
                <strong>継杭方法 | Pile Jointing Method | Phương pháp hàn cọc</strong>
                <p>Methods for joining steel pipe piles during construction.</p>
              </li>
              <li>
                <strong>
                  鋼管矢板井筒基礎工法の設計法, 鋼管矢板井筒基礎工法を適用した施工例 | Design Method for Steel Pipe Sheet Pile
                  Caisson Foundation, Construction Examples Applying Steel Pipe Sheet Pile Caisson Foundation | Kỹ
                  thuật móng vòng vây cọc ván ống thép
                </strong>
                <p>Design principles and real-world applications of caisson foundations using steel pipe sheet piles.</p>
              </li>
              <li>
                <strong>鋼構造のための溶接の基礎 | Basis of Welding for Steel Construction | Hàn cơ bản dành cho kết cấu thép</strong>
                <p>Fundamental welding techniques for steel structures.</p>
              </li>
              <li>
                <strong>鋼橋（合成桁橋）の設計法 | Design Method for Steel Bridges (Composite Girder Bridge) | Phương pháp thiết kế cầu thép (Cầu dầm bản composite)</strong>
                <p>Key design methodologies for composite girder bridges.</p>
              </li>
              <li>
                <strong>溶接講義ノート | Welding Lecture Notes | Kỹ thuật hàn cấu trúc</strong>
                <p>Detailed lecture notes and best practices for welding in steel construction.</p>
              </li>
              <li>
                <strong>ネガティブフリクション対策杭 | Non-Negative Skin Friction Pile | Cọc chống lại ma sát âm</strong>
                <p>Innovative methods to prevent negative skin friction in piles, improving structural stability.</p>
              </li>
              <li>
                <strong>基礎構造 鋼管杭基礎 2.1 基礎構造の機能 2.2 杭基礎 | Pile Foundation 2.1 Functions of Foundation Structures 2.2 Pile Foundation | Phương pháp thi công kết cấu cơ bản</strong>
                <p>Comprehensive exploration of foundation structures, focusing on the functions and construction of pile foundations.</p>
              </li>
              <li>
                <strong>鋼管杭の適用分野 | Application Field of Steel Pipe Piles | Phạm vi ứng dụng của cọc ống thép</strong>
                <p>Discussing the diverse applications of steel pipe piles in construction and infrastructure projects.</p>
              </li>
              <li>
                <strong>日本のODAとベトナムプロジェクトの概要 | Overview of Japan’s ODA and Vietnam Projects | Khái quát dự án tại Việt Nam với nguồn vốn ODA Nhật Bản</strong>
                <p>An overview of Japan’s ODA initiatives and their role in Vietnam's infrastructure development.</p>
              </li>
              <li>
                <strong>杭の載荷試験 | Pile Load Test | Kiểm tra truyền tải của cọc</strong>
                <p>Techniques and methods for testing the load-bearing capacity of piles.</p>
              </li>
              <li>
                <strong>概要 －鉄鋼と社会 | Steel and Society | Khái quát Sắt thép và Xã hội</strong>
                <p>Exploration of steel's role in societal and infrastructure advancements.</p>
              </li>
              <li>
                <strong>橋梁構造設計 | Bridge Structures and Design | Thiết kế kết cấu cầu</strong>
                <p>Design principles and methodologies for constructing durable and efficient bridge structures.</p>
              </li>
              <li>
                <strong>水平支持力 | Horizontal Bearing Capacity | Lực nâng đỡ ngang</strong>
                <p>Understanding and improving the horizontal bearing capacity of structural elements.</p>
              </li>
              <li>
                <strong>水平載荷試験 | Horizontal Loading Test | Kiểm tra truyền tải ngang</strong>
                <p>Testing methods to evaluate horizontal load resistance in piles and foundations.</p>
              </li>
              <li>
                <strong>演習課題1-1（Exercise1-1） | Exercise 1-1: Ultimate Bearing Capacity Calculation | Bài tập luyện tập 1-1: Tính toán lực nâng đỡ tối đa</strong>
                <p>Calculate the ultimate bearing capacity of piles based on soil and structural parameters.</p>
              </li>
              <li>
                <strong>演習課題1-3（Exercise1-3） | Exercise 1-3: Calculation of Pile Deflection, Shear Force, and Bending Moment Under Horizontal Load | Bài tập luyện tập 1-3: Tính toán lực cắt, moment uốn dựa vào độ uốn cong của cọc do tải trọng ngang</strong>
                <p>Analyze and calculate deflection, shear force, and bending moments in piles under horizontal loads.</p>
              </li>
              <li>
                <strong>演習課題1-4（Exercise1-4） | Exercise 1-4: Calculation of Pile Bearing Capacity Affected by Negative Friction | Bài tập luyện tập 1-4: Tính toán lực nâng đỡ cọc ảnh hưởng ma sát âm</strong>
                <p>Assess the impact of negative skin friction on pile bearing capacity.</p>
              </li>
              <li>
                <strong>演習課題1-5（Exercise1-5） | Exercise 1-5: Design of Landslide Prevention Pile | Bài tập luyện tập 1-5: Tính toán cọc ngăn chặn sạt lở đất</strong>
                <p>Design effective piles for landslide prevention in geotechnical projects.</p>
              </li>
              <li>
                <strong>演習課題2-1（Exercise2-1） | Exercise 2-1: Design of Self-Supporting Steel Sheet Pile Wall (1) | Bài tập luyện tập 2-1: Thiết kế tường chắn cọc ván ống thép không giá đỡ</strong>
                <p>Develop designs for steel sheet pile walls without external support.</p>
              </li>
              <li>
                <strong>疲労設計演習 | Exercise in Fatigue Design | Bài tập thiết kế mỏi</strong>
                <p>Explore fatigue analysis and design techniques to improve structural durability.</p>
              </li>
              <li>
                <strong>耐震解析 | Seismic Design | Phân tích địa chấn</strong>
                <p>Conduct seismic analysis and develop earthquake-resistant structural designs.</p>
              </li>
              <li>
                <strong>課題 製鉄所 | Location of Steel Works | Bài tập truy cập các cơ sở sản xuất sắt thép</strong>
                <p>Study and locate steel manufacturing facilities for project planning and development.</p>
              </li>
              <li>
                <strong>資料作成・講義実施要領 | Course Implementation Guidelines and Material Preparation | Đề cương thực hiện khóa học và xây dựng tài liệu</strong>
                <p>Guidelines for preparing materials and implementing training courses in engineering education.</p>
              </li>
              <li>
                <strong>鉄鋼と社会 | Steel and Society | Sắt thép và xã hội</strong>
                <p>Exploration of the critical role of steel in societal development and infrastructure advancements.</p>
              </li>
              <li>
                <strong>鉄鋼材料 | Steel Materials | Vật liệu cốt thép</strong>
                <p>Overview of steel materials used in modern construction and their properties.</p>
              </li>
              <li>
                <strong>鋼橋（合成桁橋）の設計法 | Design Method for Steel Bridges (Composite Girder Bridge) | Phương pháp thiết kế cầu thép (Cầu dầm bản composite) Chapter 3</strong>
                <p>Design methodologies for composite girder bridges, focusing on durability and efficiency.</p>
              </li>
              <li>
                <strong>鋼矢板工法 2.1 土留め工の種類 | Steel Sheet Pile Method 2.1: Types of Retaining Wall Techniques | Kỹ thuật cọc ván thép 2.1: Phân loại kỹ thuật vòng vây cọc ván</strong>
                <p>An in-depth look at different types of retaining wall techniques using steel sheet piles.</p>
              </li>
              <li>
                <strong>鋼矢板工法 2.3 鋼矢板の施工方法 | Steel Sheet Pile Method 2.3: Construction Method for Steel Sheet Piles | Kỹ thuật cọc ván thép 2.3: Phương pháp thi công cọc ván thép</strong>
                <p>Detailed guidelines for constructing retaining walls with steel sheet piles.</p>
              </li>
              <li>
                <strong>鋼矢板工法 2.4 鋼矢板による土留め壁 | Steel Sheet Pile Method 2.4: Retaining Wall Using Steel Sheet Piles | Tường chắn bằng cọc ván thép</strong>
                <p>Design and implementation of retaining walls made from steel sheet piles.</p>
              </li>
              <li>
                <strong>鋼矢板工法 2.5 壁体に作用する土圧 (Earth Pressure) | Steel Sheet Pile Method 2.5: Earth Pressure Acting on Walls | Kỹ thuật móng: Áp lực đất</strong>
                <p>Analysis of earth pressure acting on retaining walls and their structural implications.</p>
              </li>
              <li>
                <strong>鋼矢板工法 2.6 鋼矢板土留め壁の設計法 | Steel Sheet Pile Method 2.6: Design Method for Retaining Walls with Steel Sheet Piles | Kỹ thuật cọc ván thép 2.6: Phương pháp thiết kế tường chắn cọc ván thép</strong>
                <p>Methods for designing retaining walls with steel sheet piles for optimal performance.</p>
              </li>
              <li>
                <strong>鋼矢板工法 2) アンカー式土留め壁 | Steel Sheet Pile Method 2: Design of Anchored Sheet Pile Walls | Kỹ thuật cọc ván thép 2: Thiết kế tường chắn loại neo</strong>
                <p>Anchored sheet pile wall designs for enhanced stability and load-bearing capacity.</p>
              </li>
              <li>
                <strong>鋼矢板工法2.2 鋼矢板の製造方法と種類 | Steel Sheet Pile Method 2.2: Manufacturing Methods and Types of Steel Sheet Piles | Kỹ thuật cọc ván thép 2.2: Phân loại phương pháp sản xuất cọc ván thép</strong>
                <p>Details on the manufacturing techniques and classifications of steel sheet piles.</p>
              </li>
              <li>
                <strong>鋼管杭の防食 | Corrosion Protection for Steel Pipe Piles | Chống ăn mòn cho cọc thép</strong>
                <p>Strategies for protecting steel pipe piles from corrosion and enhancing longevity.</p>
              </li>
              <li>
                <strong>鋼管杭基礎 2.4 鋼管杭の製造方法と製造範囲 2.5 鋼管杭基礎の特長 | Steel Pipe Pile Foundation 2.4: Manufacturing Methods and Range 2.5: Characteristics of Steel Pipe Pile Foundation | Phương pháp và phạm vi sản xuất và chiều dài cọc ống thép</strong>
                <p>Exploration of manufacturing methods, dimensions, and advantages of steel pipe piles.</p>
              </li>
              <li>
                <strong>鋼管杭基礎 2.6 鋼管杭の設計 | Design of Steel Pipe Piles (1) | Thiết kế cọc ống thép (1)</strong>
                <p>Principles and methodologies for designing steel pipe piles.</p>
              </li>
              <li>
                <strong>
                  鋼管杭基礎 2.6.2 鉛直支持力 2.6.3 先端支持力と周面摩擦力 2.6.4 許容支持力と極限支持力 2.7 標準貫入試験 | Steel Pipe Pile Foundation 2.6.2: Vertical Bearing Capacity, 2.6.3: Tip Bearing and Frictional Resistance, 2.6.4: Allowable and Ultimate Bearing Capacities, 2.7: Standard Penetration Test | Móng cọc ống thép: Khả năng chịu lực thẳng đứng, ma sát đầu cọc, khả năng chịu lực cho phép và cực đại, và thử nghiệm xuyên tiêu chuẩn
                </strong>
                <p>Comprehensive analysis of vertical and tip bearing capacities, frictional resistance, and testing standards for steel piles.</p>
              </li>
              <li>
                <strong>鋼管矢板井筒基礎工法 | Steel Pipe Sheet Pile Caisson Foundation Method Part 1 (Gif)-2 | Kỹ thuật móng vòng vây cọc ván ống thép Part 1 (Gif)-2</strong>
                <p>An introduction to the caisson foundation method utilizing steel pipe sheet piles.</p>
              </li>
              <li>
                <strong>建築系鉄骨構造 | Structural Steel for Architecture: Introduction | Kết cấu cốt thép kiến trúc: Giới thiệu</strong>
                <p>Overview of structural steel applications in architectural designs.</p>
              </li>
              <li>
                <strong>総合演習：耐風設計 | Comprehensive Exercise: Wind Resistant Design | Bài tập tổng hợp: Thiết kế chống gió</strong>
                <p>Exercise focusing on the design principles and techniques for wind-resistant structures.</p>
              </li>
            </ol>
          </Col>
        </Row>

        <h2>Links</h2>
        <ul>
          <li>
          <a href="https://drive.google.com/drive/folders/19BPf-5-XgPIg233l-mUzJ94MW9lNfssT?usp=sharing" target="_blank">
            Project Documentation
            </a>
          </li>
        </ul>
      </Container>
    </Container>
  );
}

document.querySelectorAll('*').forEach(el => el.style.userSelect = 'text');

console.log("Link clicked:", "https://drive.google.com/drive/folders/19BPf-5-XgPIg233l-mUzJ94MW9lNfssT?usp=sharing");

export default Project5;
