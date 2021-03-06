db = connect('127.0.0.1:27017/youtube')

print('********DROP DATABASE*******')
db.dropDatabase()


print('********Insert documents into user collection*******')
db.user.insert(
    {
        "user_id": 1,
        "Nom_d_usuari": "Ricar",
        "email": "example@mail.com",
        "password": "1234",
        "data_naixement": "01-01-2099",
        "sexe": "A",
        "pais": "Nigeria",
        "codi_postal": "z001-333",
        "playlists": [
            { "playlist_id": 1 }
        ],
        "Videos": [
            { "Videos_id": 1 }
        ]
    })
print('********Insert documents into videos collection*******')
db.videos.insert(
    {
        "id_video": 1, "Titol": "Monty Python and the Holy Grail",
        "Descripcio": "Amazing",
        "Size": "1",
        "Nom_Arxiu": "The_pirate_bay_monty_python.torrent",
        "Durada": "Demasiado",
        "Thumbnail": "NULL",
        "Num_repetitions": 5555111221,
        "Likes": 12312, "Dislikes": 123252,
        "Estado": "Online",
        "Etiquetas": [
            { "tag_id": "2", "tag_nom": "funny" },
            { "tag_id": 1, "tag_nom": "oldies" }
        ],
        "Videos_likes": [
            { "like_id": 1, "last_update": "27-04-2021" }
        ],
        "Comments": [
            {
                "User_id": 1, "comment_text": "some troll text",
                "fecha_creacion": "27-08-2021",
                "Comments Likes": [
                    { "tipo": "Dislike", "last_update": "25-09-2020" }
                ]
            }
        ]
    }
)
print('********Insert documents into etiquetas collection*******')
db.etiquetas.insertMany(
    [
        {
            "tag_id": 1,
            "tag_nom": "funny"
        },
        { "tag_id": 2, "tag_nom": "oldies" }
    ])
print('********Insert documents into playlists collection*******')
db.playlists.insert(
    {
        "playlist_id": 1,
        "Nom": "Mi Playlist",
        "fecha_creacion": "05-12-2000",
        "estado": "activa",
        "videos": [
            { "video_id": 2 }
        ]
    })
print('********Insert documents into canals collection*******')
db.canals.insert(
    {
        "canal_id": 1,
        "nom": "mi canal",
        "descripcio": "un buen canal",
        "data_created": "11-01-2000",
        "videos":
            [
                { "video_id": 1 }
            ]
    })
print('********END OF FILE*******')