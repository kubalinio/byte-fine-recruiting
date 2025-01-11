import { Fragment } from "react"

import { useAuth } from "@ap2p/auth"
import { Button } from "@ap2p/ui"
import { useNavigate } from "@tanstack/react-router"
import { AppLocale } from "context/locale/AppLocale.enum"
import { useLocale } from "hooks/useLocale/useLocale"
import { useUsers } from "hooks/useUsers/useUsers"

import { LocationInfo } from "../../../ui/locationInfo/LocationInfo"
import { Translation } from "../../../ui/translation/Translation"

export const Home = () => {
  const { locale, setLocale } = useLocale()
  const { user, login, logout, isAuthenticated, isAuthenticating } = useAuth()

  const {
    data: usersResponse,
    isFetching: isFetchingUsers,
    isFetched: areUsersFetched,
    hasNextPage: hasMoreUsers,
    fetchNextPage: loadMoreUsers,
    isFetchingNextPage
  } = useUsers()

  const navigate = useNavigate()

  return (
    <>
      <h2>Home</h2>
      <p>
        <Translation id='home.helloWorld' />
        <span style={{ margin: "0 1rem" }}>&#x2190;</span>
        <span>
          This text is translated using <strong>Translation</strong> component.
        </span>
        <span>Click </span>
        <Button
          className=''
          onClick={() =>
            setLocale(locale === AppLocale.pl ? AppLocale.en : AppLocale.pl)
          }
        >
          here
        </Button>{" "}
        to change language.
      </p>
      <p>
        This is a starter project for MQS React application. Click on navigation
        links above to learn more.
      </p>
      <hr />
      <LocationInfo />
      <hr />
      <div style={{ marginBottom: "2rem" }}>
        <p>User information &#129489;</p>
        <div style={{ marginBottom: "2rem", display: "flex", gap: "16px" }}>
          <button
            disabled={isAuthenticating || isAuthenticated}
            onClick={() =>
              login({ password: "react-starter", username: "mqs" })
            }
          >
            {isAuthenticating ? "Logging in..." : "Click to login"}
          </button>

          <button disabled={!isAuthenticated} onClick={logout}>
            Click to logout
          </button>
        </div>
        {isAuthenticating && <p>Loading data about you...</p>}

        {isAuthenticated && (
          <code style={{ background: "#BADA55", padding: "1rem" }}>
            {JSON.stringify(user, null, 2)}
          </code>
        )}
      </div>

      <div>
        <p>List of users &#129489;</p>
        <div style={{ marginBottom: "2rem" }}>
          <ul>
            {areUsersFetched &&
              usersResponse?.pages?.map((page, index) => (
                <Fragment key={index}>
                  {page.users?.map((user) => (
                    <li key={user.id}>
                      <button
                        onClick={() => {
                          navigate({
                            to: "/users/$id",
                            params: { id: user.id }
                          })
                        }}
                      >
                        User {user.id}
                      </button>
                    </li>
                  ))}
                </Fragment>
              ))}
          </ul>
          {isFetchingNextPage && <p>Loading more users...</p>}
          <button
            disabled={isFetchingNextPage || isFetchingUsers || !hasMoreUsers}
            onClick={() => loadMoreUsers()}
          >
            Load more
          </button>
        </div>
      </div>
    </>
  )
}
