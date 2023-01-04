import { Box } from "@chakra-ui/react";
import React from "react";
import IndividualNotice from "./IndividualNotice";
import Pagination from "../pagination/Pagination";
import Loader from "../loadingComponent/Loader";
import { getNotices } from "../../utilis/noticeHelper/getNotices";

const Notices = ({ updated }) => {
  const [currentPage, setCurrentPage] = React.useState(1);
  const [notices, setNotices] = React.useState([]);
  const [totalPage, setTotalPage] = React.useState(0);
  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    setLoading(true);
    getNotices().then(res => {
      let x = res.data.length;
      let newArr = res.data.splice(
        (currentPage - 1) * 4,
        (currentPage - 1) * 4 + 4,
      );
      setNotices(newArr);
      setTotalPage(Math.ceil(x / 4));
      setLoading(false);
    });
  }, [currentPage, updated]);

  return (
    <Box m="auto" mt="1rem" w={{ lg: "70%" }}>
      <Box minH="28rem">
        {loading && <Loader />}
        {!loading &&
          notices.map((notice, index) => {
            return <IndividualNotice key={index} {...notice} />;
          })}
      </Box>
      <Pagination
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        totalPage={totalPage}
      />
    </Box>
  );
};

export default Notices;
