import { Routes, Route } from 'react-router-dom'

import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'

import ItemsList from '../components/ItemsList'
import Header from '../components/Header'
import Chat from '../components/Chat'
import ChatItemSold from '../components/ChatItemSold'
import Item from '../components/Item'
import Message from '../components/Message'
import OwnItem from '../components/OwnItem'
import LocationListBox from '../components/LocationListBox'
import ItemTypesListBox from '../components/ItemTypesListBox'
import { Field, FieldGroup, Fieldset, Label } from '../components/fieldset'
import { Button } from '../components/button'


import CreateItem from './CreateItem'
import FavItems from './FavItems'
import ChatList from './ChatList'
import ChatMessages from './ChatMessages'
import UserProfile from './UserProfile'
import MyItems from './MyItems'
import Article from './Article'


function Home({ onLoggedOut }) {
    console.log('Home rendering')

    const handleOnLoggedOut = () => {
        onLoggedOut()
    }

    return (
        <>
            <header>
                <Header onLoggedOut={handleOnLoggedOut} />
            </header>
            <main>
                <Routes>
                    <Route path="/" element={<ItemsList />} />
                    <Route path="/create" element={<CreateItem />} />
                    <Route path="/favItems" element={<FavItems />} />
                    <Route path="/chatList" element={<ChatList />} />
                    <Route path="/myItems" element={<MyItems />} />
                    <Route path="/userProfile" element={<UserProfile />} />
                    <Route path="/chatMessages" element={<ChatMessages />} />
                    <Route path="/article" element={<Article />} />

                    <Route path="/chat" element={<Chat />} />
                    <Route path="/chatItemSold" element={<ChatItemSold />} />
                    <Route path="/ownItem" element={<OwnItem />} />
                    <Route path="/item" element={<Item />} />
                    <Route path="/locationListBox" element={<LocationListBox />} />
                    <Route path="/message" element={<Message />} />
                </Routes>
            </main >
            <footer className="w-full">
                <form className="w-full flex justify-between items-center px-2 h-24 z-10">
                    <div className="input-with-select w-full">
                        <Fieldset>
                            <FieldGroup>
                                <Field>

                                    <Label htmlFor="type" name="type">Type</Label>
                                    <ItemTypesListBox />

                                </Field>
                            </FieldGroup>
                        </Fieldset>
                    </div>
                    <Button color="emerald-500" className="my-6 text-xs text-emerald-800 font-bold" type="submit">
                        <MagnifyingGlassIcon />
                    </Button>
                </form >
            </footer >
        </>
    )
}


export default Home
