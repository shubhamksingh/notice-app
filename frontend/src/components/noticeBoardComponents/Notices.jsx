import { Box } from "@chakra-ui/react";
import React from "react";
import IndividualNotice from "./IndividualNotice";
import Pagination from "../pagination/Pagination";
import axios from "axios";

const Notices = ({updated}) => {

  const [currentPage, setCurrentPage] = React.useState(1);
  const [notices, setNotices] = React.useState([]);
  const [totalPage, setTotalPage] = React.useState(2);
  const [loading, setLoading] = React.useState(false);


  const changePage = page => {
    setCurrentPage(page);
  };

  React.useEffect(() => {
    setLoading(true);
    axios
      .get("https://notice-app-backend-production.up.railway.app/noticeboard")
      .then(res => {
        let x = res.data.length;
        res.data = res.data.splice(
          (currentPage - 1) * 4,
          (currentPage - 1) * 4 + 4,
        );
        setNotices(res.data);
        setTotalPage(Math.ceil(x/ 4));
        setLoading(false);
      });
  }, [currentPage, updated]);

  return (
    <Box m="auto" mt="1rem" w={{ lg: "70%" }}>
      <Box minH="28rem">
        {loading && <p>Loading...</p>}
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