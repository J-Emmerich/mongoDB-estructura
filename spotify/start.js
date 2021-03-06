db = connect('localhost:27017/spotify')

print('*******DROP DATABASE*******')
db.dropDatabase()

print('*******Insert documents into artista collection*******')
db.artista.insert(
    {
        "artista_id": 1,
        "Nom": "Michael Jackson",
        "img_artista_url": "null",
        "artistas_relacionados":
        [
            { "artista_id": 2 }
        ]
    })
    print('*******Insert documents into album collection*******')
    db.album.insert(
        {
            "album_id": 1,
            "artista_id": 1,
            "titol": "Thriller",
            "Ano_publicacio": 1980,
            "img_portada_url": "thriller.png"
        })
        print('*******Insert documents into cancions collection*******')
        db.cancions.insert(
            {
                "cancion_id": 1,
                "album_id": 1,
                "nombre_reproducions": 55555555551245,
                "Titol": "Billy Jean",
                "durada_segons": 196
            })
            print('*******Insert documents into user collection*******')
            db.user.insert(
                {
                    "user_id": 1, "user_email": "example@mail.com",
                    "password": "qwerty123",
                    "nom_d_usuari": "headbanger666",
                    "data_naixment": "06-06-1966",
                    "sexe": "F",
                    "pais": "MX",
                    "codi_postal": "01241524",
                    "playlists":
                    [
                        { "playlist_id": 1 }
                    ],
                    "favorite_songs": [
                        { "cancion_id": 1 }
                    ],
                    "favorite_albums": [
                        { "album_id": 1 }
                    ]
                })
                print('*******Insert documents into suscripcions collection*******')
                db.suscripcions.insert(
                    {
                        "suscripcions_id": 1,
                        "id_user": 1,
                        "data_inici": "27-18-19",
                        "data_renovacio": "12-05-2021",
                        "tipo_pagamento": "tarjeta",
                        "pagaments": [
                            { "ordre_id": 1, "fecha": "24-12-2019", "total": 423.99 }
                        ], "paypal":
                        { "paypal_id": "null", "nom_usuari": "null" },
                        "tarjetas_credito":
                        {
                            "id_tarjeta": 1,
                            "numero_tarjeta": 22234343321,
                            "caducitat": "01-02-2027",
                            "codigo_seguretat": 534
                        }
                    })
                    
                    print('*******Insert documents into playlists collection*******')
                    db.playlists.insert(
                        {
                            "playlist_id": 1,
                            "titol": "Mi Playlist",
                            "nombre_cancions": 23,
                            "fecha_creacio": "15-05-2020",
                            "estado": "activa",
                            "fecha_eliminada": "29-07-2020",
                            "canciones": [
                                {
                                    "cancion_id": 2,
                                    "cancion_nom": "Bille Jean",
                                    "fecha_anadida": "12-02-2020",
                                    "user_anadio": 2
                                }
                            ]
                        })
                        print('*******END OF FILE*******')
                        