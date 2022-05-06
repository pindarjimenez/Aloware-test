<template>
    <div class="container post-content">
        <div class="py-5 text-center">
            <img class="d-block mx-auto mb-4 img-fluid" src="/images/aloware-logo.png">
            <h2>{{ title }}</h2>
            <div class="username">
                <label>Username: </label>
                <input 
                    v-model="username" 
                    type="text" 
                    class="form-control"
                    placeholder="Anonymous"
                >
            </div>
        </div>  

        <div class="row">
            <div class="col-lg-6" v-for="(item, index) in posts" :key="index">
                <div class="card mb-4">
                    <div class="card-body">
                        <div class="media mb-3">
                            <img :src="item.profile" class="d-block profile-image rounded-circle">
                            <div class="media-body ml-3">
                                <strong>{{ item.name }}</strong>    
                                <div class="text-muted small">{{ item.createdAt }}</div>
                            </div>
                        </div>
                        <p>{{ item.content }}</p>
                        <a href="javascript:void(0)" class="post-image" :style="`background-image: url('${item.image}');`"></a>
                    </div>
                    <div class="card-footer">
                        <div class="actions">
                            <a href="javascript:void(0)" class="d-inline-block text-muted">
                                <strong>{{ item.likeCount }}</strong> Likes
                            </a>
                            <a href="javascript:void(0)" class="d-inline-block text-muted ml-3">
                                <strong>{{ countComments(item.id) }}</strong> Comments
                            </a>
                        </div>
                        <comment :post="item" :username="username" />
                    </div>
                </div>
            </div>
        </div>

        <footer class="my-5 pt-5 text-muted text-center text-small">
            <p class="mb-1">&copy; 2022 by Pindar Jimenez</p>
            <ul class="list-inline">
                <li class="list-inline-item" v-for="(item, index) in externalLinks" :key="index">
                    <a :href="item.url">{{ item.name }}</a>
                </li>
            </ul>
        </footer>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex';
    
    export default {
        components: {
            Comment: ()  => import('./Comment'),
        },
        data() {
            return {
                title: 'Post Test Exam',
                username: '',
                posts: [
                    {
                        id: 1,
                        name: 'John Doe',
                        profile: 'images/avatar4.png',
                        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus finibus commodo bibendum. Vivamus laoreet blandit odio.',
                        image: 'https://placedog.net/500?id=3',
                        likeCount: '4',
                        createdAt: '15 mins ago'
                    },
                    {
                        id: 2,
                        name: 'Jane Doe',
                        profile: 'images/avatar3.png',
                        content: 'Quisque velit nisi, pretium ut lacinia in, elementum id enim. Vivamus magna justo, lacinia eget consectetur sed, convallis.',
                        image: 'https://placedog.net/500?id=5',
                        likeCount: '10',
                        createdAt: '2 days ago'
                    }
                ],
                externalLinks: [
                    {
                        name: 'Resume',
                        url: 'https://pindarjimenez.github.io'
                    },
                    {
                        name: 'LinkedIn',
                        url: 'https://ph.linkedin.com/in/pindar-jimenez-558292131'
                    },
                    {
                        name: 'Github',
                        url: 'https://github.com/pindarjimenez'
                    }
                ]
            }
        },
        mounted () {
            this.$store.dispatch("GET_COMMENTS");
        },
        computed: {
            ...mapGetters([
                'getComments',
            ]),
            countComments() {
                return id => {
                    let comments = this.getComments.filter(item => {
                        return item.post_id == id
                    });

                    return Object.keys(comments).length
                }
            },
        },
    }
</script>

<style lang="scss">
    .post-content {
        .username {
            display: flex;
            gap: 10px;
            max-width: 400px;
            align-items: center;

            label {
                margin-bottom: 0;
                font-size: 18px;
            }
        }

        .profile-image {
            width: 40px;
            height: auto;
        }

        .post-image {
            display: block;
            position: relative;
            width: 100%;
            height: 450px;
            background-color: transparent;
            background-position: center center;
            background-size: cover;
        }
    }
</style>