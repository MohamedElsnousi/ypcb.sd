document.addEventListener("DOMContentLoaded", function() {
    const track = document.getElementById('logoTrack');
    
    // 1. Clone the internal HTML to create a seamless loop
    const trackContent = track.innerHTML;
    track.innerHTML = trackContent + trackContent; // Duplicate once for the loop
    
    // 2. Add the animation class after cloning
    track.classList.add('logo-track-animate');
    
    // Optional: Dynamic speed adjustment based on number of items
    const itemsCount = track.querySelectorAll('.slide-item').length;
    const duration = itemsCount * 3; // 3 seconds per item for smooth speed
    track.style.animationDuration = `${duration}s`;
});


        
        // Custom mobile menu toggle with smooth animations
        const customToggler = document.querySelector('.custom-toggler');
        const navbarCollapse = document.querySelector('.navbar-collapse');
        
        customToggler.addEventListener('click', function() {
            this.classList.toggle('active');
            navbarCollapse.classList.toggle('show');
            
            // Prevent body scroll when menu is open on mobile
            if (window.innerWidth <= 992) {
                if (navbarCollapse.classList.contains('show')) {
                    document.body.style.overflow = 'hidden';
                } else {
                    document.body.style.overflow = 'auto';
                }
            }
        });
        
        // Mobile dropdown click handler with smooth animation
        function setupMobileDropdowns() {
            if (window.innerWidth <= 992) {
                document.querySelectorAll('.dropdown .nav-link').forEach(link => {
                    link.addEventListener('click', function(e) {
                        // If menu is collapsed, don't prevent default
                        if (!navbarCollapse.classList.contains('show')) {
                            return;
                        }
                        
                        // Close other dropdowns
                        document.querySelectorAll('.dropdown.active').forEach(item => {
                            if (item !== this.parentElement) {
                                item.classList.remove('active');
                            }
                        });
                        
                        // Toggle current dropdown
                        const isActive = this.parentElement.classList.contains('active');
                        this.parentElement.classList.toggle('active');
                        
                        // If opening dropdown, smooth scroll
                        if (!isActive) {
                            const dropdownMenu = this.nextElementSibling;
                            dropdownMenu.style.maxHeight = dropdownMenu.scrollHeight + 'px';
                        } else {
                            this.nextElementSibling.style.maxHeight = '0';
                        }
                        
                        e.preventDefault();
                    });
                });
            }
        }
        
        // Initial setup
        setupMobileDropdowns();
        
        // Reset on window resize
        window.addEventListener('resize', function() {
            if (window.innerWidth > 992) {
                // Close mobile menu if open
                customToggler.classList.remove('active');
                navbarCollapse.classList.remove('show');
                document.body.style.overflow = 'auto';
                
                // Remove active classes from dropdowns
                document.querySelectorAll('.dropdown.active').forEach(item => {
                    item.classList.remove('active');
                    item.querySelector('.dropdown-menu').style.maxHeight = '';
                });
                
                // Reset all animations
                document.querySelectorAll('.nav-item').forEach(item => {
                    item.style.animation = 'none';
                });
            } else {
                // On mobile, reset dropdown heights
                document.querySelectorAll('.dropdown-menu').forEach(menu => {
                    if (menu.parentElement.classList.contains('active')) {
                        menu.style.maxHeight = menu.scrollHeight + 'px';
                    } else {
                        menu.style.maxHeight = '0';
                    }
                });
            }
            setupMobileDropdowns();
        });
        
        // Close menu when clicking outside on mobile
        document.addEventListener('click', function(event) {
            if (window.innerWidth <= 992) {
                if (!event.target.closest('.navbar') && navbarCollapse.classList.contains('show')) {
                    customToggler.classList.remove('active');
                    navbarCollapse.classList.remove('show');
                    document.body.style.overflow = 'auto';
                    
                    // Close all dropdowns
                    document.querySelectorAll('.dropdown.active').forEach(item => {
                        item.classList.remove('active');
                        item.querySelector('.dropdown-menu').style.maxHeight = '0';
                    });
                }
            }
        });
        
        // Close menu when clicking a link (except dropdown toggles)
        document.querySelectorAll('.nav-link').forEach(link => {
            if (!link.parentElement.classList.contains('dropdown')) {
                link.addEventListener('click', function() {
                    if (window.innerWidth <= 992 && navbarCollapse.classList.contains('show')) {
                        customToggler.classList.remove('active');
                        navbarCollapse.classList.remove('show');
                        document.body.style.overflow = 'auto';
                    }
                });
            }
        });





        
        
        // بيانات أعضاء الفريق
        const teamMembers = [
            {
                id: 1,
                name: "Wisal HASSABALLA",
                position: "Director",
                photo: "https://res.cloudinary.com/dbokfaf9p/image/upload/v1769812534/Wisal_wcyext.jpg",
                department: "leadership",
                bio: "Wisal Hassaballa serves as the Director of Youth for Peace and Capacity Building Organization, leading the organization's mission to empower communities across Sudan. With a deep commitment to humanitarian work and community development, Wisal has spearheaded numerous initiatives that have transformed lives in displaced camps and underserved regions. Her visionary leadership has been instrumental in establishing strategic partnerships and ensuring that every project delivers meaningful, sustainable impact. Wisal's dedication to transparency and accountability has earned the organization the trust of communities and donors alike.",
                email: "wisal@ypcb.org",
                phone: "+249 123 456 789",
                twitter: "#",
                linkedin: "#",
                facebook: "#",
                location: "Headquarters, Khartoum"
            },
            {
                id: 2,
                name: "Mohammed AMIR",
                position: "Board Director",
                photo: "https://res.cloudinary.com/dbokfaf9p/image/upload/v1769812495/MohammedAmir_imbaf1.jpg",
                department: "leadership",
                bio: "Mohammed Amir directs our European Union operations, building critical bridges between international supporters and communities in Sudan. With extensive experience in international development and cross-cultural collaboration, Mohammed has been pivotal in expanding the organization's reach and securing vital resources for our projects. He manages strategic relationships with European partners, coordinates fundraising initiatives, and ensures that the voice of Sudanese communities is heard on the international stage. Mohammed's expertise in grant management and donor relations has enabled the organization to scale its impact significantly.",
                email: "michael@ypcb.org",
                phone: "+249 123 456 790",
                twitter: "#",
                linkedin: "#",
                facebook: "#",
                location: "Headquarters, Khartoum"
            },
            {
                id: 3,
                name: "Batoul H. HASSABALLA",
                position: "Marketing Specialist",
                photo: "https://res.cloudinary.com/dbokfaf9p/image/upload/v1769812499/Batoul_cexff3.jpg",
                department: "technical",
                bio: "Batoul H. Hassaballa brings creative vision and strategic communication expertise to Youth for Peace and Capacity Building Organization as the Marketing Specialist. She crafts compelling narratives that showcase the organization's impact and connect supporters with the communities we serve. With a strong background in digital marketing and brand development, Batoul has transformed how the organization engages with its audience across multiple platforms. Her innovative campaigns have amplified awareness of Sudan's humanitarian needs and inspired action from supporters worldwide. Batoul is passionate about using storytelling and technology to drive social change and build lasting connections between donors and beneficiaries.",
                email: "amina@ypcb.org",
                phone: "+249 123 456 791",
                twitter: "#",
                linkedin: "#",
                facebook: "#",
                location: "Headquarters, Khartoum"
            },
            {
                id: 4,
                name: "Mohamed IBRAHIM",
                position: "IT Assistant",
                photo: "imgs/mohamed ibrahim.jpeg",
                department: "technical",
                bio: "Mohammed IBRAHIM serves as the IT Assistant, ensuring that Youth for Peace and Capacity Building Organization operates with efficiency and technological excellence. He manages the organization's digital infrastructure, maintains data security, and provides technical support across all departments. Mohammed's expertise has been crucial in implementing the computer lab at Red Sea Technical College and supporting digital literacy programs. With a keen eye for innovation, he continuously explores new technologies that can enhance the organization's operations and extend its reach. Mohammed is dedicated to leveraging technology as a tool for empowerment and ensuring that communities across Sudan benefit from digital opportunities.",
                email: "david@ypcb.org",
                phone: "+249 123 456 792",
                twitter: "#",
                linkedin: "#",
                facebook: "#",
                location: "Headquarters, Khartoum"
            }
        ];

        // عرض الفريق
        function displayTeam(filter = 'all') {
            const teamGrid = document.getElementById('team-grid');
            teamGrid.innerHTML = '';
            
            const filteredMembers = filter === 'all' 
                ? teamMembers 
                : teamMembers.filter(member => member.department === filter);
            
            filteredMembers.forEach(member => {
                const col = document.createElement('div');
                col.className = 'col';
                col.innerHTML = `
                    <div class="member-card" onclick="showMember(${member.id})">
                        <img src="${member.photo}" 
                             alt="${member.name}" 
                             class="member-photo">
                        <div class="member-name">${member.name}</div>
                        <div class="member-position">${member.position}</div>
                        <div class="member-department">${getDepartmentName(member.department)}</div>
                        <div class="social-icons">
                            <a href="${member.twitter}" class="social-icon" onclick="event.stopPropagation()" target="_blank">
                                <i class="bi bi-twitter"></i>
                            </a>
                            <a href="${member.linkedin}" class="social-icon" onclick="event.stopPropagation()" target="_blank">
                                <i class="bi bi-linkedin"></i>
                            </a>
                            <a href="${member.facebook}" class="social-icon" onclick="event.stopPropagation()" target="_blank">
                                <i class="bi bi-facebook"></i>
                            </a>
                        </div>
                    </div>
                `;
                teamGrid.appendChild(col);
            });
        }

        // الحصول على اسم القسم
        function getDepartmentName(department) {
            const departments = {
                'leadership': 'Leadership',
                'programs': 'Programs',
                'operations': 'Operations',
                'technical': 'Technical'
            };
            return departments[department] || department;
        }

        // عرض صفحة العضو المفردة
        function showMember(id) {
            const member = teamMembers.find(m => m.id === id);
            if (!member) return;
            
            // تحديث بيانات العضو
            document.getElementById('member-single-photo').src = member.photo;
            document.getElementById('member-single-photo').alt = member.name;
            document.getElementById('member-single-name').textContent = member.name;
            document.getElementById('member-single-position').textContent = member.position;
            document.getElementById('member-single-department').textContent = getDepartmentName(member.department);
            document.getElementById('member-single-bio').textContent = member.bio;
            
            // تحديث وسائل التواصل الاجتماعي فقط (بدون معلومات الاتصال)
            const socialIcons = document.getElementById('member-social-icons');
            socialIcons.innerHTML = `
                <a href="${member.twitter}" class="social-icon-large" target="_blank">
                    <i class="bi bi-twitter"></i>
                </a>
                <a href="${member.linkedin}" class="social-icon-large" target="_blank">
                    <i class="bi bi-linkedin"></i>
                </a>
                <a href="${member.facebook}" class="social-icon-large" target="_blank">
                    <i class="bi bi-facebook"></i>
                </a>
            `;
            
            // إخفاء صفحة الفريق وإظهار صفحة العضو
            document.getElementById('team-page').style.display = 'none';
            document.getElementById('member-page').style.display = 'block';
            
            // الانتقال إلى أعلى الصفحة
            window.scrollTo(0, 0);
            
            // تحديث عنوان الصفحة
            document.title = `${member.name} - Youth for Peace and Capacity Building Organization`;
        }

        // العودة إلى صفحة الفريق
        function showTeamPage() {
            document.getElementById('member-page').style.display = 'none';
            document.getElementById('team-page').style.display = 'block';
            window.scrollTo(0, 0);
            document.title = "Our Team - Youth for Peace and Capacity Building Organization";
        }

        // تصفية الفريق
        document.querySelectorAll('.filter-btn').forEach(button => {
            button.addEventListener('click', function() {
                // إزالة النشاط من جميع الأزرار
                document.querySelectorAll('.filter-btn').forEach(btn => {
                    btn.classList.remove('active');
                });
                
                // إضافة النشاط للزر المحدد
                this.classList.add('active');
                
                // تصفية الأعضاء
                const filter = this.getAttribute('data-filter');
                displayTeam(filter);
            });
        });

        // تهيئة الصفحة
        document.addEventListener('DOMContentLoaded', () => {
            displayTeam();
        });