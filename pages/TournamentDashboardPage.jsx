import React from 'react'
import { Text, View , StyleSheet} from 'react-native'
import TournamentDashboard from '../components/AllMatchesAndTournamentsScreen/TournamentDashboardScreens/TournamentDashboard'
import { globalStyles } from '../components/Global.css';

export default function TournamentDashboardPage() {
  return (
    <View style={globalStyles.pageContainer}>
      <TournamentDashboard msg="from Tournament" call="TournamentProfile" />
    </View>
  )
}



