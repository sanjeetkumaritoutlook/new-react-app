import React , { useEffect} from 'react';
//https://fluid.libertymutual.com/fluid/fluid-table.html
//https://fluid-components.libertymutual.com/fluid/fluid-table.html
import { useCustomElementRef, fluid } from './../fluid';  // Replaced by @lmig/fluid-react-utils

function FluidTable() {
    // ---- Initialise FLUID
  let env = fluid.environments.external;
  useEffect(() => fluid.init(env));
  // ---- Start Building

  const actionClicked = (event) => {
    const { actionKey } = event.detail;
    console.log(actionKey);
  };

  const customDate = new Date();
  const fluidTableRef = useCustomElementRef(
    { actionClicked },
    {
      dataItems: [
        {
          firstName: 'Chandler',
          surname: 'Flynn',
          location: 'Yonah',
          role: 'Zoxy',
          age: 23,
          balanceString: '1234.34',
          balanceNumber: 1234.34,
          customDate,
        },
        {
          firstName: 'Carmen',
          surname: 'Rowe',
          location: 'Homeland',
          role: 'Vendblend',
          age: 26,
          balanceString: '2345.23',
          balanceNumber: 2345.23,
          customDate,
        },
        {
          firstName: 'Collins',
          surname: 'Raymond',
          location: 'Foscoe',
          role: 'Farmex',
          age: 22,
          balanceString: '8765.55',
          balanceNumber: 8765.55,
          customDate,
        },
        {
          firstName: 'Case',
          surname: 'Burnett',
          location: 'Bakersville',
          role: 'Comstar',
          age: 24,
          balanceString: '4567.78',
          balanceNumber: 4567.78,
          customDate,
        },
        {
          firstName: 'Reyna',
          surname: 'Lambert',
          location: 'Lemoyne',
          role: 'Luxuria',
          age: 29,
          balanceString: '0987.33',
          balanceNumber: 987.33,
          customDate,
        },
        {
          firstName: 'Santiago',
          surname: 'Turner',
          location: 'Churchill',
          role: 'Pearlessa',
          age: 45,
          balanceString: '-1233.97',
          balanceNumber: -1233.97,
          customDate,
        },
        {
          firstName: 'Beasley',
          surname: 'Tran',
          location: 'Noblestown',
          role: 'Atomica',
          age: 32,
          balanceString: '7473.73',
          balanceNumber: 7473.73,
          customDate,
        },
        {
          firstName: 'Mason',
          surname: 'Johnston',
          location: 'Leroy',
          role: 'Zillanet',
          age: 73,
          balanceString: '853523',
          balanceNumber: 853523,
          customDate,
        },
        {
          firstName: 'Knowles',
          surname: 'Oliver',
          location: 'Cucumber',
          role: 'Orbean',
          age: 65,
          balanceString: '2356',
          balanceNumber: 2356,
          customDate,
        },
        {
          firstName: 'Nguyen',
          surname: 'Rivas',
          location: 'Ellerslie',
          role: 'Assitia',
          age: 24,
          balanceString: '8375',
          balanceNumber: 8375,
          customDate,
        },
        {
          firstName: 'Browning',
          surname: 'Gutierrez',
          location: 'Cawood',
          role: 'Softmicro',
          age: 61,
          balanceString: '17364',
          balanceNumber: 17364,
          customDate,
        },
        {
          firstName: 'Gallagher',
          surname: 'Charles',
          location: 'Limestone',
          role: 'Magnina',
          age: 43,
          balanceString: '9834',
          balanceNumber: 9834,
          customDate,
        },
        {
          firstName: 'Alexis',
          surname: 'Baldwin',
          location: 'Kapowsin',
          role: 'Oronoko',
          age: 73,
          balanceString: '8635',
          balanceNumber: 8635,
          customDate,
        },
        {
          firstName: 'Parsons',
          surname: 'Ferrell',
          location: 'Fairlee',
          role: 'Ewaves',
          age: 20,
          balanceString: '2765',
          balanceNumber: 2765,
          customDate,
        },
        {
          firstName: 'Cora',
          surname: 'Mcdaniel',
          location: 'Wadsworth',
          role: 'Norali',
          age: 42,
          balanceString: '86543',
          balanceNumber: 86543,
          customDate,
        },
      ],
      headers: [
        {
          label: 'First Name',
          dataPath: 'firstName',
          visible: true,
          disableFilters: false,
          disableSort: false,
          _headerId: '2f25ec54-354d-499c-937b-4abb34e543a1',
          _isSplitHeader: false,
        },
        {
          label: 'Surname',
          dataPath: 'surname',
          visible: true,
          disableFilters: false,
          disableSort: false,
          _headerId: '0d59a3ab-9ab9-4ab1-98ff-8f706c0bdd92',
          _isSplitHeader: false,
        },
        {
          label: 'Role',
          helpText: 'This header has helptext!',
          dataPath: 'role',
          visible: true,
          disableFilters: false,
          disableSort: false,
          _headerId: 'f3584fac-6e61-4f50-8f3a-848ebfef5f83',
          _isSplitHeader: false,
        },
        {
          label: 'Location',
          dataPath: 'location',
          visible: true,
          disableFilters: false,
          disableSort: false,
          _headerId: '3a3db1e9-ae66-45f8-b989-bc0d3eb0fb62',
          _isSplitHeader: false,
        },
        {
          label: 'Age',
          dataPath: 'age',
          visible: true,
          disableFilters: false,
          disableSort: false,
          _headerId: 'bf7a62c7-a0ba-4b7b-948e-302a7de00132',
          _isSplitHeader: false,
        },
      ],
      tableActions: [
        {
          actionKey: 'exportToExcel',
          pageExport: false,
          identifier: 'exportToExcelAnalyticsKey',
          actionConfig: {
            actionKey: 'exportTableData',
          },
          fileName: 'my-export-default',
          buttonConfig: {
            label: 'Export to Excel',
            iconBefore: {
              key: 'download',
              size: 'sm',
            },
          },
        },
        {
          actionKey: 'createUser',
          identifier: 'createUserAnalyticsKey',
          buttonConfig: {
            label: 'Create User',
            color: 'secondary',
            iconBefore: {
              key: 'plus',
              size: 'sm',
            },
          },
        },
      ],
    }
  );
    return (
        <div><h1>FLUD Table</h1>
         <fluid-table
        table-id={'my-context-actions'}
        ref={fluidTableRef}
      ></fluid-table></div>
    );
}
export default FluidTable;