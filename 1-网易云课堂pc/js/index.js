var app = new Vue({
    el: '#app',
    data: {
        message: 'Hello Vue!',
        myStudy: [
            {
                "name": "前端工程师就业班",
                "img": "image/k-1.png",
                "nowStufy": "放大与缩小"
            }, {
                "name": "Web前端，从零基础到全栈工程师",
                "img": "image/k-2.png",
                "nowStufy": ""
            }, {
                "name": "前端小白面试指南",
                "img": "image/k-3.png",
                "nowStufy": ""
            }, {
                "name": "李游Leo - WEB前端公开课",
                "img": "image/k-4.png",
                "nowStufy": ""
            }, {
                "name": "JavaScript - 移动端开发经典教程",
                "img": "image/k-5.png",
                "nowStufy": ""
            }],
        bannerList: [
            {
                name: "首页",
            },
            {
                name: "实用英语",
            },
            {
                name: "兴趣技能",
            },
            {
                name: "职场提升",
                type: [
                    {
                        "id": "1",
                        "name": "办公软件"
                    },
                    {
                        "id": "2",
                        "name": "效率工具"
                    },
                    {
                        "id": "3",
                        "name": "求值准备",
                    },
                    {
                        "id": "4",
                        "name": "个人提升"
                    },
                    {
                        "id": "5",
                        "name": "职场能力"

                    },
                    {
                        "id": "6",
                        "name": "商业管理"
                    },
                    {
                        "id": "7",
                        "name": "专业管理",
                    },
                    {
                        "id": "8",
                        "name": "电脑基础"
                    }
                ]
            },
            {
                name: "编程与开发",
                type: [
                    {
                        "id": "1",
                        "name": "编程语言"
                    },
                    {
                        "id": "2",
                        "name": "前端开发"
                    },
                    {
                        "id": "3",
                        "name": "后端开发",
                    },
                    {
                        "id": "4",
                        "name": "移动开发"
                    },
                    {
                        "id": "5",
                        "name": "网络与安全"
                    }]
            },
            {
                name: "AI/数据科学",
                type: [
                    {
                        "id": "1",
                        "name": "编程语言"
                    },
                    {
                        "id": "2",
                        "name": "前端开发"
                    },
                    {
                        "id": "3",
                        "name": "后端开发",
                    },
                    {
                        "id": "4",
                        "name": "移动开发"
                    },
                    {
                        "id": "5",
                        "name": "网络与安全"
                    }]
            }, {
                name: "生活与兴趣",
                type: [
                    {
                        "id": "1",
                        "name": "编程语言"
                    },
                    {
                        "id": "2",
                        "name": "前端开发"
                    },
                    {
                        "id": "3",
                        "name": "后端开发",
                    },
                    {
                        "id": "4",
                        "name": "移动开发"
                    },
                    {
                        "id": "5",
                        "name": "网络与安全"
                    }]
            }, {
                name: "创意与设计",
                type: [
                    {
                        "id": "1",
                        "name": "编程语言"
                    },
                    {
                        "id": "2",
                        "name": "前端开发"
                    },
                    {
                        "id": "3",
                        "name": "后端开发",
                    },
                    {
                        "id": "4",
                        "name": "移动开发"
                    },
                    {
                        "id": "5",
                        "name": "网络与安全"
                    }]
            }
        ],
        openContent: [
            {
                time: "12月21日 20:00",
                title: "零基础轻松学Python",
                author: "毕滢",
                authorSub: "清华码神",
                type: "编程小白的Python入门课"
            },
            {
                time: "12月21日 20:00",
                title: "零基础轻松学Python",
                author: "毕滢",
                authorSub: "清华码神",
                type: "编程小白的Python入门课"
            },
            {
                time: "12月21日 20:00",
                title: "零基础轻松学Python",
                author: "毕滢",
                authorSub: "清华码神",
                type: "编程小白的Python入门课"
            },
            {
                time: "12月21日 20:00",
                title: "零基础轻松学Python",
                author: "毕滢",
                authorSub: "清华码神",
                type: "编程小白的Python入门课"
            },
            {
                time: "12月21日 20:00",
                title: "零基础轻松学Python",
                author: "毕滢",
                authorSub: "清华码神",
                type: "编程小白的Python入门课"
            }
        ],
        liveList: [
            {
                time: "今天 20:00",
                title: "1节课教你：如何用Python快速选择优质股票11",
                author: "王冕",
                authorSub: "网易特邀数据架构专家讲师",
            },
            {
                time: "今天 20:00",
                title: "1节课教你：如何用Python快速选择优质股票11",
                author: "王冕",
                authorSub: "网易特邀数据架构专家讲师",
            },
            {
                time: "今天 20:00",
                title: "1节课教你：如何用Python快速选择优质股票11",
                author: "王冕",
                authorSub: "网易特邀数据架构专家讲师",
            },
            {
                time: "今天 20:00",
                title: "1节课教你：如何用Python快速选择优质股票11",
                author: "王冕",
                authorSub: "网易特邀数据架构专家讲师",
            }, {
                time: "今天 20:00",
                title: "1节课教你：如何用Python快速选择优质股票11",
                author: "王冕",
                authorSub: "网易特邀数据架构专家讲师",
            }, {
                time: "今天 20:00",
                title: "1节课教你：如何用Python快速选择优质股票11",
                author: "王冕",
                authorSub: "网易特邀数据架构专家讲师",
            },


        ],
        techList: [
            {
                title: "UI设计师",
                desc: "打通全链路，成为独当一面的核心设计师"
            },
            {
                title: "数据分析-高薪全能班",
                desc: "21周高效掌握数据精英必备技能"
            },
            {
                title: "高级前端开发工程师",
                desc: "构建一线互联网企业Web前端全栈知识体系"
            },
            {
                title: "Java高级架构师",
                desc: "精通JAVA/高并发/微服务/分布式/中间件"
            },
        ],
        contentList: [
            {
                title: "Web前端,从零基础到全栈工程师",
                name: "李游Leo"
            },
            {
                title: "Node.js全栈开发之路",
                name: "IT老兵"
            },
            {
                title: "Web前端,从零基础到全栈工程师",
                name: "李游Leo"
            },
            {
                title: "Web前端,从零基础到全栈工程师",
                name: "李游Leo"
            },
            {
                title: "Web前端,从零基础到全栈工程师",
                name: "李游Leo"
            }
        ]
    },
    mounted() {
        this.downloadTouch();
        this.myTouch();
        this.userImageTouch();
        this.searchEvent();
        this.slider();
        this.openShow();
        this.bannerShow();
        this.windowScroll();
        this.changeInterest();
    },
    methods: {
        // 下载按钮触摸事件
        downloadTouch() {
            var downloadAppBtn = document.getElementsByClassName('downloadApp')[0];
            var downloadAppShow = document.getElementsByClassName('downloadApp-show')[0];
            var timer = null;


            downloadAppBtn.onmouseover = function () {
                clearTimeout(timer);
                if (downloadAppShow.style.display == 'block') return;
                downloadAppShow.style.display = 'block';
                downloadAppShow.style.display = 'block';
                downloadAppShow.style.transform = 'scale(0.9)';
                downloadAppShow.style.transition = '0.17s';
                setTimeout(function () {
                    downloadAppShow.style.transform = 'scale(1)';
                }, 0);
            };

            downloadAppBtn.onmouseout = function () {
                clearTimeout(timer);
                timer = setTimeout(function () {
                    downloadAppShow.style.display = 'none';
                }, 0);
            };

            downloadAppShow.onmouseover = function () {
                clearTimeout(timer);
            };
            downloadAppShow.onmouseout = function () {
                clearTimeout(timer);
                timer = setTimeout(function () {
                    downloadAppShow.style.display = 'none';
                }, 0);
            };
        },
        //我的学习触碰事件
        myTouch() {
            var myButton = document.getElementsByClassName('bannerTop-my')[0];
            var myContent = document.getElementsByClassName('bannerTop-my-content')[0];
            var timer = null;

            myButton.onmouseover = function () {
                clearTimeout(timer);
                if (myContent.style.display == 'block') return;
                myContent.style.display = 'block';
                myContent.style.display = 'block';
                myContent.style.transform = 'scale(0.9)';
                myContent.style.transition = '0.17s';
                setTimeout(function () {
                    myContent.style.transform = 'scale(1)';
                }, 0);
            };

            myButton.onmouseout = function () {
                clearTimeout(timer);
                timer = setTimeout(function () {
                    myContent.style.display = 'none';
                }, 100);
            };

            myContent.onmouseover = function () {
                clearTimeout(timer);
            };
            myContent.onmouseout = function () {
                clearTimeout(timer);
                timer = setTimeout(function () {
                    myContent.style.display = 'none';
                }, 100);
            };
        },
        // 用户头像触摸事件
        userImageTouch() {
            var userImage = document.getElementsByClassName('user-image')[0];
            var userUl = document.getElementsByClassName('user-ul')[0];
            var myContent = document.getElementsByClassName('bannerTop-my-content')[0];
            var timer = null;

            userImage.onmouseover = function () {
                clearTimeout(timer);
                if (userUl.style.display == 'block') return;
                myContent.style.display = 'none';
                userUl.style.display = 'block';
                userUl.style.transform = 'scale(0.9)';
                userUl.style.transition = '0.17s';
                setTimeout(function () {
                    userUl.style.transform = 'scale(1)';
                }, 0);
            }
            userImage.onmouseout = function () {
                clearTimeout(timer);
                timer = setTimeout(function () {
                    userUl.style.display = 'none';
                }, 300);
            };

            userUl.onmouseover = function () {
                clearTimeout(timer);
            };
            userUl.onmouseout = function () {
                clearTimeout(timer);
                timer = setTimeout(function () {
                    userUl.style.display = 'none';
                }, 300);
            };
        },
        //搜索框事件
        searchEvent() {
            var searchLeftChangeButton = document.getElementsByClassName('searchNodeLeft')[0];
            var searchLeftUl = document.getElementsByClassName('searchNodeLeft-ul')[0];
            var searchLeftUlAllNode = searchLeftUl.children;
            var searchShowOl = document.getElementsByClassName('searchNode-ol')[0];
            var searchInput = document.getElementsByClassName('searchNodeInput')[0];
            var searchNodeLeftText = document.getElementsByClassName('searchNodeLeftText')[0];
            var searchShowOlAllNode = searchShowOl.children;
            var context = {
                'k': ['摄影', '产品可视化', 'AI必学-Tensorflow', '产品经理', 'AE'],
                'w': ['城市', '滨州医学院', '51', 'edufancy', '北京理工大学']
            };


            window.onclick = function () {
                searchShowOl.style.display = 'none';
            }
            ToOlContent('k');

            function ToOlContent(text) {

                var searchShowOlAllNode = searchShowOl.children;
                searchShowOl.innerHTML = "<li class='first'>热门搜索</li>"
                searchShowOlAllNode[0].onclick = function () {
                    event.cancelBubble = true;
                };
                for (var i = 0; i < context[text].length; i++) {
                    var oLi = document.createElement('li');
                    oLi.innerHTML = '<a href="#">' + context[text][i] + '</a>';
                    searchShowOl.appendChild(oLi);
                }
                for (var i = 1; i < searchShowOlAllNode.length; i++) {
                    searchShowOlAllNode[i].onclick = function () {
                        event.cancelBubble = true;
                        searchShowOl.style.display = 'none';

                    }
                }
            }


            for (var i = 0; i < searchLeftUlAllNode.length; i++) {
                searchLeftUlAllNode[i].onclick = function () {
                    event.cancelBubble = true;
                    for (var i = 0; i < searchLeftUlAllNode.length; i++) {
                        searchLeftUlAllNode[i].className = '';
                    }
                    ;
                    searchNodeLeftText.innerHTML = this.innerHTML;
                    this.className = 'active';
                    searchLeftUl.style.display = 'none';
                    OlShow();

                    if (this.innerHTML == '网校') {
                        searchInput.placeholder = '搜索网校';
                        ToOlContent('w')
                    } else {
                        searchInput.placeholder = '零基础学JavaScript';
                        ToOlContent('k')
                    }
                };
            }
            ;

            searchLeftChangeButton.onmouseover = function () {
                //console.log(event.target.nodeName);
                if (event.target.nodeName == 'DIV' || event.target.nodeName == 'SPAN') {
                    searchLeftChangeButton.className = 'searchNodeLeft active';
                } else {
                    searchLeftChangeButton.className = 'searchNodeLeft';
                }
            };
            searchLeftChangeButton.onmouseout = function () {
                searchLeftChangeButton.className = 'searchNodeLeft';
            }

            function OlShow() {
                searchShowOl.style.transition = '0.7s';
                searchShowOl.style.opacity = '0';
                searchShowOl.style.display = 'block';
                setTimeout(function () {
                    searchShowOl.style.opacity = '1';
                }, 0);
            }

            searchInput.onclick = function () {
                event.cancelBubble = true;
                OlShow();
            }
            //searchInput.onfocus = OlShow;

            searchLeftChangeButton.onmouseenter = function () {
                searchLeftUl.style.display = 'block';
                searchShowOl.style.display = 'none';
            };

            searchLeftChangeButton.onmouseleave = function () {
                searchLeftUl.style.display = 'none';
            };

        },
        slider() {
            var timer = null;
            var num = 0;
            var setInterSlider = null;
            var allSilderButton = document.getElementsByClassName('silder-content-button')[0];
            var allSliderContent = document.getElementsByClassName('silder-content-UlNode')[0].children;
            var allLi = allSilderButton.children;
            var silderContentNode = document.getElementsByClassName('silder-content')[0];
            var colorArr = ['#5a73c6', '#f5a52c', '#f9a916', '#f64b3a', '#283042', '#0096ee', '#2b409b'];
            allSliderContent[0].style.opacity = 1;
            for (var i = 0; i < allLi.length; i++) {
                allLi[i].index = i;
                allLi[i].onmouseover = function () {

                    clearInterval(timer);
                    timer = setTimeout(function () {
                        move(this);
                        go();

                    }.bind(this), 500)
                }
            }

            function move(_this) {
                num = _this.index;
                for (var i = 0; i < allLi.length; i++) {
                    allSliderContent[i].className = '';
                    allSliderContent[i].style.opacity = 0;
                    if (allLi[i].className.indexOf('first') != -1) {
                        allLi[i].className = 'first';
                    } else {
                        allLi[i].className = '';
                    }
                }

                allSliderContent[_this.index].className = 'active';
                setTimeout(function () {
                    allSliderContent[this.index].style.opacity = '1';
                }.bind(_this), 0);
                _this.className += ' active';
                silderContentNode.style.backgroundColor = colorArr[_this.index];
            };


            go();

            function go() {
                clearInterval(setInterSlider);
                setInterSlider = setInterval(function () {
                    num++;
                    if (num == allLi.length) num = 0;
                    for (var i = 0; i < allLi.length; i++) {
                        allSliderContent[i].className = '';
                        allSliderContent[i].style.opacity = 0;
                        if (allLi[i].className.indexOf('first') != -1) {
                            allLi[i].className = 'first';
                        } else {
                            allLi[i].className = '';
                        }
                    }

                    allSliderContent[num].className = 'active';
                    setTimeout(function () {
                        allSliderContent[num].style.opacity = '1';
                    }, 0);
                    allLi[num].className += ' active';
                    silderContentNode.style.backgroundColor = colorArr[num];
                }, 5000);
            }
        },
        openShow() {
            var leftBtn = document.getElementsByClassName('card-left')[0];
            var rightBtn = document.getElementsByClassName('card-right')[0];
            var openUl = document.getElementsByClassName('open-content-slider-card')[0];
            rightBtn.style.display = 'none';

            leftBtn.onclick = function () {
                this.style.display = 'none';
                rightBtn.style.display = 'block';
                openUl.style.left = '-368px';
            };

            rightBtn.onclick = function () {
                this.style.display = 'none';
                leftBtn.style.display = 'block';
                openUl.style.left = '10px';
            };
        },
        // 导航栏的下拉事件
        bannerShow() {
            var allLi = document.getElementsByClassName('banner-a');
            var allshowOl = document.getElementsByClassName('active-ol');
            var rightOl = document.getElementsByClassName('right-ol')[0];
            for (var i = 0; i < allLi.length; i++) {
                allLi[i].onmouseover = function () {
                    for (var i = 0; i < allshowOl.length; i++) {
                        allshowOl[i].style.display = 'none';
                    }
                    if (this.parentNode.getElementsByClassName('active-ol')[0]) {
                        this.parentNode.getElementsByClassName('active-ol')[0].style.display = 'block';
                    }

                }
            }

            topBanner.onmouseleave = function () {
                for (var i = 0; i < allshowOl.length; i++) {
                    allshowOl[i].style.display = 'none';
                }
            };

            rightOl.onmouseenter = function () {
                for (var i = 0; i < allshowOl.length; i++) {
                    allshowOl[i].style.display = 'none';
                }
            };

        },
        windowScroll() {
            var topNode = document.getElementsByClassName('topNode')[0];
            var topNodeCopy = document.getElementsByClassName('topNode-copy')[0];
            var windowShow = document.getElementsByClassName('window-show')[0];
            var showT = document.getElementsByClassName('show-t')[0];
            var timer = null;
            window.onscroll = function () {

                if (document.documentElement.scrollTop >= 1) {
                    windowShow.style.display = 'block';
                } else {
                    windowShow.style.display = 'none';
                }

                if (document.documentElement.scrollTop >= 550) {
                    topNode.style.position = 'fixed';
                    topNodeCopy.style.display = 'block';
                } else {
                    topNode.style.position = 'relative';
                    topNodeCopy.style.display = 'none';
                }
                //console.log(document.documentElement.scrollTop)
            };

            showT.onclick = function () {
                clearInterval(timer);
                timer = setInterval(function () {
                    if (document.documentElement.scrollTop <= 0) {
                        clearInterval(timer);
                        return;
                    }
                    document.documentElement.scrollTop = document.documentElement.scrollTop - 100 < 0 ? 0 : document.documentElement.scrollTop - 100;
                }, 0);
            };
        },
        changeInterest() {
            var interestBtn = document.getElementsByClassName('interest-r')[0];
            var mask = document.getElementsByClassName('mask')[0];
            var alertNode = document.getElementsByClassName('alertNode')[0];
            var alertNodeUlAllLi = document.getElementsByClassName('alertNode-ul')[0].children;
            var allUl = document.getElementsByClassName('alertNode-content')[0].children;
            var allLi = document.getElementsByClassName('alertNode-content')[0].getElementsByTagName('li');
            var alertNodeOl = document.getElementsByClassName('alertNode-ol')[0];
            mask.style.transition = '.5s';
            alertNode.style.transition = '.5s';
            mask.style.opacity = 0;
            alertNode.style.opacity = 0;
            interestBtn.onclick = function () {
                mask.style.display = 'block';
                alertNode.style.display = 'block';
                setTimeout(function () {
                    mask.style.opacity = 1;
                    alertNode.style.opacity = 1;
                }, 0);
                setTimeout(function () {
                    mask.style.transition = '0s';
                    alertNode.style.transition = '0s';
                }, 500);
            };

            for (var i = 0; i < alertNodeUlAllLi.length; i++) {
                alertNodeUlAllLi[i].index = i;
                alertNodeUlAllLi[i].onclick = function () {
                    for (var j = 0; j < alertNodeUlAllLi.length; j++) {
                        allUl[j].className = '';
                        alertNodeUlAllLi[j].className = '';
                    }
                    ;
                    alertNodeUlAllLi[alertNodeUlAllLi.length - 1].className = 'no';
                    this.className += ' active';
                    allUl[this.index].className = 'show';
                }
            }
            ;

            alertNodeOl.onclick = function () {
                if (event.target.nodeName == 'IMG') {
                    for (var i = 0; i < allLi.length; i++) {
                        if (allLi[i].innerText == event.target.parentNode.title) {
                            allLi[i].className = '';
                            break;
                        }
                    }
                    alertNodeOl.removeChild(event.target.parentNode);
                    allNumber.innerText = alertNodeOl.children.length - 1;
                    alertNode.style.marginTop = -alertNode.offsetHeight / 2 + 'px';
                }
            };

            for (var i = 0; i < allLi.length; i++) {
                allLi[i].onclick = function () {
                    if (this.className == 'active') {
                        this.className = '';
                        for (var i = 0; i < alertNodeOl.children.length; i++) {
                            if (this.innerText == alertNodeOl.children[i].title) {
                                alertNodeOl.removeChild(alertNodeOl.children[i]);
                                break;
                            }
                        }
                        ;
                    } else {
                        this.className = 'active';
                        var oLi = document.createElement('li');
                        oLi.title = this.innerText;
                        oLi.innerHTML = this.innerText + '<img src="image/colosd.gif">';
                        alertNodeOl.appendChild(oLi);
                    }
                    allNumber.innerText = alertNodeOl.children.length - 1;

                    alertNode.style.marginTop = -alertNode.offsetHeight / 2 + 'px';
                };
                allLi[i].onmousedown = function () {
                    return false;
                };
            }
            ;

            chooseBtnNode.onclick = alertNodeClosed.onclick = function () {
                mask.style.transition = '0.5s';
                alertNode.style.transition = '0.5s';
                setTimeout(function () {
                    mask.style.opacity = '0';
                    alertNode.style.opacity = '0';
                }, 0);
                setTimeout(function () {
                    mask.style.display = 'none';
                    alertNode.style.display = 'none';
                }, 700);
            }
        },
    }
})
