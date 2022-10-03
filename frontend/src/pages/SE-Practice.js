import articles from "../dummydata/articles.js";
import Styles from "../components/TableStyle.js";
import Table from "../components/EvidenceTable.js";
import tablecolumns from "../components/TableColumns.js";
import Dropdown from "../components/Dropdown.js";

const SEPractice = () => {
    return (
      <div>
        <h2>Select SE Practice to get evidence for the claimed benefits</h2>
              <Dropdown/>
               <Styles>
                 <Table
                  data={articles}
                  columns={tablecolumns}
                 />
              </Styles>
      </div>
    );
};
 

export default SEPractice;  