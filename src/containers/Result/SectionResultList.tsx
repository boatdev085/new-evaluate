"use client";
import { Box, Container, Stack, styled, Typography } from "@mui/material";
import React from "react";

type Props = {};

const SectionResultList = (props: Props) => {
  const data = [
    {
      id: 1,
      title:
        "การมีส่วนร่วมในการกำหนดเป้าหมายการใช้ชีวิตลูก และขอบเขตการดูแลเลี้ยงดู (ข้อ 1 - 5)",
      point: 3,
      type: "รูปแบบการดูแลเลี้ยงดูแบบปกป้องลูก",
      meaning:
        "เป็นรูปแบบการเลี้ยงดู ที่พ่อแม่ ผู้เลี้ยงดู ให้ความใส่ใจลูกในเรื่องการเปลี่ยนแปลงอารมณ์จิตใจ สังคม พฤติกรรม และกระบวนการคิดของลูกวัยรุ่นมากเกินไป และมีการยอมรับความต้องการตามวัยของวัยรุ่นในระดับน้อย มีความคาดหวังไม่สอดคล้องตามวัยของลูก และเปิดโอกาสให้ลูกรับผิดชอบตนเองน้อย และพึ่งพิงพ่อแม่มาก",
      recommend:
        "วัยรุ่น เป็นช่วงวัยที่มีการเปลี่ยนแปลงครั้งยิ่งใหญ่ทั้งทางร่างกาย อารมณ์จิตใจ สังคม และสติปัญญา เด็กหญิงจะมีร่างกายเปลี่ยนแปลง เริ่มเข้าสู่วัยแรกรุ่นเมื่อายุประมาณ 11 - 12 ปี ในขณะที่เด็กชายจะมีร่างกายเปลี่ยนแปลงเข้าสู่วัยแรกรุ่นช้ากว่าเด็กหญิงประมาณ 2 ปี XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
    },
    {
      id: 2,
      title:
        "การมีส่วนร่วมในการกำหนดเป้าหมายการใช้ชีวิตลูก และขอบเขตการดูแลเลี้ยงดู (ข้อ 1 - 5)",
      point: 3,
      type: "รูปแบบการดูแลเลี้ยงดูแบบปกป้องลูก",
      meaning:
        "เป็นรูปแบบการเลี้ยงดู ที่พ่อแม่ ผู้เลี้ยงดู ให้ความใส่ใจลูกในเรื่องการเปลี่ยนแปลงอารมณ์จิตใจ สังคม พฤติกรรม และกระบวนการคิดของลูกวัยรุ่นมากเกินไป และมีการยอมรับความต้องการตามวัยของวัยรุ่นในระดับน้อย มีความคาดหวังไม่สอดคล้องตามวัยของลูก และเปิดโอกาสให้ลูกรับผิดชอบตนเองน้อย และพึ่งพิงพ่อแม่มาก",
      recommend:
        "วัยรุ่น เป็นช่วงวัยที่มีการเปลี่ยนแปลงครั้งยิ่งใหญ่ทั้งทางร่างกาย อารมณ์จิตใจ สังคม และสติปัญญา เด็กหญิงจะมีร่างกายเปลี่ยนแปลง เริ่มเข้าสู่วัยแรกรุ่นเมื่อายุประมาณ 11 - 12 ปี ในขณะที่เด็กชายจะมีร่างกายเปลี่ยนแปลงเข้าสู่วัยแรกรุ่นช้ากว่าเด็กหญิงประมาณ 2 ปี XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
    },
  ];
  function getRandomColor() {
    var letters = "BCDEF".split("");
    var color = "#";
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * letters.length)];
    }
    return color;
  }
  return (
    <Box sx={{ padding: "60px 0" }}>
      <Stack direction="column" spacing={6}>
        {data.map((item, index) => (
          <Box
            sx={{
              background: getRandomColor(),
              padding: "20px",
              borderRadius: "20px",
            }}
            key={`list_${index + 1}`}
          >
            <Container>
              <Typography>
                {item.title && (
                  <>
                    กลุ่มที่ {index + 1}: {item.title}
                    <br />
                    <br />
                  </>
                )}
                {item.point && (
                  <>
                    คะแนน : <br />
                    {item.point}
                    <br />
                    <br />
                  </>
                )}
                {item.type && (
                  <>
                    รุปแบบ : <br />
                    {item.type}
                    <br />
                    <br />
                  </>
                )}
                {item.meaning && (
                  <>
                    ความหมาย : <br />
                    {item.meaning}
                    <br />
                    <br />
                  </>
                )}
                {item.recommend && (
                  <>
                    คำแนะนํา : <br />
                    {item.recommend}
                    <br />
                    <br />
                  </>
                )}
              </Typography>
            </Container>
          </Box>
        ))}
      </Stack>
    </Box>
  );
};

export default SectionResultList;
