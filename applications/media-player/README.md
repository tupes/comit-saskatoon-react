# Media Player Application

## Description

Inspired by features from Netflix and YouTube, this application will implement content uploading and viewing capabilities with a media content upload feature for content providers, and real-time content streaming for viewers.

## Rerquirements

A simple video streaming application that allows registered users to upload videos that can be streamed by anyone browsing through the application.

Application should has these features:

1. Registered users on Media Player Application will be able to upload videos from their local files to store the video and related details directly on MongoDB using GridFS.
2. A registered user will see a link on the menu to add new media. This link will take them to the new media form view and allow them to upload a video file along with details of the video.
3. A list of views of relevant media with a snapshot of each video to give visitors easier access and an overview of the
   videos on the application (such as videos uploaded by a single user and the most popular videos with the highest views in the application)
4. Any visitor to the Media Player Application will be able to view media details and stream the video, while only registered users will be able to edit the details and delete the media any time after they post it on the application.
5. Any visitor to the Media Player Application will be able to browse to a single media view to play the video and read the details associated with the media. Every time a specific video is loaded on the application, your application should also increment the number of views associated with the media.
6. The media edit form will be similar to the new media form, but without the upload option, and the fields will be pre-populated with the existing details.
7. An authenticated user can delete the media they uploaded to the application completely, including the media document in the Media collection, and the file chunks stored in MongoDB using GridFS.

![Example of final version](https://github.com/tupes/comit-saskatoon-react/blob/master/applications/media-player/Media-player-example.png)
