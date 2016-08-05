
module.exports = {
    credentials : {
        private_key     : process.env.SPLIT_GCLOUD_PRIVATE_KEY.replace( /\\n/g , '\n'),
        client_email    : process.env.SPLIT_GCLOUD_MAIL,
    },
    projectId       : process.env.SPLIT_GCLOUD_PROJECTID,
}
