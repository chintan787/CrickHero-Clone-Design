import React from 'react';
import { NativeRouter, Route, Routes  } from "react-router-native";
import { StyleSheet } from 'react-native';
import Register from './pages/Register';
import LoginWithPin from './pages/LoginWithPin';
import Dashboard from './pages/Dashboard';
import { View } from 'react-native';
import WatchPage from './pages/WatchPage';
import MyCricket from './pages/MyCricket';
import StartAMatchPage from './pages/StartAMatchPage';
import MatchesPage from './pages/MatchesPage';
import TournamentDashboardPage from './pages/TournamentDashboardPage';
import PastMatchDetailsSinglePage from './pages/PastMatchDetailsSinglePage';
import TeamPlayersListPage from './pages/TeamPlayersListPage';
import TeamProfilePage from './pages/TeamProfilePage';
import ChatWithPlayer from './pages/ChatWithPlayer';
import DemoAnimation from './pages/DemoAnimation';
import MarketFilterPage from './pages/MarketFilterPage';
import ScrollTopPage from './pages/ScrollTopPage';

export default function Router() {
  return (
    <NativeRouter>
    <View style={styles.container}>
      
       <Routes>
       {/* <Route element={<DashboardLayout />}> */}
         
          <Route path="/" element={<Register />} />
          <Route path="/login" element={<LoginWithPin />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/watch" element={<WatchPage />} />
          <Route path='/mycricket' element={<MyCricket />} />

          <Route path="/startamatch" element={<StartAMatchPage />}/>

          <Route path="/allmatches" element={<MatchesPage />} /> 
         
           <Route path="/dashboardTournament" element={<TournamentDashboardPage />} />
          <Route path="/pastMatchDetailsSinglePage" element={<PastMatchDetailsSinglePage />} /> 
          
          <Route path="/teamPlayersList" element={<TeamPlayersListPage/>} />
          <Route path='/teamProfilePage' element={<TeamProfilePage />} />
          <Route path='/chatWithPlayer' element={<ChatWithPlayer />} />

         <Route path='/marketfilter' element={<MarketFilterPage />} />
          <Route path='/demo' element={<DemoAnimation />}  />

          <Route path='/scrollToppage' element={<ScrollTopPage />} />


          {/* 
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/login" element={<LoginWithPin />} />
          <Route path="/watch" element={<WatchPage />} />
          <Route path='/mycricket' element={<MyCricket />} />

          <Route path="/startamatch" element={<StartAMatchPage />}/> */}
         
         {/* all matches page */}
           {/* <Route path="/allmatches" element={<MatchesPage />} /> */}

          {/* <Route path="/dashboardTournament" element={<TournamentDashboardPage />} />

          <Route path="/pastMatchDetailsSinglePage" element={<PastMatchDetailsSinglePage />} />  */}


      </Routes>
    </View>
 </NativeRouter>

  )
}


const styles = StyleSheet.create({


container:{
    flex: 1, 
    // justifyContent: 'center',
    // alignItems: 'center',
    // flexDirection:'row'
  }
})