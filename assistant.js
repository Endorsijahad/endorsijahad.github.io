setTimeout(() => {
    $(document).ready(function () {
        $.getScript("/js/jquery.stylesheet.js").done(function () {
            var css = [ "/css/dolphin-style.css" ];
            $.getCss(css, function () {
                $.when(
                    // $.getScript( "https://www.google.com/recaptcha/api.js" ),
                    $.getScript("/js/dolphin-lib.js")
                ).done(function () {
                    $.when($.getScript("/js/chat.js")).done(function () {
                        Chat.init({
                            header: 'Welcome to SAMI',
                            login_sub_header: 'Please tell us about yourself',
                            connect_message: 'Do you have questions ? <br>Come chat with us, we are here to help you',
                            chat_sub_header: 'Sahabat MII',
                            url: 'https://mii.3dolphins.ai:1443',
                            client_id: '0a0791f981051e7f31aac10c163877f2',
                            client_secret: '48d82458ce95f56be9d9e3b9380f8c50',
                            type_placeholder: 'Type message...',
                            avatar: '/images/bella.png',
                            icon_avatar: '/images/bella.png',
                            agent_avatar: '/images/bella.png',
                            enable_attachment: true,
                            enable_voice: true,
                            enable_speech: true,
                            enable_queue: true,
                            enable_history: false,
                            compatibility_mode: false,
                            queue_text: "⏰NOMOR URUT: ",
                            enable_campaign: false,
                            triggerMenu: 'menu',
                            max_upload_message: "File size limit exceeded. Maximum filesize is [max_filesize]",
                        });
                    })
                })
            })
        })
    })
}, 2000);