import { ReactElement } from 'react';

// material-ui
import { Grid, Stack } from '@mui/material';

// third-party
import { useFilters, useRowSelect, useTable, usePagination, Column, Row, HeaderGroup, Cell } from 'react-table';

// project import
import Layout from 'layout';
import Page from 'components/Page';
import ComponentHeader from 'components/cards/ComponentHeader';
import ComponentWrapper from 'sections/components-overview/ComponentWrapper';
import ComponentSkeleton from 'sections/components-overview/ComponentSkeleton';
import BasicSelect from 'sections/components-overview/select/BasicSelect';
import HelperTextSelect from 'sections/components-overview/select/HelperTextSelect';
import AutoWidthSelect from 'sections/components-overview/select/AutoWidthSelect';
import MultipleSelect from 'sections/components-overview/select/MultipleSelect';
import CheckmarksSelect from 'sections/components-overview/select/CheckmarksSelect';
import ChipSelect from 'sections/components-overview/select/ChipSelect';

// ==============================|| COMPONENTS - SELECT ||============================== //

const ComponentSelect = () => (
  <Page title="Select">
    <ComponentSkeleton>
      <ComponentHeader
        title="Select"
        caption="Select components are used for collecting user provided information from a list of options."
        directory="src/pages/components-overview/select"
        link="https://mui.com/material-ui/react-select/"
      />
      <ComponentWrapper>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <Stack spacing={3}>
              <BasicSelect />
              <HelperTextSelect />
              <AutoWidthSelect />
            </Stack>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Stack spacing={3}>
              <MultipleSelect />
              <CheckmarksSelect />
              <ChipSelect />
            </Stack>
          </Grid>
        </Grid>
      </ComponentWrapper>
    </ComponentSkeleton>
  </Page>
);

ComponentSelect.getLayout = function getLayout(page: ReactElement) {
  return <Layout variant="component">{page}</Layout>;
};

export default ComponentSelect;
