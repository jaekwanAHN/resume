const Introduce = () => {
  return (
    <div className="mb-2">
      <p className="text-2xl text-blue-500 sectionTitle">Introduce</p>
      <p>
        <b>협업을 통해 배웁니다.</b> 페어 프로그래밍을 통해 지도에 마커를
        표기하는 과정에서 마커가 정상 동작 하지 않던 문제점을 해결했습니다.
        지도에 마커를 표기하고 Click 이벤트를 부착하려 했으나 마커를 DOM에
        부착하는 코드와 마커에 이벤트를 부착하는 코드의 순서가 보장되지 않아
        정상적으로 동작하지 않았습니다. 동료에게 내가 `하고 싶은 것, 시도해본
        것, 막힌 것`을 설명했습니다. 코드를 함께 보며 서로가 생각한 해결책과
        그에 대한 근거를 공유했습니다. 결국 재랜더링과 비동기 처리에 문제가
        있다는 것을 깨달았고 마커 배열을 State로 관리하고 useEffect의 deps정리와
        useEffect문 분리, 그리고 예외 처리 추가로 문제를 해결했습니다. 또한 기존
        코드를 Hook으로 리팩터링하여 코드양을 30% 줄였습니다. 미흡했던 부분과
        동료의 입장을 알 수 있었습니다.
        <br />
        <br />
        <b>사용자가 되어 생각해봅니다.</b> 전체 화면에 로딩 스피너를 보여주던
        것을 Suspense를 통하여 로딩이 진행중인 영역에만 Skeleton UI를
        적용하였습니다. 기존에는 스피너를 제외한 어떠한 UI도 보이지 않아
        서비스가 멈춘 것인지 로딩이 진행중인지 다소 모호하였습니다. 개선을
        통하여 모든 데이터를 기다리지않고 로딩이 완료된 영역은 먼저 사용자에게
        보여줌으로써 로딩시간이 줄어든 느낌을 줄 수 있었고 어느 정보를 불러오고
        있는지 직관적으로 확인할 수 있게 되었습니다. 그리고 모바일 환경에서도
        버튼 클릭만으로 모든 메뉴를 사용할 수 있도록 네비게이션바를 구현하여
        실수로 서비스에서 이탈하거나 브라우저를 닫는 경우를 방지하였습니다.
        <br />
        <br />
        <b>결과의 원인, 과정을 생각합니다.</b> Click 이벤트가 정상적으로
        동작하지만 이벤트 핸들러가 2개 이상 중복으로 부착되는 현상이 있었습니다.
        원인을 찾고자 공식 문서를 기반으로 ChatGPT와 레퍼런스를 활용하였고
        재렌더링 시 핸들러가 정상적으로 삭제되지 않는다는 것을 알았습니다.
        CleanUp함수를 수정하여 이벤트가 정상적으로 제거되도록 하였고 랜더링 마다
        핸들러가 중복으로 생성되지 않도록 useCallback을 적용하였습니다. 알게 된
        내용을 공유하는 것을 좋아하여 10개의 스터디에 참여했었습니다. 최근에는
        Next.js 13ver에 대하여 학습하고 있습니다.
      </p>
    </div>
  );
};
export default Introduce;
