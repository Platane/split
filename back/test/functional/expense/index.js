import {get, post}      from '../../utils/request'
import * as bootstrap   from '../../utils/bootstrap'
import expect           from 'expect'

describe('user', function(){

    bootstrap.room()

    bootstrap.user()

    describe('add an expense', function(){

        it('should return the expense', function( ){

            const expense = bootstrap.generateExpense( this.users.map( x => x.id ) )

            return post({ pathname: `room/${ this.room.id }/expense`, data: expense })

            .then( res => {

                expect( res.expense )
                    .toContain( expense )
                    .toContainKey( 'id' )

            })
        })

        it('should have the expense in the room ( with the room route )', function( ){

            const expense = bootstrap.generateExpense( this.users.map( x => x.id ) )

            return post({ pathname: `room/${ this.room.id }/expense`, data: expense })

                .then( () => get({ pathname: `room/${ this.room.id }` }) )

                .then( res => {

                    expect( res.room ).toContainKey( 'expenses' )
                    expect( res.room.expenses.length ).toBe( 1 )

                    expect( res.room.expenses[ 0 ] )
                        .toContain( expense )
                        .toContainKey( 'id' )

                })
        })

    })
})
