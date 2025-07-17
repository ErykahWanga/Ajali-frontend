import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getReports } from '../features/admin/adminSlice';
import { updateStatus } from '../features/admin/adminAPI';

const AdminDashboard = () => {
  const dispatch = useDispatch();
  const { reports, loading, error } = useSelector(state => state.admin);

  useEffect(() => {
    dispatch(getReports());
  }, [dispatch]);}

  