import * as React from 'react';
import logo from '../styles/images/logo.svg'
import DashboardIcon from '@mui/icons-material/Dashboard';
import AssessmentIcon from '@mui/icons-material/Assessment';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import UpdateIcon from '@mui/icons-material/Update';
import LocationCityIcon from '@mui/icons-material/LocationCity';
import SettingsIcon from '@mui/icons-material/Settings';
import SurroundSoundIcon from '@mui/icons-material/SurroundSound';
import MenuIcon from '@mui/icons-material/Menu';

export default function Sidebar(props) {
  const {isSidebarCollapsed, setIsSidebarCollapsed} = props

  return (
      <div>
        <div className='sidebar-option collapse-sidebar' onClick={() => {setIsSidebarCollapsed(!isSidebarCollapsed)}}>
          <span><MenuIcon /></span>
        </div>

        <div className='logo-container' style={{width: isSidebarCollapsed ? '115px': '100%', height: isSidebarCollapsed ? '80px': '120px'}} >
          <img src={logo}  alt="logo" width="100%"/>
        </div>

        <div className='options-container'>
          <div className='sidebar-option'>
              <div className="sidebar-icon">
                <DashboardIcon />
              </div>
              Dashboard
            </div>
          <div className='sidebar-option'>
              <div className="sidebar-icon">
                <AssessmentIcon />
              </div>
              Reports
            </div>
          <div className='sidebar-option'>
              <div className="sidebar-icon">
                <AdminPanelSettingsIcon />
              </div>
              Admin Panel
            </div>
          <div className='sidebar-option'>
              <div className="sidebar-icon">
                <UpdateIcon />
              </div>
              Weekly Updates
            </div>
          <div className='sidebar-option'>
              <div className="sidebar-icon">
                <LocationCityIcon />
              </div>
              Organisation
            </div>
          <div className='sidebar-option'>
              <div className="sidebar-icon">
                <SettingsIcon />
              </div>
              Settings
            </div>
          <div className='sidebar-option'>
              <div className="sidebar-icon">
                <SurroundSoundIcon />
              </div>
              Announcements
            </div>
        </div>
      </div>
  )
}