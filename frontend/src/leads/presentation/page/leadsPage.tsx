import { JSX, useState } from "react";
import Invited from "../components/invited";
import Accepted from "../components/accepted";

type Tabs = "invited" | "accepted";
const pagesMapper: Record<Tabs, JSX.Element> = {
  invited: <Invited />,
  accepted: <Accepted />,
};

const LeadsPage: React.FC = () => {
  const [tab, setTab] = useState<Tabs>("invited");
  return (
    <div className="bg-[#EEEEEE] w-full p-4 min-h-[100vh]">
      <button
        className="bg-[#F7FFFA] w-[50%] text-[#3A3A3A] border-1 border-solid border-gray-200 shadow-sm"
        style={
            tab === "invited"
              ? {borderBottom: "3px solid #ff9f42"}
              : {}
          }
        onClick={() => setTab("invited")}
      >
        Invited
      </button>
      <button
        className="bg-[#F7FFFA] w-[50%] text-[#3A3A3A] border-1 border-solid border-gray-200 shadow-sm"
        style={
            tab === "accepted"
              ? {borderBottom: "3px solid #ff9f42"}
              : {}
          }
        onClick={() => setTab("accepted")}
      >
        Accepted
      </button>
      {pagesMapper[tab]}
    </div>
  );
};

export default LeadsPage;
