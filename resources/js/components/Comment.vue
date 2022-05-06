<template>
    <div class="comments">
        <div 
            class="see-more"
            v-if="countComment > 3"
            @click="showAll = !showAll" 
        >
            {{ showAll ? 'See Less' : 'See More' }}
        </div>
        <template v-for="(comment, index) in postComments" >
            <div class="item" :key="index" v-if="showAll || index >= (countComment - 3)">
                <div class="d-flex justify-content-between">
                    <div class="profile">
                        <img 
                            :src="comment.username == 'Anonymous' ? 'images/avatar1.png' : 'images/avatar2.png'" 
                            class="profile-image rounded-circle"
                        >
                        <div class="profile-details ml-3">
                            <strong>{{ comment.username }}</strong>
                            <div class="text-muted small">
                                {{ formatTimestamp(comment.created_at) }}
                            </div>
                        </div>
                    </div>
                </div>
                <div class="content">
                    {{ comment.content }}
                </div>
                <reply :comment="comment" :username="username" />
            </div>
        </template>
        <div class="comment-form">
            <div class="input-group">
                <input 
                    v-model="content"
                    type="text" 
                    class="form-control" 
                    placeholder="Enter comment here..."
                >
                <div class="input-group-append submit-btn" @click.prevent="submitComment()">
                    <span class="input-group-text">
                        <i class="material-icons">send</i>
                    </span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex';
    
    export default {
        components: {
            Reply: () => import('./Reply')
        },
        props: {
            post: Object,
            username: String
        },
        data() {
            return {
                content: '',
                showAll: false,
            }
        },
        computed: {
            ...mapGetters([
                'getComments',
            ]),
            postComments() {
                let comments = this.getComments.filter(item => {
                    return item.post_id == this.post.id
                });

                return comments;
            },
            countComment() {
                return Object.keys(this.postComments).length
            },
        },
        methods: {
            submitComment() {
                let data  = {
                    postId: this.post.id,
                    username: this.username ? this.username : 'Anonymous',
                    content: this.content,
                }

                axios.post(`/api/comment`, data).then(response => {
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
    .comments {
        width: 100%;
        margin-top: 15px;

        .item {
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

        .see-more {
            margin-top: 15px;
            cursor: pointer;
            color: #337ab7;
            text-align: center;
        }

        .comment-form {
            margin-top: 15px;

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