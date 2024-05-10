import React, { useState } from 'react';
import { ThemeMode } from 'types/config';
import {
  Autocomplete,
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Divider,
  FormControlLabel,
  FormLabel,
  Grid,
  IconButton,
  FormHelperText,
  InputLabel,
  FormControl,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Pagination,
  Radio,
  RadioGroup,
  Slide,
  Stack,
  Switch,
  TextField,
  Theme,
  Typography,
  useMediaQuery,
  OutlinedInput,
  InputAdornment,
  CircularProgress
} from '@mui/material';
import DialogContentText from '@mui/material/DialogContentText';
import * as yup from 'yup';
import MainCard from 'components/MainCard';
import Avatar from 'components/@extended/Avatar';
import { CameraOutlined, EditFilled, CloseOutlined } from '@ant-design/icons';
import { Formik } from 'formik';
import { useTheme } from '@mui/material/styles';
import { ExclamationCircleOutlined } from '@ant-design/icons';
import { useDispatch, useSelector } from 'store';
import { getAdsDetails, toggleAdsStatus, getAllAdsData, getAdsRecord } from 'store/reducers/ads';
export default function AdsStatusConfirmToggleModal({
  modalFlagConfirm,
  updateModalFlagConfirm,
  handleConfirmation,
  selectedStatus,
  setSelectedStatus,
  id
}: any) {
  const count = useSelector((state) => state?.adsSlice?.count);
  const theme = useTheme();
  const dispatch = useDispatch();
  const adsDetails: any = useSelector((state) => state.adsSlice.adsDetails);
  const isLoading = useSelector((state) => state?.common?.loading?.toggleAdsStatus);
  return (
    <Dialog
      open={modalFlagConfirm?.adsStatusConfirmToggleModal}
      onClose={() => {
        // handleToggle();
        updateModalFlagConfirm('adsStatusConfirmToggleModal', false);
      }}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <Box sx={{ p: 1, py: 1.5, minWidth: '416px', width: '100%', height: '200' }}>
        <Stack direction="row" rowGap={2} sx={{ px: 2 }}>
          <Box sx={{ position: 'absolute', top: '1.8rem' }}>
            <ExclamationCircleOutlined style={{ color: '#FAAD14', fontSize: '22px' }} />
          </Box>
          <Box sx={{ marginLeft: 1 }}>
            <DialogTitle id="alert-dialog-title" sx={{ fontWeight: 700, fontSize: '16px', color: '#262626' }}>
              Status Alert
            </DialogTitle>
            <DialogContent>
              <DialogContentText id="alert-dialog-description" sx={{ fontWeight: 400, fontSize: '14px', color: '#262626' }}>
                Are you sure you want to change the status?
              </DialogContentText>
            </DialogContent>
          </Box>
        </Stack>
        <DialogActions>
          <Button
            variant="outlined"
            onClick={() => {
              // handleConfirmation(false);
              updateModalFlagConfirm('adsStatusConfirmToggleModal', false);
            }}
          >
            No
          </Button>
          <Button
            variant="contained"
            onClick={async () => {
              // if (adsDetails?.status === 'Accepted') {
              //   await dispatch(toggleAdsStatus({ id, status: 'Rejected' }));
              //   getAdsRecord(count);
              // } else if (adsDetails?.status === 'Rejected') {
              //   await dispatch(toggleAdsStatus({ id, status: 'Accepted' }));
              //   getAdsRecord(count);
              // }
              await dispatch(toggleAdsStatus({ id, status: selectedStatus }));
              // getAdsRecord(count);
              updateModalFlagConfirm('adsStatusConfirmToggleModal', false);
            }}
            autoFocus
          >
            {isLoading ? <CircularProgress size={20} color="inherit" /> : 'Yes'}
          </Button>
        </DialogActions>
      </Box>
    </Dialog>
  );
}
