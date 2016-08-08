import { list as expenseList }      from 'fragment/expense'
import { list as userList }         from 'fragment/user'


const totalVolume = expenseList =>
    expenseList.reduce( (s,x) => s + x.volume, 0 )

totalVolume.dependencies = [ expenseList ]

module.exports = { totalVolume }
