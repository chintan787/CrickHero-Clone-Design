import React from 'react'
import { View,Text } from 'react-native'
import TournamentDashboard from '../components/AllMatchesAndTournamentsScreen/TournamentDashboardScreens/TournamentDashboard'
import { globalStyles } from '../components/Global.css'

export default function TeamProfilePage() {
  return (
    <View style={globalStyles.pageContainer}>
      {/* <Text style={globalStyles.headingH4}>Team ProfilePage</Text> */}
      <TournamentDashboard msg="from TeamProfile" call='TeamProfile' />
    </View>
  )
}
