<template>
    <div class="replies">
        <div class="d-flex justify-content-between align-items-center">
            <div 
                class="see-more-reply"
                @click="showAll = !showAll" 
            >
                <template v-if="Object.keys(comment.replies).length  > 3">
                    <span class="material-icons">
                        {{ showAll ? 'unfold_less' : 'unfold_more' }}
                    </span>
                    <span>{{ showAll ? 'Less' : 'More' }}</span>
                </template>
            </div>
            <div class="reply-btn" @click="isReply = !isReply">
                <span class="material-icons">
                    {{ isReply ? 'visibility_off' : 'reply' }}
                </span>
                <span>{{ isReply ? 'Hide' : 'Reply' }}</span>
            </div>
        </div>
        <template v-for="(reply, index) in comment.replies">
            <div class="item" :key="index" v-if="showAll || index >= (Object.keys(comment.replies).length - 3)">
                <div class="d-flex justify-content-between">
                    <div class="profile">
                        <img 
                            :src="reply.username == 'Anonymous' ? 'images/avatar1.png' : 'images/avatar2.png'" 
                            class="profile-image rounded-circle"
                        >
                        <div class="profile-details ml-3">
                            <strong>{{ reply.username }}</strong>
                            <div class="text-muted small">
                                {{ formatTimestamp(reply.created_at) }}
                            </div>
                        </div>
                    </div>
                </div>
                <div class="content">
                    {{ reply.content }}
                </div>
            </div>
        </template>
        <div class="reply-form" v-if="isReply">
            <div class="profile">
                <img 
                    :src="username == '' ? 'images/avatar1.png' : 'images/avatar2.png'" 
                    class="profile-image rounded-circle mr-2"
                >
            </div>
            <div class="input-group">
                <input 
                    v-model="content"
                    type="text" 
                    class="form-control" 
                    placeholder="Enter reply here..."
                >
                <div class="input-group-append submit-btn" @click.prevent="submitReply()">
                    <span class="input-group-text">
                        <i class="material-icons">send</i>
                    </span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            comment: Object,
            username: String
        },
        data() {
            return {
                content: '',
                isReply: false,
                showAll: false
            }
        },
        methods: {
            submitReply() {
                let data  = {
                    commentId: this.comment.id,
                    username: this.username ? this.username : 'Anonymous',
                    content: this.content,
                }

                axios.post(`/api/comment/reply`, data).then(response => {
                    if(response.data.result) {
                        this.content = '';
                        this.$store.dispatch("GET_COMMENTS");
                    }
                });
            },
            formatTimestamp(date) {
                return this.moment(date).fromNow();
            },
        },
    }
</script>

<style lang="scss" scoped>
    .replies {
        width: 100%;
        padding-top: 15px;


        .reply-btn {
            cursor: pointer;
            color: #d2d2d2;
            display: flex;
            justify-content: flex-end;
            margin-bottom: 5px;

            &:hover {
                span {
                    color: #337ab7;
                }
            }
        }

        .item {
            margin-left: 20px;
            padding: 15px 0 15px 35px;
            border-left: 3px solid #ccc;

            &:last-child  {
                margin-bottom: 15px;
                padding-bottom: 0;
            }

            .profile {
                display: flex;

                strong {
                    color: #337ab7;
                }
            }

            .content {
                padding-top: 5px;
                padding-left: 57px;
                font-size: 14px;
            }
        }

        .see-more-reply {
            display: flex;
            align-items: center;
            cursor: pointer;
            color: #337ab7;
        }

        .reply-form {
            display: flex;
            margin-bottom: 15px;
            padding-left: 55px;
            
            .profile {
                display: flex;

                strong {
                    color: #337ab7;
                }
            }

            .form-control {
                border-right: none;

                &:focus {
                    box-shadow: none;
                    border-color: #ced4da;
                }
            }

            .submit-btn {
                cursor: pointer;

                .input-group-text {
                    background: #fff;
                }

                &:hover {
                    .material-icons {
                        color: #337ab7;
                    }
                }
            }
        }
    }
</style>