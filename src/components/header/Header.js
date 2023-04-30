import React, { useEffect, useState } from "react";
import {
  Container,
  NavBar,
  Logo,
  SecondGrid,
  SelectBar,
  Option,
  GallerySpec,
  SelectSectionSpan,
  ViralLable,
  ViralCheckbox,
} from "./Header.style";

function Header(props) {
  const [section, setSection] = useState("hot");
  const [sort, setSort] = useState("viral");
  const [day, setDay] = useState("day");
  const [showViral, setShowViral] = useState(true);

  const getUserFilter = () => {
    props.getUrlInfos({
      section: section,
      sort: sort,
      window: day,
      showViral: showViral,
    });
  };
  useEffect(() => {
    getUserFilter();
  }, []);

  return (
    <NavBar>
      <Container>
        <Logo>
          Photo
          <SecondGrid>Grid</SecondGrid>
        </Logo>
        <GallerySpec>
          <button>Show Photos</button>
          <SelectSectionSpan>Select Section:</SelectSectionSpan>
          <SelectBar
            value={section}
            onChange={(e) => {
              setSection(e.target.value);
            }}
          >
            <Option value="hot">Hot</Option>
            <Option value="top">Top</Option>
            <Option value="user">User</Option>
          </SelectBar>
          <SelectSectionSpan>Select Sort:</SelectSectionSpan>
          <SelectBar
            value={sort}
            onChange={(e) => {
              setSort(e.target.value);
            }}
          >
            <Option value="viral">Viral</Option>
            <Option value="top">Top</Option>
            <Option value="time">Time</Option>
          </SelectBar>
          <SelectSectionSpan>Select Date:</SelectSectionSpan>
          <SelectBar
            value={day}
            onChange={(e) => {
              setDay(e.target.value);
            }}
          >
            <Option value="day">Day</Option>
            <Option value="week">Week</Option>
            <Option value="month">Month</Option>
            <Option value="year">Year</Option>
            <Option value="all">All</Option>
          </SelectBar>

          <ViralLable>
            Viral Images:
            <ViralCheckbox
              type="checkbox"
              checked={showViral}
              onChange={(e) => setShowViral(e.target.checked)}
            />
          </ViralLable>
        </GallerySpec>
      </Container>
    </NavBar>
  );
}

export default Header;
