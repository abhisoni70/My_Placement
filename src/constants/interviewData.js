export const INTERVIEW_TOPICS = [
  { id: "sql",      label: "SQL",                      icon: "🗄️",  active: true },
  { id: "python",   label: "Python",                   icon: "🐍",  active: true },
  { id: "hr",       label: "HR Questions",             icon: "🤝",  active: false },
  { id: "java",     label: "Java",                     icon: "☕",  active: true },
  { id: "dsa",      label: "DSA",                      icon: "🌳",  active: true },
  { id: "django",   label: "Django",                   icon: "🎸",  active: true },
  { id: "project",  label: "Project Related Questions", icon: "📁", active: false },
];

export const DJANGO_QUESTIONS = [
  {
    id: 1,
    difficulty: "Easy",
    category: "Basics",
    question: "Django kya hai?",
    answer: `Django ek Python web framework hai jo websites aur web applications jaldi aur aasaani se banane mein help karta hai.

Django ek **high-level Python web framework** hai jo secure, scalable aur fast web applications easily develop karne ke liye use hota hai.

**Key Features:**
- ⚡ **Fast development** – apps jaldi build karo
- 🛠️ **Built-in admin panel** – data easily manage karo
- 🗄️ **ORM** – Python se database interact karo, SQL ki zaroorat nahi
- 🔐 **Secure** – common attacks se protect karta hai
- 📈 **Scalable** – Instagram jaisi badi websites use karti hain`,
    tags: ["Django", "Framework", "Introduction"],
  },
  {
    id: 2,
    difficulty: "Easy",
    category: "Basics",
    question: "Django ko high-level framework kyun kehte hain?",
    answer: `Django ko high-level framework isliye kehte hain kyunki yeh developers ko low-level details ki chinta kiye bina web applications jaldi banana allow karta hai.

**Reasons why Django is high-level:**

1. **Less code, more work** — Authentication, admin panel, forms jaisi ready-made features milti hain
2. **No low-level tasks** — Database connections, security, URL routing manually handle nahi karna padta
3. **Built-in ORM** — Python code se database interact karo, complex SQL queries ki zaroorat nahi
4. **Security automatically handled** — SQL Injection, CSRF, XSS jaale common attacks se protect karta hai
5. **Best practices follow karta hai** — Clean structure enforce karta hai, code easy to maintain hota hai`,
    tags: ["High-level", "Framework", "Basics"],
  },
  {
    id: 3,
    difficulty: "Easy",
    category: "Basics",
    question: "Django aur Flask mein kya difference hai?",
    answer: `**Django vs Flask (Easy Comparison):**

| Feature | Django | Flask |
|---|---|---|
| Type | Full-stack framework | Micro framework |
| Setup | More built-in features | Very lightweight |
| Database | Built-in ORM | No ORM by default |
| Admin Panel | Available by default | Not available |
| Learning Curve | Slightly harder for beginners | Very easy to start |
| Flexibility | Less flexible (follows rules) | Very flexible |
| Best for | Large & complex projects | Small & simple projects |`,
    tags: ["Django", "Flask", "Comparison"],
  },
  {
    id: 4,
    difficulty: "Easy",
    category: "Architecture",
    question: "Django mein MVT architecture kya hai? Explain karo.",
    answer: `MVT Django ka architecture hai jahan **Model** data handle karta hai, **View** logic handle karta hai, aur **Template** presentation handle karta hai.

**MVT = Model + View + Template**

**1️⃣ Model (Data part)**
- Database handle karta hai
- Python classes se tables define karta hai
- Data create, read, update, delete manage karta hai
- 📌 Example: Student name, roll number, marks

**2️⃣ View (Logic part)**
- Business logic handle karta hai
- User se request leta hai
- Model se data fetch karta hai
- Data Template ko bhejta hai
- 📌 Example: Student details fetch karke process karna

**3️⃣ Template (Design part)**
- UI (HTML) handle karta hai
- User ko data dikhata hai
- Django Template Language use karta hai
- 📌 Example: Student details webpage pe display karna

**Simple Flow 🔄**
1. User request bhejta hai (URL)
2. View request receive karta hai
3. View Model se interact karta hai
4. View data Template ko bhejta hai
5. Template data user ko display karta hai`,
    tags: ["MVT", "Architecture", "Model", "View", "Template"],
  },
  {
    id: 5,
    difficulty: "Easy",
    category: "Models",
    question: "Django models kya hote hain?",
    answer: `Django models Python classes hote hain jo database tables ki structure define karte hain aur database data easily manage karne mein help karte hain.

**Simple words mein:** Model ek database table ka blueprint hai.

**Django models kya karte hain?**
- Database tables create karte hain
- Fields (columns) define karte hain
- Data easily store aur retrieve karte hain
- Python se database ke saath kaam karte hain, SQL nahi

**Why Django models are useful ✅**
- SQL queries likhne ki zaroorat nahi
- Easy database operations (CRUD)
- Different databases ke saath kaam karta hai (MySQL, SQLite, PostgreSQL)
- Secure aur clean code

\`\`\`python
class Student(models.Model):
    name = models.CharField(max_length=100)
    roll_no = models.IntegerField()
    marks = models.FloatField()
\`\`\``,
    tags: ["Models", "Database", "ORM"],
  },
  {
    id: 6,
    difficulty: "Easy",
    category: "Views",
    question: "Django view kya hota hai?",
    answer: `Django view ek Python function ya class hai jo user requests handle karta hai aur responses return karta hai.

**Simple words mein:** View application ka "brain" hai. Yeh decide karta hai jab user koi page open kare toh kya karna hai.

**Django view kya karta hai?**
- Browser se request receive karta hai
- Logic perform karta hai (calculations, conditions, etc.)
- Model se data fetch karta hai
- Template ko data bhejta hai
- Response return karta hai (HTML, JSON, etc.)

\`\`\`python
from django.shortcuts import render

def student_list(request):
    students = Student.objects.all()   # Model se data
    return render(request, 'students.html', {'students': students})  # Template ko bhejo
\`\`\``,
    tags: ["Views", "Request", "Response"],
  },
  {
    id: 7,
    difficulty: "Easy",
    category: "Templates",
    question: "Django templates kya hote hain?",
    answer: `Django templates HTML files hoti hain jo user ko dynamic content (Django views se aata data) dikhati hain.

**Django templates kya karte hain?**
- UI / frontend handle karta hai
- Views se data display karta hai
- Django Template Language (DTL) use karta hai
- Design ko logic se alag rakhta hai

**Why use Django templates? ✅**
- Reusable HTML code
- Clean aur organized structure
- Loops aur conditions support karta hai
- Easy to maintain

\`\`\`html
<!-- students.html -->
{% for student in students %}
  <p>{{ student.name }} - {{ student.marks }}</p>
{% endfor %}
\`\`\``,
    tags: ["Templates", "DTL", "Frontend"],
  },
  {
    id: 8,
    difficulty: "Easy",
    category: "Configuration",
    question: "settings.py ka kya use hai?",
    answer: `settings.py Django project ki **main configuration file** hai. Yeh aapke Django project ka control center hai jahan saari important settings define hoti hain.

**settings.py kisliye use hota hai? ✅**

1. **Installed apps** — Project mein use hone wale saare apps ki list
   \`\`\`python
   INSTALLED_APPS = []
   \`\`\`
2. **Database configuration** — Django kaunsa database use karega (SQLite, MySQL, etc.)
   \`\`\`python
   DATABASES = {}
   \`\`\`
3. **Static and media files** — CSS, JS, images handle karta hai
4. **Templates settings** — Django ko batata hai templates kahan stored hain
5. **Security settings** — Secret key, debug mode, allowed hosts
6. **Middleware configuration** — Request/response processing layers define karta hai`,
    tags: ["settings.py", "Configuration", "Project Setup"],
  },
  {
    id: 9,
    difficulty: "Easy",
    category: "URL Routing",
    question: "urls.py kisliye use hota hai?",
    answer: `urls.py website URLs ko Django views se map karne ke liye use hota hai.

**Simple words mein:** urls.py Django ko batata hai ki jab user koi specific URL enter kare toh kaunsa page dikhana hai.

**urls.py kya karta hai? ✅**
- URLs ko views se connect karta hai
- Website navigation control karta hai
- Decide karta hai ki kaunse URL ke liye kaunsa function run hoga

\`\`\`python
from django.urls import path
from . import views

urlpatterns = [
    path('students/', views.student_list, name='student-list'),
    path('students/<int:id>/', views.student_detail, name='student-detail'),
]
\`\`\``,
    tags: ["urls.py", "URL Routing", "Navigation"],
  },
  {
    id: 10,
    difficulty: "Medium",
    category: "ORM",
    question: "Django ORM kya hai?",
    answer: `Django ORM (Object Relational Mapping) ek tool hai jo aapko SQL queries likhne ki jagah Python code se database ke saath interact karne deta hai.

**Simple words mein:** Django ORM database tables ke saath Python objects ki tarah kaam karne deta hai.

**Django ORM kya karta hai? ✅**
- Python code ko SQL mein convert karta hai
- Database operations easily perform karta hai
- Complex SQL queries likhne ki zaroorat nahi
- Different databases ke saath kaam karta hai

**Common ORM operations:**
\`\`\`python
# Create
Student.objects.create(name="Rahul", marks=85)

# Read
students = Student.objects.all()

# Update
student = Student.objects.get(id=1)
student.marks = 90
student.save()

# Delete
student.delete()
\`\`\``,
    tags: ["ORM", "Database", "QuerySet"],
  },
  {
    id: 11,
    difficulty: "Easy",
    category: "Database",
    question: "Django mein migration kya hai?",
    answer: `Migration Django mein models mein ki gayi changes ko database pe apply karne ka process hai.

**Simple words mein:** Migration batata hai ki jab aap models change karo toh Django kaise database tables create ya update kare.

**Migrations kyun zaroori hain? ✅**
- Models se tables create karne ke liye
- Fields add, remove, ya modify hone par tables update karne ke liye
- Models aur database ko sync rakhne ke liye

**Migration kaise kaam karta hai 🔄**
1. Aap model change karte ho
2. \`makemigrations\` run karo → Django migration file create karta hai
3. \`migrate\` run karo → Django database mein changes apply karta hai

\`\`\`bash
python manage.py makemigrations
python manage.py migrate
\`\`\``,
    tags: ["Migration", "Database", "makemigrations", "migrate"],
  },
  {
    id: 12,
    difficulty: "Easy",
    category: "Project Setup",
    question: "manage.py ka kya use hai?",
    answer: `manage.py ek **command-line utility** hai jo aapko apna Django project manage aur control karne mein help karta hai.

**Simple words mein:** manage.py commands use karke Django tasks run aur manage karne deta hai.

**manage.py se kya kar sakte ho? ✅**

\`\`\`bash
# Development server start karo
python manage.py runserver

# App create karo
python manage.py startapp appname

# Migrations run karo
python manage.py migrate

# Superuser create karo
python manage.py createsuperuser

# Django shell open karo
python manage.py shell
\`\`\``,
    tags: ["manage.py", "CLI", "Commands"],
  },
  {
    id: 13,
    difficulty: "Easy",
    category: "Project Structure",
    question: "Django project aur Django app mein kya difference hai?",
    answer: `**Django Project** poori website hai, jabki **Django App** project ke andar ek specific functionality handle karne wala chhota module hai.

**🏗️ Django Project:**
- Poori website ya application hai
- Saari settings, configurations, aur apps contain karta hai
- Aise create karo:
\`\`\`bash
django-admin startproject projectname
\`\`\`
- 📌 Example: College management system website

**🧩 Django App:**
- Ek chhota module jo specific function perform karta hai
- Ek project mein multiple apps ho sakte hain
- Aise create karo:
\`\`\`bash
python manage.py startapp appname
\`\`\`
- 📌 Example apps: Student app, Teacher app, Fees app

| Django Project | Django App |
|---|---|
| Complete website | Part of website |
| Contains settings | Contains specific features |
| Can have many apps | Belongs to a project |`,
    tags: ["Project", "App", "Structure"],
  },
  {
    id: 14,
    difficulty: "Medium",
    category: "Middleware",
    question: "Django middleware kya hote hain?",
    answer: `Django middleware components hain jo request aur response cycle ke beech kaam karte hain.

Middleware ek **middle layer** ki tarah kaam karta hai jo request ke view tak pahunchne se pehle aur response user ke paas jaane se pehle process karta hai.

**Django middleware kya karta hai? ✅**
- Security handle karta hai
- Sessions manage karta hai
- Authentication perform karta hai
- Requests aur responses modify karta hai
- User activities log karta hai

**Flow:**
\`\`\`
User Request → Middleware → View → Middleware → User Response
\`\`\`

**Built-in middleware examples:**
- \`SecurityMiddleware\` — HTTPS enforce karta hai
- \`SessionMiddleware\` — Sessions manage karta hai
- \`AuthenticationMiddleware\` — User authenticate karta hai
- \`CsrfViewMiddleware\` — CSRF protection deta hai`,
    tags: ["Middleware", "Request", "Response", "Security"],
  },
  {
    id: 15,
    difficulty: "Easy",
    category: "Admin",
    question: "Django admin interface kya hai?",
    answer: `Django admin interface ek **built-in dashboard** hai jo developers ko database data aasaani se manage karne deta hai.

**Simple words mein:** Yeh ek ready-made admin panel hai jahan aap extra code likhe bina data add, update, delete aur view kar sakte ho.

**Django Admin se kya kar sakte ho? ✅**
- Users aur permissions manage karo
- Database records add, edit, delete karo
- Model data table format mein dekho
- Site content easily control karo

**Admin access kaise karo:**
\`\`\`bash
# Pehle superuser create karo
python manage.py createsuperuser

# Browser mein open karo
http://127.0.0.1:8000/admin/
\`\`\`

**Model ko admin mein register karo:**
\`\`\`python
# admin.py
from django.contrib import admin
from .models import Student

admin.site.register(Student)
\`\`\``,
    tags: ["Admin", "Dashboard", "Superuser"],
  },
  {
    id: 16,
    difficulty: "Easy",
    category: "Configuration",
    question: "INSTALLED_APPS kya hai?",
    answer: `INSTALLED_APPS settings.py mein ek list hai jo Django ko batati hai ki project mein kaunse apps active hain.

**Simple words mein:** Yeh wo jagah hai jahan aap saare Django apps register karte ho taaki Django unhe use kare.

**INSTALLED_APPS kya karta hai? ✅**
- Django apps activate karta hai
- Models, admin, aur migrations enable karta hai
- Built-in Django apps aur custom apps include karta hai

\`\`\`python
INSTALLED_APPS = [
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    # Aapka custom app
    'student_app',
    'teacher_app',
]
\`\`\`

**Yeh kyun important hai? ⭐**
- Bina yahan add kiye, Django app ko recognize nahi karega
- Us app ke liye migrations aur admin kaam nahi karenge`,
    tags: ["INSTALLED_APPS", "settings.py", "Configuration"],
  },
  {
    id: 17,
    difficulty: "Easy",
    category: "HTTP",
    question: "GET aur POST methods mein kya difference hai?",
    answer: `GET aur POST HTTP methods hain jo client (browser) se server ko data bhejne ke liye use hote hain.

**Simple idea:**
- **GET** → Data request karo
- **POST** → Data securely bhejo

| Feature | GET | POST |
|---|---|---|
| Data location | URL mein | Request body mein |
| Security | Less secure | More secure |
| Data limit | Limited | No limit |
| Used for | Data fetch karna | Data send karna |
| Bookmark | Ho sakta hai | Nahi ho sakta |
| Example use | Search | Login, forms |

**Real-life example 🌍**
- GET = Information maangna
- POST = Form submit karna

\`\`\`python
def my_view(request):
    if request.method == 'GET':
        # Data fetch karo
        pass
    elif request.method == 'POST':
        # Form data process karo
        data = request.POST.get('name')
\`\`\``,
    tags: ["GET", "POST", "HTTP Methods"],
  },
  {
    id: 18,
    difficulty: "Medium",
    category: "Forms",
    question: "Django forms kya hote hain?",
    answer: `Django forms user input collect, validate, aur process karne ke liye use hote hain.

**Simple words mein:** Django forms Python code use karke HTML forms handle karne mein help karte hain.

**Django forms kya karte hain? ✅**
- Form fields automatically create karte hain
- User input validate karte hain
- Invalid data se protect karte hain
- Manual HTML aur validation ka kaam reduce karte hain

**Types of Django Forms 🧠**
1. **Form** — Normal form (database se linked nahi)
2. **ModelForm** — Seedha model (database) se connected

\`\`\`python
# Normal Form
class StudentForm(forms.Form):
    name = forms.CharField(max_length=100)
    marks = forms.FloatField()

# ModelForm
class StudentModelForm(forms.ModelForm):
    class Meta:
        model = Student
        fields = ['name', 'marks']
\`\`\`

**Why use Django forms? 🌟**
- Built-in validation
- Cleaner aur safer code
- Views aur templates ke saath easy integration`,
    tags: ["Forms", "ModelForm", "Validation"],
  },
  {
    id: 19,
    difficulty: "Medium",
    category: "Security",
    question: "Django mein CSRF protection kya hai?",
    answer: `CSRF (Cross-Site Request Forgery) protection Django mein ek security feature hai jo website ko fake ya unauthorized requests se protect karta hai.

**Simple words mein:** CSRF protection ensure karta hai ki sirf genuine users hi website pe forms submit kar sakein.

**CSRF protection kyun zaroori hai? 🔐**
Bina CSRF protection ke:
- Ek hacker logged-in user ko trick kar sakta hai
- Bina permission ke password change ya form submit jaisi actions perform kar sakta hai

**Django CSRF se kaise protect karta hai 🛡️**
- Django ek CSRF token generate karta hai
- Token form ke saath bheja jaata hai
- Server request process karne se pehle token verify karta hai

\`\`\`html
<!-- Template mein -->
<form method="post">
    {% csrf_token %}
    <button type="submit">Submit</button>
</form>
\`\`\`

**Real-life example 🌍**
- CSRF token = Secret code
- Form submission = Entry pass
- Code ke bina → entry denied`,
    tags: ["CSRF", "Security", "Forms"],
  },
  {
    id: 20,
    difficulty: "Easy",
    category: "Admin",
    question: "Django mein superuser kya hota hai?",
    answer: `Superuser ek admin user hai jiske paas Django admin panel ka **full access** hota hai.

**Simple words mein:** Superuser Django admin interface mein sab kuch control kar sakta hai.

**Superuser kya kar sakta hai? ✅**
- Django admin panel access kar sakta hai
- Koi bhi data add, edit, delete kar sakta hai
- Users aur permissions manage kar sakta hai
- Saare apps aur models control kar sakta hai

**Superuser kaise create karein:**
\`\`\`bash
python manage.py createsuperuser
# Phir naam, email, password enter karo
\`\`\`

**Login karo:**
\`\`\`
http://127.0.0.1:8000/admin/
\`\`\``,
    tags: ["Superuser", "Admin", "Permissions"],
  },
  {
    id: 21,
    difficulty: "Easy",
    category: "Static Files",
    question: "Django mein static files ka kya use hai?",
    answer: `Static files website ko style aur design karne ke liye use hoti hain.

**Static files include karte hain 📁**
- **CSS** → Styling
- **JavaScript** → Interactions
- **Images** → Logos, banners
- **Fonts** → Typography

**Static files kyun important hain? ⭐**
- UI/UX improve karte hain
- Website ko attractive banate hain
- Design ko logic se alag rakhte hain

**Settings mein configure karo:**
\`\`\`python
# settings.py
STATIC_URL = '/static/'
STATICFILES_DIRS = [BASE_DIR / 'static']
\`\`\`

**Template mein use karo:**
\`\`\`html
{% load static %}
<link rel="stylesheet" href="{% static 'css/style.css' %}">
<img src="{% static 'images/logo.png' %}">
\`\`\`

**Real-life example 🌍:** Static files = Kapde aur makeup, Website = Insaan`,
    tags: ["Static Files", "CSS", "JavaScript", "Images"],
  },
  {
    id: 22,
    difficulty: "Easy",
    category: "Media Files",
    question: "Django mein media files kya hoti hain? Static files se kya fark hai?",
    answer: `Media files woh files hain jo users aapki website ke through upload karte hain.

**Media files ke examples:**
- Profile pictures
- Documents (PDF, DOC)
- Videos
- Audio files

📌 Example: User ne profile photo upload ki — woh photo ek media file hai.

**Media Files vs Static Files:**

| | Static Files | Media Files |
|---|---|---|
| Type | Fixed files | User-uploaded files |
| Examples | CSS, JS, images | Images, videos, documents |
| Users | Same for all users | Different for each user |
| Storage | \`static/\` folder | \`media/\` folder |

**Settings mein configure karo:**
\`\`\`python
# settings.py
MEDIA_URL = '/media/'
MEDIA_ROOT = BASE_DIR / 'media'
\`\`\``,
    tags: ["Media Files", "File Upload", "Static Files"],
  },
  {
    id: 23,
    difficulty: "Easy",
    category: "Environment",
    question: "Virtual environment kya hai aur kyun use karte hain?",
    answer: `Virtual environment Python mein ek isolated environment hai jo aapko project-specific packages ko system ke global Python installation se independently install aur manage karne deta hai.

**Virtual environment kyun use karte hain?**

1. **Dependency conflicts avoid karna** — Different projects ko same library ke different versions ki zaroorat ho sakti hai
2. **Projects ko isolated rakhna** — Ek project mein changes dusre projects ko affect nahi karte
3. **System Python clean rakhna** — Globally unnecessary packages install nahi hoti
4. **Consistent development & deployment** — Development, testing, aur production mein same dependencies use hoti hain

**Django ke context mein:**
- Har Django project ka apna virtual environment hota hai
- Dependencies \`requirements.txt\` mein listed hoti hain
- Deployment aasaan aur safe hota hai

\`\`\`bash
# Virtual environment create karo
python -m venv venv

# Activate karo (Windows)
venv\\Scripts\\activate

# Activate karo (Mac/Linux)
source venv/bin/activate
\`\`\``,
    tags: ["Virtual Environment", "venv", "Dependencies"],
  },
  {
    id: 24,
    difficulty: "Easy",
    category: "Project Setup",
    question: "requirements.txt ka kya purpose hai?",
    answer: `requirements.txt Python projects (including Django) mein use hoti hai jo project ke depend karne wali saari external libraries aur unke versions ki list rakhti hai.

**Yeh kyun important hai:**
- 📦 **Dependency management** — Saare required Python packages ka track rakhta hai
- 🔁 **Consistent environment** — Ensure karta hai ki sabhi same package versions use karein
- 🚀 **Easy setup** — Ek saath saari dependencies quickly install karne mein help karta hai
- 🛠️ **Deployment ready** — Servers, CI/CD, aur cloud platforms ke liye required hai

**Kaise generate karte hain:**
\`\`\`bash
pip freeze > requirements.txt
\`\`\`

**Kaise install karte hain:**
\`\`\`bash
pip install -r requirements.txt
\`\`\`

**requirements.txt example:**
\`\`\`
Django==4.2.0
mysqlclient==2.1.1
Pillow==9.5.0
djangorestframework==3.14.0
\`\`\``,
    tags: ["requirements.txt", "Dependencies", "Deployment"],
  },
  {
    id: 25,
    difficulty: "Medium",
    category: "ORM",
    question: "Django mein QuerySet kya hota hai?",
    answer: `Django mein QuerySet database se Django ORM use karke retrieve kiye gaye database objects ka collection hai.

**Simple Definition:** QuerySet database se objects ki ek list represent karta hai jise Django ORM use karke filter, order, aur manipulate kiya ja sakta hai.

\`\`\`python
from app.models import Student

students = Student.objects.all()
# yahan students ek QuerySet hai jisme Student table ke saare records hain
\`\`\`

**Common QuerySet methods:**
\`\`\`python
# Saare records
Student.objects.all()

# Condition ke saath filter
Student.objects.filter(marks__gte=60)

# Specific records exclude karo
Student.objects.exclude(marks__lt=35)

# Single record
Student.objects.get(id=1)

# Sort karo
Student.objects.order_by('-marks')  # descending
\`\`\`

**QuerySet lazy hota hai** — Jab tak actually evaluate na ho, database query nahi chalti.`,
    tags: ["QuerySet", "ORM", "Database"],
  },
  {
    id: 26,
    difficulty: "Medium",
    category: "ORM",
    question: "filter() aur get() mein kya difference hai?",
    answer: `**Difference between filter() and get() in Django:**

| Feature | filter() | get() |
|---|---|---|
| Returned result | QuerySet return karta hai | Single object return karta hai |
| Number of records | 0, 1, ya many records return kar sakta hai | Exactly one record return karna chahiye |
| Exception | Record na mile toh koi exception nahi | DoesNotExist raise karta hai |
| Multiple records | Allowed | MultipleObjectsReturned raise karta hai |
| Usage | Jab multiple results possible hon | Jab sirf ek result expected ho |

**filter() Example:**
\`\`\`python
students = Student.objects.filter(age=20)
# QuerySet return karta hai (empty bhi ho sakta hai ya many objects)
\`\`\`

**get() Example:**
\`\`\`python
student = Student.objects.get(id=1)
# Single Student object return karta hai
\`\`\`

**Interview Tip:** get() use karo jab aap sure ho ki exactly ek record milega (jaise primary key se). filter() use karo jab multiple results possible hon.`,
    tags: ["filter()", "get()", "QuerySet", "ORM"],
  },
  {
    id: 27,
    difficulty: "Medium",
    category: "REST API",
    question: "Django REST Framework (DRF) kya hai?",
    answer: `Django REST Framework (DRF) Django ke upar built ek powerful toolkit hai jo developers ko RESTful APIs aasaani se aur efficiently banana mein help karta hai.

**Simple Definition:** DRF ek Django-based framework hai jo web aur mobile applications ke liye REST APIs create karne ke liye use hota hai.

**DRF kyun use karte hain:**
- 🌐 Backend data ko APIs ke roop mein expose karne ke liye
- 📱 Mobile apps, frontend frameworks (React, Angular) ko serve karne ke liye
- 🔐 Authentication aur permissions handle karne ke liye
- 📄 Data serialize karne ke liye (models ↔ JSON convert karna)

**DRF install karo:**
\`\`\`bash
pip install djangorestframework
\`\`\`

**Simple API example:**
\`\`\`python
from rest_framework import serializers, viewsets
from .models import Student

class StudentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Student
        fields = '__all__'

class StudentViewSet(viewsets.ModelViewSet):
    queryset = Student.objects.all()
    serializer_class = StudentSerializer
\`\`\``,
    tags: ["DRF", "REST API", "Serializer"],
  },
  {
    id: 28,
    difficulty: "Easy",
    category: "Models",
    question: "Models mein __str__() method ka kya use hai?",
    answer: `Django models mein \`__str__()\` method ek model object ki human-readable string representation define karne ke liye use hota hai.

**Simple Definition:** \`__str__()\` method ek model object ke liye readable string return karta hai, mainly display purposes ke liye use hota hai.

**Yeh kyun important hai:**
- 📋 Django Admin mein objects readable banata hai
- 🐞 Debugging aur logging mein help karta hai
- 👀 Shell aur QuerySets mein readability improve karta hai

**Bina __str__() ke:**
\`\`\`
<Student object (1)>   ← kuch samajh nahi aata
\`\`\`

**__str__() ke baad:**
\`\`\`
Rahul Sharma   ← clearly samajh aata hai
\`\`\`

\`\`\`python
class Student(models.Model):
    name = models.CharField(max_length=100)
    marks = models.FloatField()

    def __str__(self):
        return self.name  # Admin mein name dikhega
\`\`\``,
    tags: ["__str__()", "Models", "Admin"],
  },
  {
    id: 29,
    difficulty: "Medium",
    category: "Sessions",
    question: "Django mein session management kya hai?",
    answer: `Session management Django mein user-specific data ko multiple requests ke across store aur manage karne ke liye use hota hai, page refresh ya navigation ke baad bhi.

**Simple Definition:** Django session management user data ko server pe store karne aur requests ke beech users ko track karne deta hai.

**Sessions kyun zaroori hain:**
- 🔐 User login state maintain karna
- 🛒 Temporary data store karna (cart items, preferences)
- 👤 Users ko URLs mein data expose kiye bina identify karna

**Django sessions kaise kaam karte hain:**
- Django session data **server pe store** karta hai
- User ke browser mein ek **session ID** cookie ke roop mein store hota hai
- Har request pe, Django session ID use karke correct data fetch karta hai

\`\`\`python
# Session mein data store karo
request.session['username'] = 'Rahul'

# Session se data fetch karo
username = request.session.get('username')

# Session data delete karo
del request.session['username']
\`\`\``,
    tags: ["Sessions", "Authentication", "Cookies"],
  },
  {
    id: 30,
    difficulty: "Medium",
    category: "Database",
    question: "Django ko database se kaise connect karte hain?",
    answer: `Django mein database connection \`settings.py\` file ke through \`DATABASES\` configuration use karke hota hai.

**Step 1️⃣ — settings.py mein database configure karo:**
\`\`\`python
# MySQL ke liye example
DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.mysql',
        'NAME': 'mydb',
        'USER': 'root',
        'PASSWORD': 'password',
        'HOST': 'localhost',
        'PORT': '3306',
    }
}
\`\`\`

**Step 2️⃣ — Database driver install karo:**
\`\`\`bash
# MySQL ke liye
pip install mysqlclient

# PostgreSQL ke liye
pip install psycopg2
\`\`\`

**Step 3️⃣ — Models create karo:**
\`\`\`python
class Student(models.Model):
    name = models.CharField(max_length=100)
\`\`\`

**Step 4️⃣ — Migrations run karo:**
\`\`\`bash
python manage.py makemigrations
python manage.py migrate
\`\`\`

**Supported databases:** SQLite (default), MySQL, PostgreSQL, Oracle`,
    tags: ["Database", "MySQL", "SQLite", "Connection", "settings.py"],
  },
  {
    id: 31,
    difficulty: "Easy",
    category: "Basics",
    question: "How does Django work? Explain step by step.",
    answer: `Django follows a clear request-response cycle involving several components working together.

**Step-by-Step Flow:**

**1️⃣ User sends a request**
- A user enters a URL in the browser (e.g., \`/login/\`).

**2️⃣ URL Dispatcher (urls.py)**
- Django checks \`urls.py\` to find which view is mapped to that URL.

**3️⃣ View (views.py)**
- The view receives the request.
- It contains the business logic.
- If needed, it interacts with the Model to fetch or save data.

**4️⃣ Model (models.py)**
- Models define the database structure.
- The view queries/saves data through the model.

**5️⃣ Template (HTML)**
- The view sends data to a template.
- The template generates dynamic HTML.

**6️⃣ Response sent to browser**
- Django returns the final HTTP response (HTML page) to the user.

\`\`\`
Request → urls.py → views.py → models.py → Template → Response
\`\`\``,
    tags: ["Django", "Request Lifecycle", "Basics", "How Django Works"],
  },
  {
    id: 32,
    difficulty: "Easy",
    category: "Basics",
    question: "What are the key features of Django?",
    answer: `Django is a batteries-included framework packed with powerful built-in features.

**🌟 Key Features of Django:**

**1. Rapid Development**
- Built-in features reduce the need to write code from scratch.
- Reusable components speed up development.

**2. MVT Architecture**
- Follows Model–View–Template pattern.
- Clean separation of business logic, data, and UI.

**3. Built-in ORM**
- Interact with databases using Python instead of SQL.
- Supports PostgreSQL, MySQL, SQLite, Oracle.

**4. Admin Interface**
- Automatic, ready-to-use admin panel.
- Easily manage users, data, and models.

**5. Strong Security**
- Protects against SQL Injection, XSS, CSRF.
- Secure password hashing and authentication.

**6. Authentication & Authorization**
- Built-in user login, logout, permissions, and roles.

**7. Scalability**
- Suitable for small to large applications.
- Supports caching, load balancing, and database optimization.

**8. Middleware Support**
- Processes requests/responses globally (logging, auth, security).

**9. Template Engine**
- Powerful template system with filters, tags, and inheritance.

**10. URL Routing**
- Clean and flexible URL mapping.

**11. REST Framework Support**
- Django REST Framework (DRF) for building APIs.

**12. Large Community & Documentation**
- Excellent docs and a huge developer community.`,
    tags: ["Django", "Features", "Basics", "Overview"],
  },
  {
    id: 33,
    difficulty: "Easy",
    category: "Architecture",
    question: "Explain the Django project directory structure.",
    answer: `Django projects have a well-organized folder structure separating project-level and app-level files.

**📁 Project Folder (myproject/)**

| File | Purpose |
|---|---|
| \`__init__.py\` | Marks directory as a Python package |
| \`settings.py\` | Main config — DB, installed apps, middleware, static files |
| \`urls.py\` | URL routing for the entire project |
| \`wsgi.py\` | Entry point for WSGI (production) servers |
| \`asgi.py\` | Entry point for async/WebSocket support |

**🔹 App Directory (app_name/)**

| File | Purpose |
|---|---|
| \`migrations/\` | Database migration files |
| \`admin.py\` | Register models for Django admin panel |
| \`apps.py\` | App configuration |
| \`models.py\` | Database model definitions |
| \`views.py\` | Business logic and request handling |
| \`tests.py\` | Unit tests |

**🔹 Optional Files**

| File/Folder | Purpose |
|---|---|
| \`templates/\` | HTML templates |
| \`static/\` | CSS, JS, images |
| \`forms.py\` | Django forms |
| \`urls.py\` (in app) | App-level URL routing |`,
    tags: ["Project Structure", "Directory", "Architecture"],
  },
  {
    id: 34,
    difficulty: "Easy",
    category: "Basics",
    question: "Why is a virtual environment important for Django projects?",
    answer: `A virtual environment keeps your Django project isolated and dependency-safe.

**👉 Remember with: I-P-E-S-D**

| Letter | Stands For | Meaning |
|---|---|---|
| **I** | Isolation | Each Django project stays separate |
| **P** | Package safety | No version conflicts between projects |
| **E** | Easy sharing | Use \`requirements.txt\` to move projects |
| **S** | System Python safe | Doesn't affect global Python installation |
| **D** | Deployment friendly | Same setup works in production |

**How to create a virtual environment:**
\`\`\`bash
# Create
python -m venv venv

# Activate (Windows)
venv\\Scripts\\activate

# Activate (Mac/Linux)
source venv/bin/activate

# Install Django
pip install django

# Save dependencies
pip freeze > requirements.txt
\`\`\`

**Why it matters:** Without a venv, installing packages globally can break other projects that rely on different versions of the same library.`,
    tags: ["Virtual Environment", "Setup", "Best Practices"],
  },
  {
    id: 35,
    difficulty: "Easy",
    category: "Database",
    question: "What do makemigrations and migrate commands do in Django?",
    answer: `These two commands work together to sync your Django models with the actual database.

**🔹 python manage.py makemigrations**

- Looks at changes in your \`models.py\`
- Creates migration files inside the \`migrations/\` folder
- These files contain Python code describing what should change in the database
- ⚠️ Does **NOT** touch the database — only prepares instructions

\`\`\`bash
python manage.py makemigrations
\`\`\`

🧠 Memory line: **makemigrations = prepares changes**

---

**🔹 python manage.py migrate**

- Reads the migration files
- Applies those changes to the **actual database**
- Creates tables, adds columns, updates relationships, etc.
- Keeps track of which migrations have already been applied

\`\`\`bash
python manage.py migrate
\`\`\`

🧠 Memory line: **migrate = applies changes**

---

**Simple analogy:**
- \`makemigrations\` = writing a recipe 📝
- \`migrate\` = actually cooking the dish 🍳`,
    tags: ["makemigrations", "migrate", "Database", "Migrations"],
  },
  {
    id: 36,
    difficulty: "Easy",
    category: "Basics",
    question: "What are sessions in Django?",
    answer: `Sessions help Django remember who you are as you navigate between pages.

**🧠 Why Sessions are Needed**
- HTTP is stateless — it forgets the user after each request
- Sessions maintain user state across multiple requests

**📌 What Can Be Stored in a Session?**
- User ID (login info)
- Shopping cart data
- User preferences (theme, language)

**🔁 How Sessions Work (Simple Flow)**

\`\`\`
1. User logs in
2. Django creates a session
3. A session ID is stored in the browser (cookie)
4. Actual session data is stored on the server
5. On every request, Django uses the session ID to retrieve user data
\`\`\`

**📌 Example Usage:**
\`\`\`python
# Store in session
request.session['username'] = 'Abhishek'

# Retrieve from session
username = request.session.get('username')

# Delete from session
del request.session['username']
\`\`\`

**Session Backends in Django:**
- Database (default)
- File-based
- Cache-based
- Cookie-based`,
    tags: ["Sessions", "Authentication", "HTTP", "Stateless"],
  },
  {
    id: 37,
    difficulty: "Easy",
    category: "Basics",
    question: "What are static files in Django and what are their uses?",
    answer: `Static files are files that do not change dynamically and are used to design and style a website.

**📁 Examples of Static Files**
- CSS files (styles and layouts)
- JavaScript files (interactivity)
- Images (PNG, JPG, icons, logos)
- Fonts

**🎯 Uses of Static Files**

| Use | Description |
|---|---|
| Website Styling | CSS designs layouts, colors, fonts |
| Client-Side Functionality | JavaScript adds form validation, alerts, etc. |
| Images & Media | Logos, banners, background images |
| Performance | Static files are cached by the browser for faster loading |

**📌 Configuration in settings.py:**
\`\`\`python
STATIC_URL = '/static/'
STATICFILES_DIRS = [BASE_DIR / 'static']
STATIC_ROOT = BASE_DIR / 'staticfiles'  # for production
\`\`\`

**📌 Usage in Templates:**
\`\`\`html
{% load static %}
<link rel="stylesheet" href="{% static 'css/style.css' %}">
<img src="{% static 'images/logo.png' %}" alt="Logo">
\`\`\`

**Commands:**
\`\`\`bash
python manage.py collectstatic  # collects all static files for production
\`\`\``,
    tags: ["Static Files", "CSS", "JavaScript", "Templates"],
  },
  {
    id: 38,
    difficulty: "Easy",
    category: "ORM",
    question: "What are QuerySets in Django? Explain with common operations.",
    answer: `A QuerySet is a collection of database objects retrieved from the database using Django's ORM.

**🧠 In Simple Words:**
QuerySet = result of a database query (in Python form)

**📌 Basic Example:**
\`\`\`python
students = Student.objects.all()
# 'students' is a QuerySet containing all rows from the Student table
\`\`\`

**🔹 Common QuerySet Operations:**

\`\`\`python
# Get all records
Student.objects.all()

# Filter records (like WHERE clause)
Student.objects.filter(age=20)

# Get single record (raises error if not found or multiple found)
Student.objects.get(id=1)

# Exclude records
Student.objects.exclude(city='Delhi')

# Order results
Student.objects.order_by('name')
Student.objects.order_by('-age')  # descending

# Count records
Student.objects.filter(age=20).count()

# Limit results
Student.objects.all()[:5]
\`\`\`

**⚡ Key Properties of QuerySets:**
- **Lazy** — SQL query only runs when the QuerySet is evaluated
- **Chainable** — can chain multiple filters
- **Cacheable** — results are cached after first evaluation`,
    tags: ["QuerySet", "ORM", "Database", "Filtering"],
  },
  {
    id: 39,
    difficulty: "Easy",
    category: "ORM",
    question: "What is the difference between get() and filter() in Django ORM?",
    answer: `Both are used to query the database, but they behave differently.

**✅ get()**
- Returns **only one** object
- Used when exactly one record is expected
- Throws an error if:
  - No record found → \`DoesNotExist\`
  - More than one record found → \`MultipleObjectsReturned\`

\`\`\`python
user = User.objects.get(id=1)
\`\`\`

🧠 Memory: **get = single result**

---

**✅ filter()**
- Returns a **QuerySet** (zero, one, or many objects)
- Used when you expect multiple or possibly zero records
- No error if no record is found (returns empty QuerySet)

\`\`\`python
users = User.objects.filter(city='Delhi')
\`\`\`

🧠 Memory: **filter = multiple results**

---

**Quick Comparison:**

| Feature | get() | filter() |
|---|---|---|
| Returns | Single object | QuerySet |
| If no match | Raises DoesNotExist | Returns empty QuerySet |
| If multiple match | Raises MultipleObjectsReturned | Returns all matching |
| Use when | Exactly 1 record expected | 0 or more records expected |`,
    tags: ["get()", "filter()", "ORM", "QuerySet"],
  },
  {
    id: 40,
    difficulty: "Easy",
    category: "Models",
    question: "What is the difference between null=True and blank=True in Django models?",
    answer: `These two options look similar but work at different levels.

**✅ null=True**
- Works at the **database level**
- Allows storing \`NULL\` in the database column
- Used when a field can be empty in the database

\`\`\`python
age = models.IntegerField(null=True)
\`\`\`

🧠 Memory: **null = database**

---

**✅ blank=True**
- Works at the **form / validation level**
- Allows the field to be left empty in Django forms
- Has **no effect** on database storage

\`\`\`python
name = models.CharField(max_length=50, blank=True)
\`\`\`

🧠 Memory: **blank = form**

---

**Quick Comparison:**

| Option | Level | Effect |
|---|---|---|
| \`null=True\` | Database | Stores NULL in DB column |
| \`blank=True\` | Form/Validation | Field can be empty in forms |

**Common Pattern — Use both together for optional text fields:**
\`\`\`python
bio = models.TextField(null=True, blank=True)
\`\`\``,
    tags: ["null", "blank", "Models", "Fields"],
  },
  {
    id: 41,
    difficulty: "Medium",
    category: "Models",
    question: "What is the difference between ForeignKey, OneToOneField, and ManyToManyField in Django models?",
    answer: `These three field types define different kinds of relationships between models.

**1️⃣ ForeignKey (One-to-Many)**
- One object is related to **many** objects
- Most common relationship type

\`\`\`python
class Department(models.Model):
    name = models.CharField(max_length=100)

class Employee(models.Model):
    name = models.CharField(max_length=100)
    department = models.ForeignKey(Department, on_delete=models.CASCADE)
\`\`\`

📌 Real examples: One Department → Many Employees, One Author → Many Books

---

**2️⃣ OneToOneField (One-to-One)**
- One object is related to **only one** other object
- Like an extended version of a model

\`\`\`python
class User(models.Model):
    username = models.CharField(max_length=100)

class Profile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    bio = models.TextField()
\`\`\`

📌 Real examples: One Person → One Passport, One User → One Profile

---

**3️⃣ ManyToManyField (Many-to-Many)**
- Many objects are related to **many** other objects

\`\`\`python
class Course(models.Model):
    name = models.CharField(max_length=100)

class Student(models.Model):
    name = models.CharField(max_length=100)
    courses = models.ManyToManyField(Course)
\`\`\`

📌 Real examples: Students ↔ Courses, Movies ↔ Actors

---

**Summary:**

| Field | Relationship | Example |
|---|---|---|
| ForeignKey | One → Many | Department → Employees |
| OneToOneField | One → One | User → Profile |
| ManyToManyField | Many ↔ Many | Students ↔ Courses |`,
    tags: ["ForeignKey", "OneToOneField", "ManyToManyField", "Relationships", "Models"],
  },
  {
    id: 42,
    difficulty: "Easy",
    category: "Architecture",
    question: "What is the difference between MVC and MVT design patterns?",
    answer: `MVC and MVT are both architectural patterns for web development, but used in different frameworks.

**✅ MVC (Model–View–Controller)**
Used in: Spring, ASP.NET, Laravel

| Component | Role |
|---|---|
| Model | Handles data and database |
| View | UI (HTML pages shown to user) |
| Controller | Handles user requests & business logic |

📌 Flow:
\`\`\`
User → Controller → Model → View → User
\`\`\`

🧠 Memory: **Controller controls everything**

---

**✅ MVT (Model–View–Template)**
Used in: Django

| Component | Role |
|---|---|
| Model | Database and data logic |
| View | Business logic (acts like Controller) |
| Template | UI (HTML shown to user) |

📌 Flow:
\`\`\`
User → URL → View → Model → Template → User
\`\`\`

🧠 Memory: **View = Controller in Django**

---

**Key Difference:**

| | MVC | MVT (Django) |
|---|---|---|
| Handles Logic | Controller | View |
| Handles UI | View | Template |
| URL Routing | Controller | urls.py (separate) |
| Framework | General | Django-specific |`,
    tags: ["MVC", "MVT", "Architecture", "Design Patterns"],
  },
  {
    id: 43,
    difficulty: "Easy",
    category: "ORM",
    question: "What is Django ORM? Explain its key features.",
    answer: `Django ORM is a way to interact with the database using Python code instead of writing raw SQL queries.

**🧠 In Simple Words:**
- Models = Tables
- Model objects = Table rows
- QuerySets = Results of database queries

**📌 Example:**
\`\`\`python
# Define a model
class Student(models.Model):
    name = models.CharField(max_length=100)
    age = models.IntegerField()

# Insert a record
student = Student(name="Abhishek", age=22)
student.save()

# Fetch all records
students = Student.objects.all()

# Filter records
students = Student.objects.filter(age=22)

# Delete a record
student.delete()
\`\`\`

✅ No SQL required!

**🔹 Key Features of Django ORM:**

| Feature | Description |
|---|---|
| Easy to use | Query database using Python |
| Database independent | Works with MySQL, PostgreSQL, SQLite, Oracle |
| Secure | Prevents SQL injection automatically |
| Relationship support | ForeignKey, OneToOneField, ManyToManyField |
| Migrations | Create and update DB schema automatically |`,
    tags: ["ORM", "Django ORM", "Database", "Python"],
  },
  {
    id: 44,
    difficulty: "Easy",
    category: "Templates",
    question: "What is Jinja / Django Template Language? How does it work?",
    answer: `Django's Template Language (inspired by Jinja2) allows you to combine HTML with Python-like code to generate dynamic web pages.

**🧠 In Simple Words:**
Templates = HTML + dynamic content

They let you display data from Django views or models directly in your HTML pages.

**📌 Example Template:**
\`\`\`html
<!-- template.html -->
<h1>Welcome, {{ user.name }}!</h1>

<ul>
  {% for item in items %}
    <li>{{ item }}</li>
  {% endfor %}
</ul>

{% if user.is_authenticated %}
  <p>You are logged in.</p>
{% else %}
  <p>Please log in.</p>
{% endif %}
\`\`\`

**Syntax:**
- \`{{ ... }}\` → Outputs a variable value
- \`{% ... %}\` → Control statements (loops, conditions, blocks)

**🔹 Key Features:**

| Feature | Description |
|---|---|
| Dynamic HTML | Show data from views/models |
| Control structures | Loops, if-else conditions |
| Template inheritance | Base template extended by child templates |
| Filters | Modify output — e.g., \`{{ name|upper }}\` → uppercase |
| Safe & secure | Auto-escapes HTML to prevent XSS |`,
    tags: ["Templates", "Jinja", "Template Language", "HTML", "DTL"],
  },
  {
    id: 45,
    difficulty: "Medium",
    category: "Middleware",
    question: "What is Middleware in Django and what are its uses?",
    answer: `Middleware is a layer of hooks in Django that processes every request and response globally before it reaches the view or the browser.

**🧠 Think of Middleware as a pipeline:**
Every request and response passes through it.

\`\`\`
Browser → Middleware → View → Middleware → Browser
\`\`\`

- **Request middleware** runs before the view
- **Response middleware** runs after the view

**📌 Common Uses of Middleware:**

| Use Case | Description |
|---|---|
| Authentication | Check if user is logged in |
| Session management | Manage session data |
| Security | CSRF protection, clickjacking prevention |
| Logging & Analytics | Log request/response info |
| Custom headers | Add or modify headers |

**📌 How Middleware is configured (settings.py):**
\`\`\`python
MIDDLEWARE = [
    'django.middleware.security.SecurityMiddleware',
    'django.contrib.sessions.middleware.SessionMiddleware',
    'django.middleware.common.CommonMiddleware',
    'django.middleware.csrf.CsrfViewMiddleware',
    'django.contrib.auth.middleware.AuthenticationMiddleware',
    ...
]
\`\`\`

**📌 Custom Middleware Example:**
\`\`\`python
class MyMiddleware:
    def __init__(self, get_response):
        self.get_response = get_response

    def __call__(self, request):
        # Code before view
        response = self.get_response(request)
        # Code after view
        return response
\`\`\``,
    tags: ["Middleware", "Request", "Response", "Security", "Sessions"],
  },
  {
    id: 46,
    difficulty: "Medium",
    category: "Signals",
    question: "What are Django Signals? Explain with use cases.",
    answer: `Signals in Django are a way for different parts of the application to communicate when certain events occur.

**🧠 Think of signals as messengers** — they notify other parts of the code when something happens, without directly calling that code.

**🔹 How Signals Work:**

| Component | Role |
|---|---|
| **Signal** | The event that occurs |
| **Sender** | The model or object that triggers the signal |
| **Receiver** | Function that performs an action when signal fires |

**📌 Common Use Cases:**
- Automatically create a Profile when a new User is created
- Send email notifications after saving a model
- Log activity when an object is deleted

**📌 Example — Auto-create Profile on User creation:**
\`\`\`python
from django.db.models.signals import post_save
from django.dispatch import receiver
from django.contrib.auth.models import User
from .models import Profile

@receiver(post_save, sender=User)
def create_profile(sender, instance, created, **kwargs):
    if created:
        Profile.objects.create(user=instance)
\`\`\`

**📌 Built-in Django Signals:**
- \`pre_save\` — before a model is saved
- \`post_save\` — after a model is saved
- \`pre_delete\` — before a model is deleted
- \`post_delete\` — after a model is deleted`,
    tags: ["Signals", "post_save", "pre_save", "Events", "Decoupling"],
  },
  {
    id: 47,
    difficulty: "Easy",
    category: "Basics",
    question: "What is MEDIA_ROOT in Django? How is it different from STATIC_ROOT?",
    answer: `MEDIA_ROOT is the server folder where user-uploaded files are stored.

**🧠 Simple Definition:**
When a user uploads a file through a form, Django saves it in the folder specified by \`MEDIA_ROOT\`.

**📌 Configuration in settings.py:**
\`\`\`python
import os

MEDIA_URL = '/media/'
MEDIA_ROOT = os.path.join(BASE_DIR, 'media')
\`\`\`

- **MEDIA_URL** → URL path used to access uploaded files in the browser
- **MEDIA_ROOT** → Physical folder on the server where files are stored

**📌 Example Usage in Template:**
\`\`\`html
<img src="{{ user.profile.picture.url }}" alt="Profile Picture">
\`\`\`

**📌 Serving Media Files in Development (urls.py):**
\`\`\`python
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    ...
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
\`\`\`

**MEDIA_ROOT vs STATIC_ROOT:**

| | MEDIA_ROOT | STATIC_ROOT |
|---|---|---|
| Purpose | User-uploaded files | Developer static files (CSS/JS) |
| Changes dynamically | Yes | No |
| Set up command | — | \`collectstatic\` |
| Examples | Profile pics, documents | Stylesheets, scripts |`,
    tags: ["MEDIA_ROOT", "MEDIA_URL", "File Upload", "Static Files"],
  },
  {
    id: 48,
    difficulty: "Easy",
    category: "Views",
    question: "What is the difference between Function-Based Views (FBV) and Class-Based Views (CBV) in Django?",
    answer: `Django supports two ways to write views — as functions or as classes.

**✅ 1. Function-Based Views (FBV)**
A view is a simple Python function that handles request and returns response.

\`\`\`python
from django.http import HttpResponse

def home(request):
    return HttpResponse("Welcome to Django")
\`\`\`

**Features:**
- Simple and easy to understand
- Great for small/simple views
- Less reusable for complex logic

🧠 Memory: **FBV = simple function**

---

**✅ 2. Class-Based Views (CBV)**
A view is a Python class with methods to handle different HTTP requests (\`get()\`, \`post()\`, etc.)

\`\`\`python
from django.views import View
from django.http import HttpResponse

class HomeView(View):
    def get(self, request):
        return HttpResponse("Welcome to Django")

    def post(self, request):
        return HttpResponse("POST request received")
\`\`\`

**Features:**
- More organized and reusable
- Supports inheritance and mixins
- Better for complex views with multiple HTTP methods

🧠 Memory: **CBV = class with methods**

---

**Comparison:**

| Feature | FBV | CBV |
|---|---|---|
| Simplicity | Very simple | Slightly complex |
| Reusability | Low | High |
| HTTP methods | Handled with if-else | Separate methods (get, post) |
| Best for | Simple views | Complex, reusable views |`,
    tags: ["FBV", "CBV", "Views", "Function-Based", "Class-Based"],
  },
  {
    id: 49,
    difficulty: "Medium",
    category: "Templates",
    question: "How does Django encourage clean and reusable templates?",
    answer: `Django provides several template features that make your HTML DRY (Don't Repeat Yourself) and reusable.

**1. Template Inheritance**
Create a base template (layout) and extend it in child templates. Avoids repeating headers/footers/menus.

\`\`\`html
<!-- base.html -->
<html>
<head><title>{% block title %}My Site{% endblock %}</title></head>
<body>
  <header>Header</header>
  {% block content %}{% endblock %}
  <footer>Footer</footer>
</body>
</html>

<!-- home.html -->
{% extends "base.html" %}
{% block title %}Home Page{% endblock %}
{% block content %}
  <h1>Welcome Home</h1>
{% endblock %}
\`\`\`

✅ Header and footer are reused automatically.

**2. Template Tags**
Add logic in templates without writing Python in HTML.
\`\`\`html
{% for user in users %}
  <p>{{ user.name }}</p>
{% endfor %}
\`\`\`

**3. Template Filters**
Modify data output without touching views.
\`\`\`html
{{ name|upper }}         → Uppercase
{{ price|floatformat:2 }} → 2 decimal places
\`\`\`

**4. Includes**
Reuse small HTML parts (navbars, sidebars) across templates.
\`\`\`html
{% include "navbar.html" %}
\`\`\`

**5. Context Variables**
Pass dynamic data from views to templates, keeping business logic out of HTML.`,
    tags: ["Templates", "Inheritance", "DRY", "Template Tags", "Reusability"],
  },
  {
    id: 50,
    difficulty: "Medium",
    category: "Basics",
    question: "What is the Django response lifecycle? Explain the complete flow.",
    answer: `The Django response lifecycle explains how a user's HTTP request is processed and a response is returned.

**High-Level Flow:**
\`\`\`
Client → URL → Middleware → View → Model → Template → Response → Client
\`\`\`

**Step-by-Step:**

**1. Client Sends a Request**
A browser or API client sends an HTTP request (e.g., \`GET /students/\`).

**2. WSGI / ASGI Server Receives the Request**
- WSGI for synchronous requests
- ASGI for async/WebSocket support

**3. Middleware Processing (Request Phase)**
Request passes through middleware top-to-bottom. Can modify request, check auth, handle CSRF/sessions.

**4. URL Dispatcher (urls.py)**
Django matches the URL to a view function or class-based view.

**5. View is Executed**
View reads request data, interacts with models, prepares response data.
\`\`\`python
def student_list(request):
    students = Student.objects.all()
    return render(request, 'students.html', {'students': students})
\`\`\`

**6. Model (Database Interaction)**
View queries or updates the database via Django ORM.

**7. Template Rendering (Optional)**
For HTML responses — template is rendered with data. For APIs (DRF) — data is serialized to JSON.

**8. Response Object Created**
Django creates an \`HttpResponse\` or \`JsonResponse\`.

**9. Middleware Processing (Response Phase)**
Response passes through middleware bottom-to-top. Can add headers, handle compression, caching.

**10. Response Sent to Client**
Final response returned to the browser or API consumer.

**🧠 Key Points to Remember:**
- Middleware runs **twice** (request & response phases)
- Views contain business logic
- ORM handles database operations
- Templates are optional (not used in pure APIs)`,
    tags: ["Response Lifecycle", "Request", "Middleware", "Architecture"],
  },
  {
    id: 51,
    difficulty: "Easy",
    category: "Models",
    question: "What is the difference between CharField and TextField in Django?",
    answer: `Both store text data, but they are designed for different use cases.

**✅ CharField**
- Used for **short-length strings**
- \`max_length\` is **mandatory**
- Stored as \`VARCHAR\` in the database
- Faster for small text

\`\`\`python
name = models.CharField(max_length=100)
\`\`\`

**Common uses:** Names, email IDs, titles, phone numbers, usernames

---

**✅ TextField**
- Used for **large/long text data**
- No need to specify \`max_length\`
- Stored as \`TEXT\` in the database
- Suitable for long content

\`\`\`python
description = models.TextField()
\`\`\`

**Common uses:** Blog content, descriptions, comments, messages

---

**Quick Comparison:**

| Feature | CharField | TextField |
|---|---|---|
| Max length | Required | Optional |
| DB type | VARCHAR | TEXT |
| Best for | Short text | Long text |
| Performance | Faster | Slower for large data |`,
    tags: ["CharField", "TextField", "Models", "Fields"],
  },
  {
    id: 52,
    difficulty: "Medium",
    category: "Models",
    question: "What is the purpose of the Meta class inside a Django model?",
    answer: `The Meta class is an inner class inside a Django model that provides metadata (extra configuration) about the model.

It does **not** define fields — it controls how the model behaves in the database, admin panel, and ORM.

**📌 Basic Example:**
\`\`\`python
from django.db import models

class Student(models.Model):
    name = models.CharField(max_length=100)
    roll_no = models.IntegerField()

    class Meta:
        ordering = ['roll_no']        # default sort order
        db_table = 'student_details'  # custom table name
\`\`\`

**📌 Common Meta Options:**

| Option | Purpose | Example |
|---|---|---|
| \`ordering\` | Default sort order for QuerySets | \`ordering = ['-created_at']\` |
| \`db_table\` | Custom database table name | \`db_table = 'my_students'\` |
| \`verbose_name\` | Human-readable singular name | \`verbose_name = 'Student'\` |
| \`verbose_name_plural\` | Human-readable plural name | \`verbose_name_plural = 'Students'\` |
| \`unique_together\` | Combination of fields must be unique | \`unique_together = ['name', 'roll_no']\` |
| \`permissions\` | Custom permissions for the model | Custom user roles |
| \`abstract\` | Makes model a base class (no table) | \`abstract = True\` |

**🧠 Why Use Meta Class?**
- Control database table behavior
- Customize query ordering
- Set constraints and permissions
- Customize Django Admin display`,
    tags: ["Meta Class", "Models", "ORM", "Ordering", "Configuration"],
  },
  {
    id: 53,
    difficulty: "Medium",
    category: "APIs",
    question: "What is Django REST Framework (DRF)?",
    answer: `Django REST Framework (DRF) is a powerful toolkit built on top of Django for creating RESTful APIs easily and efficiently.

**🧠 Why DRF?**
Django by default is best for server-rendered HTML pages. But modern applications need APIs to communicate with:
- Mobile applications 📱
- Frontend frameworks (React, Angular, Vue)
- Third-party services

**🔹 What DRF Helps With:**

| Feature | Description |
|---|---|
| Expose data as APIs | Return JSON/XML instead of HTML |
| CRUD operations | Create, Read, Update, Delete via API endpoints |
| Serializers | Convert model data to JSON and back |
| Authentication | Token, JWT, Session-based auth |
| Permissions | Fine-grained access control |
| Browsable API | Web interface to test APIs |

**📌 Basic DRF Example:**
\`\`\`python
# serializers.py
from rest_framework import serializers
from .models import Student

class StudentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Student
        fields = '__all__'

# views.py
from rest_framework.views import APIView
from rest_framework.response import Response

class StudentListView(APIView):
    def get(self, request):
        students = Student.objects.all()
        serializer = StudentSerializer(students, many=True)
        return Response(serializer.data)
\`\`\`

**Install:**
\`\`\`bash
pip install djangorestframework
\`\`\``,
    tags: ["DRF", "REST API", "Serializers", "Django REST Framework", "APIs"],
  },
  {
    id: 54,
    difficulty: "Medium",
    category: "Database",
    question: "What is NoSQL and does Django support it?",
    answer: `NoSQL (Not Only SQL) databases are non-relational databases designed for flexibility, scalability, and high performance with large or unstructured data.

**Key Features of NoSQL:**
- Schema-less (no fixed table structure)
- Handles big data and high traffic
- Horizontally scalable (easy to add more servers)
- Faster read/write for certain use cases

**Types of NoSQL Databases:**

| Type | Examples | Data Format |
|---|---|---|
| Document-based | MongoDB, CouchDB | JSON-like documents |
| Key-Value stores | Redis, DynamoDB | Key-value pairs |
| Column-based | Cassandra, HBase | Column families |
| Graph databases | Neo4j | Nodes and relationships |

---

**Does Django Support NoSQL?**

👉 **Short answer: Django does NOT natively support NoSQL.**

**Why?** Django's ORM is designed for relational databases (PostgreSQL, MySQL, SQLite, Oracle). It relies on tables, rows, and relations (Foreign Keys, Joins).

---

**Can Django Be Used with NoSQL? Yes, but indirectly:**

\`\`\`python
# Option 1: Use third-party libraries
# djongo → Django + MongoDB
pip install djongo

# Option 2: Use PyMongo directly alongside Django
import pymongo
client = pymongo.MongoClient("mongodb://localhost:27017/")
db = client["mydatabase"]
\`\`\`

**⚠️ Limitations:**
- No full ORM support
- Some Django features may break (migrations, admin panel)
- Not recommended for beginners`,
    tags: ["NoSQL", "MongoDB", "Database", "Django ORM", "djongo"],
  },
];

export const SQL_QUESTIONS = [
  {
    id: 1,
    difficulty: "Easy",
    category: "Basics",
    question: "SQL mein PRIMARY KEY aur UNIQUE KEY mein kya farak hai?",
    answer: `PRIMARY KEY aur UNIQUE KEY dono uniqueness enforce karte hain, lekin kuch key differences hain:

• **PRIMARY KEY**: Table mein sirf ek hi ho sakti hai. NULL values allow nahi hoti. By default clustered index create karta hai.

• **UNIQUE KEY**: Ek table mein multiple UNIQUE keys ho sakti hain. NULL values allow hoti hain (usually ek NULL). Non-clustered index create karta hai.

**Example:**
\`\`\`sql
CREATE TABLE Students (
  student_id INT PRIMARY KEY,        -- Primary Key
  email VARCHAR(100) UNIQUE,         -- Unique Key
  roll_no VARCHAR(20) UNIQUE         -- Unique Key
);
\`\`\``,
    tags: ["Primary Key", "Unique Key", "Constraints"],
  },
  {
    id: 2,
    difficulty: "Easy",
    category: "Joins",
    question: "INNER JOIN aur LEFT JOIN mein kya difference hai? Example ke saath explain karo.",
    answer: `**INNER JOIN**: Sirf woh rows return karta hai jo dono tables mein match karti hain.

**LEFT JOIN**: Left table ki saari rows return karta hai. Agar right table mein match na mile toh NULL aata hai.

**Example:**
\`\`\`sql
-- INNER JOIN
SELECT e.name, d.dept_name
FROM Employees e
INNER JOIN Departments d ON e.dept_id = d.dept_id;
-- Sirf woh employees jinke paas valid department ho

-- LEFT JOIN
SELECT e.name, d.dept_name
FROM Employees e
LEFT JOIN Departments d ON e.dept_id = d.dept_id;
-- Saare employees, dept_name NULL hoga agar department nahi
\`\`\`

Interview tip: INNER JOIN = intersection, LEFT JOIN = left table + intersection.`,
    tags: ["Joins", "INNER JOIN", "LEFT JOIN"],
  },
  {
    id: 3,
    difficulty: "Medium",
    category: "Aggregation",
    question: "WHERE aur HAVING clause mein kya farak hai?",
    answer: `**WHERE**: Rows ko GROUP BY se pehle filter karta hai. Aggregate functions (SUM, COUNT, etc.) use nahi kar sakte.

**HAVING**: Groups ko GROUP BY ke baad filter karta hai. Aggregate functions use kar sakte hain.

**Example:**
\`\`\`sql
-- WHERE - individual rows filter
SELECT dept_id, COUNT(*) as emp_count
FROM Employees
WHERE salary > 30000        -- pehle rows filter
GROUP BY dept_id;

-- HAVING - groups filter
SELECT dept_id, COUNT(*) as emp_count
FROM Employees
GROUP BY dept_id
HAVING COUNT(*) > 5;        -- phir groups filter
\`\`\`

**Rule**: WHERE → GROUP BY → HAVING → ORDER BY (yahi execution order hai)`,
    tags: ["WHERE", "HAVING", "GROUP BY", "Aggregation"],
  },
  {
    id: 4,
    difficulty: "Medium",
    category: "Subquery",
    question: "Subquery kya hoti hai? Correlated aur Non-correlated subquery mein kya farak hai?",
    answer: `**Subquery**: Ek query ke andar dusri query.

**Non-Correlated Subquery**: Inner query outer query se independent hoti hai. Sirf ek baar execute hoti hai.
\`\`\`sql
SELECT name FROM Employees
WHERE salary > (SELECT AVG(salary) FROM Employees);
-- Inner query ek baar chali, result use hua
\`\`\`

**Correlated Subquery**: Inner query outer query ke har row ke liye execute hoti hai. Outer query pe depend karti hai.
\`\`\`sql
SELECT e1.name, e1.salary
FROM Employees e1
WHERE e1.salary > (
  SELECT AVG(e2.salary) 
  FROM Employees e2 
  WHERE e2.dept_id = e1.dept_id  -- outer query ka reference
);
\`\`\`

**Performance**: Non-correlated faster hoti hai. Correlated N times execute hoti hai (N = outer rows).`,
    tags: ["Subquery", "Correlated", "Performance"],
  },
  {
    id: 5,
    difficulty: "Hard",
    category: "Window Functions",
    question: "ROW_NUMBER(), RANK(), aur DENSE_RANK() mein kya difference hai?",
    answer: `Teeno window functions hain jo rows ko number deti hain, lekin ties handle alag alag karte hain:

**ROW_NUMBER()**: Har row ko unique number milta hai. Ties mein arbitrary order.
**RANK()**: Ties ko same rank milti hai. Next rank skip hoti hai.
**DENSE_RANK()**: Ties ko same rank milti hai. Next rank skip nahi hoti.

**Example:**
\`\`\`sql
SELECT name, score,
  ROW_NUMBER() OVER (ORDER BY score DESC) as row_num,
  RANK()       OVER (ORDER BY score DESC) as rnk,
  DENSE_RANK() OVER (ORDER BY score DESC) as dense_rnk
FROM Scores;
\`\`\`

| name  | score | ROW_NUMBER | RANK | DENSE_RANK |
|-------|-------|------------|------|------------|
| Alice | 95    | 1          | 1    | 1          |
| Bob   | 90    | 2          | 2    | 2          |
| Carol | 90    | 3          | 2    | 2          |
| Dave  | 85    | 4          | 4    | 3          |

Notice: RANK mein 3 skip hua, DENSE_RANK mein nahi.`,
    tags: ["Window Functions", "ROW_NUMBER", "RANK", "DENSE_RANK"],
  },
  {
    id: 6,
    difficulty: "Easy",
    category: "Basics",
    question: "DELETE, TRUNCATE aur DROP mein kya difference hai?",
    answer: `**DELETE**: DML command. Specific rows delete karta hai WHERE clause se. Rollback possible. Triggers fire hote hain.
\`\`\`sql
DELETE FROM Students WHERE student_id = 5;
\`\`\`

**TRUNCATE**: DDL command. Saari rows ek saath delete karta hai. Fast hai (log nahi likhta). Rollback usually possible nahi (DB dependent). Triggers fire nahi hote.
\`\`\`sql
TRUNCATE TABLE Students;
\`\`\`

**DROP**: DDL command. Poori table structure aur data dono delete. Rollback possible nahi.
\`\`\`sql
DROP TABLE Students;
\`\`\`

**Yaad rakhne ka trick**:
- DELETE = selective surgeon (specific rows)
- TRUNCATE = data janitor (saara data, structure bachi)
- DROP = demolition crew (sab kuch)`,
    tags: ["DELETE", "TRUNCATE", "DROP", "DDL", "DML"],
  },
  {
    id: 7,
    difficulty: "Medium",
    category: "Indexes",
    question: "SQL Index kya hota hai? Clustered aur Non-Clustered Index mein kya farak hai?",
    answer: `**Index**: Database object jo queries ko speed up karta hai. Book ke back mein index jaisa — directly page pe jump kar sakte ho.

**Clustered Index**:
- Table ka data physically is order mein store hota hai
- Ek table mein sirf EK clustered index ho sakta hai
- PRIMARY KEY by default clustered index create karta hai
- Data pages index pages hain

**Non-Clustered Index**:
- Alag data structure. Pointers store hote hain actual data rows ke
- Multiple non-clustered indexes ho sakte hain
- Thoda slow — pehle index, phir actual data fetch

\`\`\`sql
-- Non-clustered index create karna
CREATE INDEX idx_employee_email 
ON Employees(email);

-- Query automatically index use karegi
SELECT * FROM Employees WHERE email = 'john@example.com';
\`\`\`

**Index kab nahi lagana**: Small tables, columns jo frequently update hoti hain, low cardinality columns (jaise gender).`,
    tags: ["Index", "Clustered", "Non-Clustered", "Performance"],
  },
  {
    id: 8,
    difficulty: "Hard",
    category: "Advanced",
    question: "N-th highest salary nikalne ka SQL query kaise likhoge?",
    answer: `Yeh ek bahut common interview question hai. Multiple approaches hain:

**Approach 1 — DENSE_RANK (Best approach)**:
\`\`\`sql
SELECT salary FROM (
  SELECT salary,
         DENSE_RANK() OVER (ORDER BY salary DESC) as rnk
  FROM Employees
) ranked
WHERE rnk = N;  -- N ki jagah number dalo, e.g., 2 for 2nd highest
\`\`\`

**Approach 2 — Subquery**:
\`\`\`sql
SELECT MIN(salary) FROM Employees
WHERE salary IN (
  SELECT DISTINCT TOP N salary 
  FROM Employees 
  ORDER BY salary DESC
);
\`\`\`

**Approach 3 — LIMIT/OFFSET (MySQL)**:
\`\`\`sql
SELECT DISTINCT salary 
FROM Employees 
ORDER BY salary DESC
LIMIT 1 OFFSET N-1;  -- N=2 ke liye OFFSET 1
\`\`\`

**Interview tip**: DENSE_RANK approach ko prefer karo — yeh ties handle karta hai aur most databases mein kaam karta hai.`,
    tags: ["Nth Salary", "DENSE_RANK", "Subquery", "Classic Question"],
  },
  {
    id: 9,
    difficulty: "Medium",
    category: "Normalization",
    question: "Database Normalization kya hai? 1NF, 2NF, 3NF explain karo.",
    answer: `**Normalization**: Database design process jo redundancy reduce karta hai aur data integrity improve karta hai.

**1NF (First Normal Form)**:
- Har cell mein atomic (single) value honi chahiye
- No repeating groups
\`\`\`
❌ Bad: Student(id, name, subjects="Math,Science,English")
✅ Good: Student(id, name) + StudentSubject(student_id, subject)
\`\`\`

**2NF (Second Normal Form)**:
- 1NF mein hona chahiye
- No partial dependencies (non-key columns full primary key pe depend karein)
\`\`\`
❌ Bad: OrderItem(order_id, product_id, product_name, qty)
   -- product_name sirf product_id pe depend karta hai
✅ Good: OrderItem(order_id, product_id, qty) + Product(product_id, product_name)
\`\`\`

**3NF (Third Normal Form)**:
- 2NF mein hona chahiye  
- No transitive dependencies
\`\`\`
❌ Bad: Employee(emp_id, dept_id, dept_name)
   -- dept_name → dept_id → emp_id (transitive)
✅ Good: Employee(emp_id, dept_id) + Department(dept_id, dept_name)
\`\`\``,
    tags: ["Normalization", "1NF", "2NF", "3NF", "Database Design"],
  },
  {
    id: 10,
    difficulty: "Hard",
    category: "Advanced",
    question: "SQL mein SELF JOIN kya hota hai? Employees aur unke managers nikalne ka example do.",
    answer: `**SELF JOIN**: Jab ek table apne aap se join hoti hai. Same table ko do different aliases dete hain.

**Classic use case — Employee-Manager hierarchy**:
\`\`\`sql
-- Table structure
-- Employees(emp_id, name, manager_id)
-- manager_id → same table ka emp_id

SELECT 
  e.name AS employee_name,
  m.name AS manager_name
FROM Employees e
LEFT JOIN Employees m ON e.manager_id = m.emp_id;
\`\`\`

**Output**:
| employee_name | manager_name |
|--------------|--------------|
| Alice        | NULL         |  ← CEO, no manager
| Bob          | Alice        |
| Carol        | Alice        |
| Dave         | Bob          |

**Another example — Same city employees dhundhna**:
\`\`\`sql
SELECT e1.name, e2.name, e1.city
FROM Employees e1
JOIN Employees e2 ON e1.city = e2.city
                  AND e1.emp_id < e2.emp_id;
-- emp_id < avoid karta hai duplicates aur self pairs
\`\`\``,
    tags: ["SELF JOIN", "Hierarchy", "Aliases"],
  },

  {
    id: 11,
    difficulty: "Easy",
    category: "Basics",
    question: "SQL mein DDL, DML, DCL aur TCL kya hote hain?",
    answer: `SQL commands ko 4 categories mein divide kiya jaata hai:

**DDL (Data Definition Language)** — Database structure define karta hai:
\`\`\`sql
CREATE TABLE Students (id INT, name VARCHAR(50));
ALTER TABLE Students ADD COLUMN age INT;
DROP TABLE Students;
TRUNCATE TABLE Students;
\`\`\`

**DML (Data Manipulation Language)** — Data ko manipulate karta hai:
\`\`\`sql
INSERT INTO Students VALUES (1, 'Rahul', 20);
UPDATE Students SET age = 21 WHERE id = 1;
DELETE FROM Students WHERE id = 1;
SELECT * FROM Students;
\`\`\`

**DCL (Data Control Language)** — Permissions control karta hai:
\`\`\`sql
GRANT SELECT ON Students TO user1;
REVOKE SELECT ON Students FROM user1;
\`\`\`

**TCL (Transaction Control Language)** — Transactions manage karta hai:
\`\`\`sql
COMMIT;
ROLLBACK;
SAVEPOINT sp1;
\`\`\`

**Interview Tip**: DDL = Structure, DML = Data, DCL = Permissions, TCL = Transactions`,
    tags: ["DDL", "DML", "DCL", "TCL", "Basics"],
  },
  {
    id: 12,
    difficulty: "Easy",
    category: "Basics",
    question: "TRUNCATE aur DELETE mein kya difference hai?",
    answer: `**DELETE**: Row by row delete karta hai, WHERE clause use kar sakte hain, rollback possible hai.
**TRUNCATE**: Saara data ek saath delete karta hai, WHERE clause nahi, rollback possible nahi (mostly).

\`\`\`sql
-- DELETE — selective, slow, rollback possible
DELETE FROM Students WHERE age < 18;
DELETE FROM Students;  -- saara data delete (slow)

-- TRUNCATE — fast, no WHERE, no rollback
TRUNCATE TABLE Students;
\`\`\`

| Feature        | DELETE            | TRUNCATE        |
|----------------|-------------------|-----------------|
| WHERE clause   | ✅ Possible       | ❌ Nahi         |
| Speed          | Slow              | Fast            |
| Rollback       | ✅ Possible       | ❌ Usually nahi |
| Triggers fire  | ✅ Yes            | ❌ No           |
| Identity reset | ❌ Nahi           | ✅ Reset karta  |
| DML/DDL        | DML               | DDL             |

**Interview Tip**: DELETE = precise control, TRUNCATE = mass delete fast.`,
    tags: ["DELETE", "TRUNCATE", "DML", "DDL"],
  },
  {
    id: 13,
    difficulty: "Easy",
    category: "Basics",
    question: "NULL kya hota hai SQL mein? NULL ke saath comparisons kaise karte hain?",
    answer: `**NULL** = unknown/missing value. Yeh 0 ya empty string nahi hai.

**NULL ke saath normal comparison kaam nahi karta:**
\`\`\`sql
SELECT * FROM Students WHERE age = NULL;   -- ❌ WRONG
SELECT * FROM Students WHERE age != NULL;  -- ❌ WRONG

-- ✅ CORRECT
SELECT * FROM Students WHERE age IS NULL;
SELECT * FROM Students WHERE age IS NOT NULL;
\`\`\`

**NULL arithmetic:**
\`\`\`sql
SELECT NULL + 5;        -- Result: NULL
SELECT NULL = NULL;     -- Result: NULL (TRUE nahi!)
SELECT NULL OR TRUE;    -- Result: TRUE
SELECT NULL AND FALSE;  -- Result: FALSE
\`\`\`

**NULL handle karne ke functions:**
\`\`\`sql
SELECT COALESCE(age, 0) FROM Students;
SELECT IFNULL(age, 0) FROM Students;   -- MySQL
SELECT NVL(age, 0) FROM Students;      -- Oracle
\`\`\`

**Interview Tip**: NULL = unknown. Unknown se koi bhi comparison unknown (NULL) deta hai.`,
    tags: ["NULL", "COALESCE", "IFNULL", "Basics"],
  },
  {
    id: 14,
    difficulty: "Medium",
    category: "Indexes",
    question: "Index kya hota hai? Kitne types ke indexes hote hain?",
    answer: `**Index** = Database mein ek data structure jo queries ko speed up karta hai. Book ke index jaisa.

**Bina index ke**: Full table scan — O(n) time.
**Index ke saath**: Direct access — O(log n) time.

**Types of Indexes:**

**1. Clustered Index** — Data physically sort hota hai. Table mein sirf ek ho sakta hai.
\`\`\`sql
CREATE TABLE Students (
  student_id INT PRIMARY KEY,  -- clustered index auto
  name VARCHAR(50)
);
\`\`\`

**2. Non-Clustered Index** — Separate structure. Multiple ho sakte hain.
\`\`\`sql
CREATE INDEX idx_name ON Students(name);
CREATE INDEX idx_email ON Students(email);
\`\`\`

**3. Composite Index** — Multiple columns pe index.
\`\`\`sql
CREATE INDEX idx_name_age ON Students(name, age);
-- SELECT * WHERE name = 'X' AND age = 20 — fast!
\`\`\`

**4. Unique Index** — UNIQUE constraint lagata hai.
\`\`\`sql
CREATE UNIQUE INDEX idx_email ON Students(email);
\`\`\`

**Kab use karo:**
- ✅ Frequently searched columns (WHERE, JOIN, ORDER BY)
- ❌ Frequently updated tables (INSERT/UPDATE slow ho jaata hai)
- ❌ Small tables (full scan faster)`,
    tags: ["Index", "Clustered", "Non-Clustered", "Performance"],
  },
  {
    id: 15,
    difficulty: "Medium",
    category: "Normalization",
    question: "Database Normalization kya hai? 1NF, 2NF, 3NF explain karo.",
    answer: `**Normalization** = Database ko organize karna taaki redundancy (duplication) aur anomalies kam ho.

**1NF (First Normal Form):**
- Har cell mein atomic (single) value honi chahiye
- No repeating groups

\`\`\`
❌ Before 1NF:
| StudentID | Courses           |
| 1         | Math, Science, CS |

✅ After 1NF:
| StudentID | Course  |
| 1         | Math    |
| 1         | Science |
\`\`\`

**2NF (Second Normal Form):**
- 1NF satisfy ho + No partial dependency

\`\`\`
❌ Before 2NF: StudentName depends on StudentID only (partial dependency)
✅ After 2NF: Tables split karo
Students: (StudentID, StudentName)
Enrollments: (StudentID, Course, Teacher)
\`\`\`

**3NF (Third Normal Form):**
- 2NF satisfy ho + No transitive dependency

\`\`\`
❌ Before 3NF:
| EmpID | EmpName | DeptID | DeptName |
-- DeptName depends on DeptID, not EmpID

✅ After 3NF:
Employees: (EmpID, EmpName, DeptID)
Departments: (DeptID, DeptName)
\`\`\`

**Summary**: 1NF = atomic values, 2NF = no partial dependency, 3NF = no transitive dependency`,
    tags: ["Normalization", "1NF", "2NF", "3NF", "Database Design"],
  },
  {
    id: 16,
    difficulty: "Hard",
    category: "Window Functions",
    question: "CTE (Common Table Expression) kya hai? Recursive CTE explain karo.",
    answer: `**CTE** = Temporary named result set jo main query mein use hota hai. WITH keyword se banata hai.

**Simple CTE:**
\`\`\`sql
WITH HighSalaryEmployees AS (
  SELECT emp_id, name, salary
  FROM Employees
  WHERE salary > 50000
)
SELECT * FROM HighSalaryEmployees WHERE dept_id = 10;
\`\`\`

**Multiple CTEs:**
\`\`\`sql
WITH
  DeptAvg AS (
    SELECT dept_id, AVG(salary) as avg_sal
    FROM Employees GROUP BY dept_id
  ),
  TopEmployees AS (
    SELECT e.name, e.salary, da.avg_sal
    FROM Employees e
    JOIN DeptAvg da ON e.dept_id = da.dept_id
    WHERE e.salary > da.avg_sal
  )
SELECT * FROM TopEmployees;
\`\`\`

**Recursive CTE** — Hierarchy traverse karne ke liye:
\`\`\`sql
WITH RECURSIVE EmployeeHierarchy AS (
  SELECT emp_id, name, manager_id, 1 AS level
  FROM Employees WHERE manager_id IS NULL

  UNION ALL

  SELECT e.emp_id, e.name, e.manager_id, eh.level + 1
  FROM Employees e
  JOIN EmployeeHierarchy eh ON e.manager_id = eh.emp_id
)
SELECT * FROM EmployeeHierarchy ORDER BY level;
\`\`\`

**CTE vs Subquery:**
- CTE = readable, reusable in same query
- Subquery = inline, one-time use
- CTE recursive ho sakta hai, subquery nahi`,
    tags: ["CTE", "Recursive CTE", "WITH", "Advanced"],
  },
  {
    id: 17,
    difficulty: "Medium",
    category: "Transactions",
    question: "ACID properties kya hoti hain? Real example ke saath explain karo.",
    answer: `**ACID** = Atomicity, Consistency, Isolation, Durability — Database transactions ki 4 properties.

**Real Example: Bank Transfer (₹1000 transfer from A to B)**

**A — Atomicity** (All or Nothing):
\`\`\`sql
BEGIN TRANSACTION;
  UPDATE Accounts SET balance = balance - 1000 WHERE acc_no = 'A';
  UPDATE Accounts SET balance = balance + 1000 WHERE acc_no = 'B';
COMMIT;
-- Ya ROLLBACK; — dono changes undo
\`\`\`
→ Dono operations ek saath complete honge ya dono cancel.

**C — Consistency**:
- Balance 0 se kam nahi ho sakti
- Transaction ke pehle aur baad total balance same

**I — Isolation**:
- Ek transaction doosre ke beech mein interfere nahi karega
- T2 ko ya toh pehle wali balance dikhe ya baad wali, beech wali nahi

**D — Durability**:
- Commit ho gaya → data permanently save hai
- Server crash bhi ho jaaye — committed data safe hai (disk pe)

**Interview Tip**: Bank transaction = best ACID example.
- Atomicity = All or nothing
- Consistency = Rules follow
- Isolation = No interference
- Durability = Permanent save`,
    tags: ["ACID", "Transactions", "Atomicity", "Consistency", "Isolation", "Durability"],
  },
  {
    id: 18,
    difficulty: "Medium",
    category: "Joins",
    question: "FULL OUTER JOIN, CROSS JOIN aur NATURAL JOIN explain karo.",
    answer: `**FULL OUTER JOIN** — Dono tables ke saari rows. Match na ho toh NULL.
\`\`\`sql
SELECT e.name, d.dept_name
FROM Employees e
FULL OUTER JOIN Departments d ON e.dept_id = d.dept_id;

-- MySQL mein simulate karo:
SELECT * FROM Employees e LEFT JOIN Departments d ON e.dept_id = d.dept_id
UNION
SELECT * FROM Employees e RIGHT JOIN Departments d ON e.dept_id = d.dept_id;
\`\`\`

**CROSS JOIN** — Cartesian product. Har row har row se join.
\`\`\`sql
SELECT e.name, d.dept_name
FROM Employees e
CROSS JOIN Departments d;
-- 5 employees × 3 departments = 15 rows
\`\`\`
Use case: Combinations generate karna (T-shirt sizes × colors).

**NATURAL JOIN** — Common column name pe automatic join. Dangerous!
\`\`\`sql
SELECT * FROM Employees NATURAL JOIN Departments;
-- Automatically 'dept_id' pe join karega
-- ⚠️ Risky: naya column add ho toh query break
\`\`\`

**Comparison Table:**
| Join Type    | Returns                              |
|--------------|--------------------------------------|
| INNER JOIN   | Only matching rows                   |
| LEFT JOIN    | All left + matching right            |
| RIGHT JOIN   | All right + matching left            |
| FULL JOIN    | All rows from both tables            |
| CROSS JOIN   | All combinations (Cartesian product) |`,
    tags: ["FULL OUTER JOIN", "CROSS JOIN", "NATURAL JOIN", "Joins"],
  },
  {
    id: 19,
    difficulty: "Hard",
    category: "Performance",
    question: "Query Optimization ke kya techniques hain? EXPLAIN kaise use karte hain?",
    answer: `**Query Optimization** = SQL queries ko faster banane ki techniques.

**1. EXPLAIN use karo:**
\`\`\`sql
EXPLAIN SELECT * FROM Employees WHERE dept_id = 5;
-- type: ALL = bad (full scan), ref/range = good (index)
\`\`\`

**2. Proper Indexes lagao:**
\`\`\`sql
CREATE INDEX idx_customer ON Orders(customer_name);
\`\`\`

**3. SELECT * avoid karo:**
\`\`\`sql
-- ❌ Bad
SELECT * FROM Employees;
-- ✅ Good
SELECT emp_id, name, salary FROM Employees;
\`\`\`

**4. WHERE mein functions avoid karo:**
\`\`\`sql
-- ❌ Bad: index bypass
SELECT * FROM Orders WHERE YEAR(order_date) = 2024;
-- ✅ Good
SELECT * FROM Orders
WHERE order_date >= '2024-01-01' AND order_date < '2025-01-01';
\`\`\`

**5. LIMIT use karo:**
\`\`\`sql
SELECT * FROM Employees ORDER BY salary DESC LIMIT 10;
\`\`\`

**6. Subquery ki jagah JOIN:**
\`\`\`sql
-- ❌ Slow
SELECT * FROM Employees WHERE dept_id IN (SELECT dept_id FROM Departments WHERE location = 'Mumbai');
-- ✅ Faster
SELECT e.* FROM Employees e JOIN Departments d ON e.dept_id = d.dept_id WHERE d.location = 'Mumbai';
\`\`\``,
    tags: ["Query Optimization", "EXPLAIN", "Index", "Performance"],
  },
  {
    id: 20,
    difficulty: "Medium",
    category: "Aggregation",
    question: "GROUP BY ke saath multiple aggregate functions aur ROLLUP kya hai?",
    answer: `**Multiple Aggregate Functions with GROUP BY:**
\`\`\`sql
SELECT
  dept_id,
  COUNT(*) AS total_employees,
  AVG(salary) AS avg_salary,
  MAX(salary) AS max_salary,
  MIN(salary) AS min_salary,
  SUM(salary) AS total_salary
FROM Employees
GROUP BY dept_id
HAVING COUNT(*) > 2
ORDER BY avg_salary DESC;
\`\`\`

**ROLLUP** — Subtotals aur grand total automatically:
\`\`\`sql
SELECT dept_id, job_title, SUM(salary) AS total
FROM Employees
GROUP BY ROLLUP(dept_id, job_title);

-- Output:
-- dept_id=1, job_title='Dev'  → detail row
-- dept_id=1, job_title=NULL  → dept subtotal
-- dept_id=NULL, job_title=NULL → grand total
\`\`\`

**CUBE** — Saari possible combinations ke subtotals:
\`\`\`sql
SELECT dept_id, year, SUM(sales)
FROM Sales
GROUP BY CUBE(dept_id, year);
\`\`\`

**GROUPING SETS** — Specific groupings choose karo:
\`\`\`sql
SELECT dept_id, year, SUM(sales)
FROM Sales
GROUP BY GROUPING SETS((dept_id), (year), ());
\`\`\`

**Interview Tip**: ROLLUP = subtotals for hierarchy, CUBE = all combinations, GROUPING SETS = custom.`,
    tags: ["GROUP BY", "ROLLUP", "CUBE", "Aggregation", "Advanced"],
  },
  {
    id: 21,
    difficulty: "Hard",
    category: "Window Functions",
    question: "LAG() aur LEAD() window functions kya karte hain? Example do.",
    answer: `**LAG()** — Previous row ki value access karta hai.
**LEAD()** — Next row ki value access karta hai.

**Example 1: Month-over-month sales comparison:**
\`\`\`sql
SELECT
  month, sales,
  LAG(sales, 1, 0) OVER (ORDER BY month) AS prev_month_sales,
  sales - LAG(sales, 1, 0) OVER (ORDER BY month) AS growth
FROM MonthlySales;

-- Output:
-- Jan: 1000, prev: 0,    growth: +1000
-- Feb: 1200, prev: 1000, growth: +200
-- Mar: 900,  prev: 1200, growth: -300
\`\`\`

**Example 2: Department-wise comparison:**
\`\`\`sql
SELECT
  emp_id, name, dept_id, salary,
  LAG(salary) OVER (PARTITION BY dept_id ORDER BY salary) AS prev_salary,
  LEAD(salary) OVER (PARTITION BY dept_id ORDER BY salary) AS next_salary
FROM Employees;
\`\`\`

**Example 3: Finding date gaps:**
\`\`\`sql
SELECT
  login_date,
  LAG(login_date) OVER (ORDER BY login_date) AS prev_login,
  DATEDIFF(login_date, LAG(login_date) OVER (ORDER BY login_date)) AS days_gap
FROM UserLogins;
\`\`\`

**Use Cases**: Trend analysis, gap detection, period-over-period comparison.`,
    tags: ["LAG", "LEAD", "Window Functions", "Advanced"],
  },
  {
    id: 22,
    difficulty: "Medium",
    category: "Subquery",
    question: "EXISTS aur IN mein kya difference hai? Performance ke hisaab se kaunsa better hai?",
    answer: `**IN** — Subquery ka result ek list banata hai, outer query us list se check karta hai.
\`\`\`sql
SELECT name FROM Employees
WHERE dept_id IN (SELECT dept_id FROM Departments WHERE location = 'Mumbai');
\`\`\`

**EXISTS** — Sirf check karta hai ki koi row exist karti hai ya nahi. Short-circuit karta hai.
\`\`\`sql
SELECT name FROM Employees e
WHERE EXISTS (
  SELECT 1 FROM Departments d
  WHERE d.dept_id = e.dept_id AND d.location = 'Mumbai'
);
\`\`\`

**Performance Comparison:**
| Scenario                    | Winner  | Reason                          |
|-----------------------------|---------|---------------------------------|
| Subquery returns many rows  | EXISTS  | Short-circuits, list bani nahi  |
| Subquery returns few rows   | IN      | Simple list comparison, fast    |
| NULL values present         | EXISTS  | IN with NULLs unexpected        |

**NULL trap with IN:**
\`\`\`sql
-- ❌ Problem: NULL subquery mein ho toh kuch return nahi
SELECT * FROM A WHERE id NOT IN (SELECT id FROM B);

-- ✅ Safe:
SELECT * FROM A WHERE NOT EXISTS (SELECT 1 FROM B WHERE B.id = A.id);
\`\`\`

**Interview Tip**: NULL ke saath NOT IN dangerous hai. EXISTS safe aur generally faster hai.`,
    tags: ["EXISTS", "IN", "Subquery", "Performance", "NULL"],
  },
  {
    id: 23,
    difficulty: "Easy",
    category: "Basics",
    question: "CHAR aur VARCHAR mein kya difference hai? NVARCHAR kya hota hai?",
    answer: `**CHAR(n)** — Fixed length. Hamesha n characters store karta hai. Chhota data hoga toh spaces pad karta hai.
**VARCHAR(n)** — Variable length. Space efficient.

\`\`\`sql
CHAR(10) store kare 'Hello' → 'Hello     ' (5 spaces) → 10 bytes
VARCHAR(10) store kare 'Hello' → 'Hello'               → 6 bytes

CREATE TABLE Demo (
  country_code CHAR(2),        -- always 2 bytes: 'IN', 'US'
  user_name    VARCHAR(100)    -- 1 to 100 bytes
);
\`\`\`

**Kab use karo:**
| Type     | Best For              | Example              |
|----------|-----------------------|----------------------|
| CHAR     | Fixed-length data     | Country code, Gender |
| VARCHAR  | Variable-length data  | Name, Email, Address |

**NVARCHAR** — Unicode characters store karta hai (Hindi, Chinese, Arabic, emoji):
\`\`\`sql
-- NVARCHAR uses 2 bytes per character
CREATE TABLE Users (
  name NVARCHAR(100),   -- Hindi/Arabic names support
  bio  NVARCHAR(500)
);

-- VARCHAR vs NVARCHAR:
VARCHAR  → English only (1 byte/char)
NVARCHAR → Any language (2 bytes/char)
\`\`\`

**Interview Tip**: CHAR = fixed, fast lookups. VARCHAR = flexible, space efficient. NVARCHAR = multilingual support.`,
    tags: ["CHAR", "VARCHAR", "NVARCHAR", "Data Types", "Basics"],
  },
  {
    id: 24,
    difficulty: "Hard",
    category: "Advanced",
    question: "Stored Procedure aur Function mein kya difference hai?",
    answer: `**Stored Procedure** — Precompiled SQL statements ka set. Return value optional.
**Function** — Value return karna mandatory. SELECT mein use ho sakta hai.

**Stored Procedure:**
\`\`\`sql
CREATE PROCEDURE GetEmployeeDetails(IN emp_id INT)
BEGIN
  SELECT name, salary, dept_id
  FROM Employees
  WHERE employee_id = emp_id;

  UPDATE Employees SET last_accessed = NOW() WHERE employee_id = emp_id;
END;

CALL GetEmployeeDetails(101);
\`\`\`

**Function:**
\`\`\`sql
CREATE FUNCTION CalculateBonus(salary DECIMAL(10,2))
RETURNS DECIMAL(10,2)
DETERMINISTIC
BEGIN
  RETURN salary * 0.10;
END;

-- SELECT mein use karo:
SELECT name, salary, CalculateBonus(salary) AS bonus FROM Employees;
\`\`\`

**Key Differences:**
| Feature              | Stored Procedure | Function          |
|----------------------|------------------|-------------------|
| Return value         | Optional          | Mandatory         |
| DML (INSERT/UPDATE)  | ✅ Allowed        | ❌ Usually not    |
| Use in SELECT        | ❌ No             | ✅ Yes            |
| Transaction control  | ✅ Yes            | ❌ No             |

**Kab use karo:**
- Procedure: Complex business logic, multiple operations
- Function: Calculations jo SELECT mein chahiye`,
    tags: ["Stored Procedure", "Function", "Advanced", "PL/SQL"],
  },
  {
    id: 25,
    difficulty: "Hard",
    category: "Advanced",
    question: "Database Trigger kya hota hai? BEFORE aur AFTER trigger mein kya farak hai?",
    answer: `**Trigger** — Automatic action jo specific event (INSERT/UPDATE/DELETE) pe fire hota hai.

**BEFORE Trigger** — Operation se pehle fire hota hai. Data modify kar sakte hain.
\`\`\`sql
CREATE TRIGGER ValidateSalary
BEFORE INSERT ON Employees
FOR EACH ROW
BEGIN
  IF NEW.salary < 0 THEN
    SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = 'Salary negative nahi ho sakti';
  END IF;
  SET NEW.created_at = NOW();
END;
\`\`\`

**AFTER Trigger** — Operation ke baad fire hota hai. Audit logs ke liye.
\`\`\`sql
CREATE TRIGGER AuditEmployeeDelete
AFTER DELETE ON Employees
FOR EACH ROW
BEGIN
  INSERT INTO AuditLog (action, emp_id, emp_name, deleted_at)
  VALUES ('DELETE', OLD.emp_id, OLD.name, NOW());
END;

-- Update pe: OLD = purani values, NEW = nayi values
CREATE TRIGGER TrackSalaryChange
AFTER UPDATE ON Employees
FOR EACH ROW
BEGIN
  IF OLD.salary != NEW.salary THEN
    INSERT INTO SalaryHistory (emp_id, old_salary, new_salary, changed_at)
    VALUES (OLD.emp_id, OLD.salary, NEW.salary, NOW());
  END IF;
END;
\`\`\`

**Use Cases:**
- ✅ Audit logs
- ✅ Data validation
- ✅ Auto-populate columns
- ⚠️ Careful: Triggers hidden logic create karte hain, debugging mushkil`,
    tags: ["Trigger", "BEFORE", "AFTER", "Audit", "Advanced"],
  },
  {
    id: 26,
    difficulty: "Medium",
    category: "Joins",
    question: "Multiple table joins kaise likhte hain? 3 ya zyada tables join karne ka example do.",
    answer: `**3 Tables Join karna:**
\`\`\`sql
SELECT
  e.name AS employee_name,
  d.dept_name AS department,
  l.city AS location
FROM Employees e
INNER JOIN Departments d ON e.dept_id = d.dept_id
INNER JOIN Locations l ON d.location_id = l.location_id
WHERE l.city = 'Mumbai'
ORDER BY e.name;
\`\`\`

**4 Tables Join — Orders system:**
\`\`\`sql
SELECT
  c.customer_name,
  o.order_date,
  p.product_name,
  oi.quantity,
  oi.quantity * p.price AS total_price
FROM Customers c
INNER JOIN Orders o ON c.customer_id = o.customer_id
INNER JOIN OrderItems oi ON o.order_id = oi.order_id
INNER JOIN Products p ON oi.product_id = p.product_id
WHERE o.order_date >= '2024-01-01'
ORDER BY o.order_date DESC;
\`\`\`

**Mixed Joins (LEFT + INNER):**
\`\`\`sql
SELECT
  e.name,
  d.dept_name,
  m.name AS manager_name
FROM Employees e
LEFT JOIN Departments d ON e.dept_id = d.dept_id
LEFT JOIN Employees m ON e.manager_id = m.emp_id
ORDER BY e.name;
\`\`\`

**Performance Tips:**
1. JOIN columns pe indexes rakho
2. Unnecessary columns SELECT mat karo
3. Filters WHERE mein lagao`,
    tags: ["Multiple Joins", "3 Tables", "JOIN", "Performance"],
  },
  {
    id: 27,
    difficulty: "Medium",
    category: "Window Functions",
    question: "NTILE() window function kya karta hai? Percentile kaise nikaalte hain?",
    answer: `**NTILE(n)** — Rows ko n equal buckets mein divide karta hai.

**Basic NTILE:**
\`\`\`sql
SELECT
  name, salary,
  NTILE(4) OVER (ORDER BY salary) AS quartile
FROM Employees;
-- Quartile 1: lowest 25%, Quartile 4: highest 25%
\`\`\`

**Department-wise Quartiles:**
\`\`\`sql
SELECT
  name, dept_id, salary,
  NTILE(4) OVER (PARTITION BY dept_id ORDER BY salary) AS salary_quartile,
  CASE NTILE(4) OVER (PARTITION BY dept_id ORDER BY salary)
    WHEN 1 THEN 'Bottom 25%'
    WHEN 2 THEN 'Lower Mid 25%'
    WHEN 3 THEN 'Upper Mid 25%'
    WHEN 4 THEN 'Top 25%'
  END AS salary_category
FROM Employees;
\`\`\`

**PERCENT_RANK() — Percentile rank 0 to 1:**
\`\`\`sql
SELECT
  name, salary,
  ROUND(PERCENT_RANK() OVER (ORDER BY salary) * 100, 2) AS percentile_rank
FROM Employees;
-- 0.75 means 75th percentile
\`\`\`

**CUME_DIST() — Cumulative distribution:**
\`\`\`sql
SELECT
  name, salary,
  ROUND(CUME_DIST() OVER (ORDER BY salary) * 100, 2) AS cumulative_pct
FROM Employees;
\`\`\`

**Interview Tip**: NTILE = equal buckets, PERCENT_RANK = relative rank 0-1, CUME_DIST = cumulative %.`,
    tags: ["NTILE", "PERCENT_RANK", "CUME_DIST", "Window Functions", "Percentile"],
  },
  {
    id: 28,
    difficulty: "Easy",
    category: "Basics",
    question: "UNION aur UNION ALL mein kya difference hai? INTERSECT aur EXCEPT kya hote hain?",
    answer: `**UNION** — Do ya zyada SELECT results combine karta hai. Duplicate rows remove karta hai.
**UNION ALL** — Duplicate rows keep karta hai. UNION se faster hai.

\`\`\`sql
-- UNION — duplicates remove
SELECT name FROM ActiveEmployees
UNION
SELECT name FROM InactiveEmployees;

-- UNION ALL — duplicates rakhta hai (faster)
SELECT name FROM ActiveEmployees
UNION ALL
SELECT name FROM InactiveEmployees;
\`\`\`

**INTERSECT** — Sirf common rows:
\`\`\`sql
SELECT student_id FROM MathClass
INTERSECT
SELECT student_id FROM ScienceClass;
-- Dono classes mein present students
\`\`\`

**EXCEPT (MINUS in Oracle)** — First set mein se second set ki rows hataata hai:
\`\`\`sql
SELECT student_id FROM MathClass
EXCEPT
SELECT student_id FROM ScienceClass;
-- Math mein hain lekin Science mein nahi
\`\`\`

**Summary:**
| Operator   | Result                            |
|------------|-----------------------------------|
| UNION      | A + B (no duplicates)             |
| UNION ALL  | A + B (with duplicates, faster)   |
| INTERSECT  | A ∩ B (common only)               |
| EXCEPT     | A - B (A mein, B mein nahi)       |`,
    tags: ["UNION", "UNION ALL", "INTERSECT", "EXCEPT", "Set Operations"],
  },
  {
    id: 29,
    difficulty: "Medium",
    category: "Advanced",
    question: "VIEW kya hota hai? Materialized View se kya farak hai?",
    answer: `**VIEW** — Virtual table jo underlying query se banata hai. Data store nahi karta.

\`\`\`sql
-- View create karo
CREATE VIEW HighPaidEmployees AS
SELECT emp_id, name, dept_id, salary
FROM Employees
WHERE salary > 70000;

-- View use karo
SELECT * FROM HighPaidEmployees WHERE dept_id = 5;

-- View update karo
CREATE OR REPLACE VIEW HighPaidEmployees AS
SELECT emp_id, name, dept_id, salary
FROM Employees WHERE salary > 80000;

-- View delete karo
DROP VIEW HighPaidEmployees;
\`\`\`

**Benefits of Views:**
- 🔒 Security: Sensitive columns hide karo
- 📖 Simplicity: Complex query ko simple naam do
- ♻️ Reusability: Same query baar baar likhne ki zaroorat nahi

**Materialized View** — Query result physically store karta hai. Faster but stale data possible.
\`\`\`sql
-- PostgreSQL
CREATE MATERIALIZED VIEW DeptSalarySummary AS
SELECT dept_id, AVG(salary) as avg_salary, COUNT(*) as emp_count
FROM Employees GROUP BY dept_id;

REFRESH MATERIALIZED VIEW DeptSalarySummary;
\`\`\`

**Comparison:**
| Feature      | View              | Materialized View      |
|--------------|-------------------|------------------------|
| Data storage | ❌ No (virtual)   | ✅ Yes (physical)      |
| Speed        | Depends on query  | Fast (pre-computed)    |
| Fresh data   | ✅ Always         | ❌ Manual refresh      |`,
    tags: ["VIEW", "Materialized View", "Advanced", "Performance"],
  },
  {
    id: 30,
    difficulty: "Hard",
    category: "Locks",
    question: "Database Locking kya hota hai? Deadlock kya hai aur kaise avoid kare?",
    answer: `**Locking** — Multiple transactions ek saath data access karte hain toh locks prevent karta hai data corruption.

**Lock Types:**
- **Shared Lock (S)** — Read lock. Multiple transactions simultaneously read kar sakte hain.
- **Exclusive Lock (X)** — Write lock. Sirf ek transaction.

\`\`\`sql
SELECT * FROM Accounts WHERE acc_id = 1 FOR UPDATE;        -- Exclusive lock
SELECT * FROM Accounts WHERE acc_id = 1 LOCK IN SHARE MODE; -- Shared lock
\`\`\`

**Deadlock** — Do transactions ek doosre ka wait karte hain, dono block:
\`\`\`
Transaction 1: Locks Table A → waits for Table B
Transaction 2: Locks Table B → waits for Table A
→ DEADLOCK!
\`\`\`

**Deadlock Avoid Kaise Karein:**
\`\`\`sql
-- ✅ Rule 1: Hamesha same order mein tables lock karo
-- ✅ Rule 2: Transactions chhote rakho
BEGIN;
  -- Fast operations only
COMMIT;

-- ✅ Rule 3: Lower isolation level
SET TRANSACTION ISOLATION LEVEL READ COMMITTED;

-- ✅ Rule 4: Index use karo (kam rows lock hongi)
CREATE INDEX idx_acc ON Accounts(acc_id);
\`\`\`

**Isolation Levels:**
| Level              | Dirty Read | Non-Repeatable | Phantom |
|--------------------|------------|----------------|---------|
| READ UNCOMMITTED   | ✅ Yes     | ✅ Yes         | ✅ Yes  |
| READ COMMITTED     | ❌ No      | ✅ Yes         | ✅ Yes  |
| REPEATABLE READ    | ❌ No      | ❌ No          | ✅ Yes  |
| SERIALIZABLE       | ❌ No      | ❌ No          | ❌ No   |`,
    tags: ["Locking", "Deadlock", "Isolation Levels", "Transactions", "Advanced"],
  },
  {
    id: 31,
    difficulty: "Medium",
    category: "Aggregation",
    question: "STRING_AGG / GROUP_CONCAT aur PIVOT kya hai?",
    answer: `**GROUP_CONCAT (MySQL)** — Multiple rows ki values ek string mein combine karta hai.

\`\`\`sql
-- MySQL: GROUP_CONCAT
SELECT dept_id, GROUP_CONCAT(name ORDER BY name SEPARATOR ', ') AS employees
FROM Employees GROUP BY dept_id;
-- Output: dept 1 → "Alice, Bob, Carol"

-- PostgreSQL: STRING_AGG
SELECT dept_id, STRING_AGG(name, ', ' ORDER BY name) AS employees
FROM Employees GROUP BY dept_id;

-- Distinct values only
SELECT dept_id, GROUP_CONCAT(DISTINCT city SEPARATOR ', ') AS cities
FROM Employees GROUP BY dept_id;
\`\`\`

**PIVOT — Rows ko Columns mein convert karna:**
\`\`\`sql
-- SQL Server PIVOT:
SELECT dept_id, [Q1], [Q2], [Q3], [Q4]
FROM (SELECT dept_id, quarter, sales FROM QuarterlySales) AS src
PIVOT (SUM(sales) FOR quarter IN ([Q1],[Q2],[Q3],[Q4])) AS pivot_table;

-- MySQL mein PIVOT manually (CASE + SUM trick):
SELECT
  dept_id,
  SUM(CASE WHEN quarter = 'Q1' THEN sales ELSE 0 END) AS Q1,
  SUM(CASE WHEN quarter = 'Q2' THEN sales ELSE 0 END) AS Q2,
  SUM(CASE WHEN quarter = 'Q3' THEN sales ELSE 0 END) AS Q3,
  SUM(CASE WHEN quarter = 'Q4' THEN sales ELSE 0 END) AS Q4
FROM QuarterlySales GROUP BY dept_id;
\`\`\`

**Interview Tip**: GROUP_CONCAT = rows to single string. PIVOT = rows to columns using CASE+SUM trick.`,
    tags: ["GROUP_CONCAT", "STRING_AGG", "PIVOT", "Aggregation", "Advanced"],
  },
  {
    id: 32,
    difficulty: "Easy",
    category: "Basics",
    question: "SQL mein CASE statement kaise use karte hain?",
    answer: `**CASE** — IF-ELSE jaisa SQL mein.

**Searched CASE:**
\`\`\`sql
SELECT name, salary,
  CASE
    WHEN salary < 30000 THEN 'Junior'
    WHEN salary BETWEEN 30000 AND 70000 THEN 'Mid Level'
    WHEN salary > 70000 THEN 'Senior'
    ELSE 'Unknown'
  END AS level
FROM Employees;
\`\`\`

**CASE in ORDER BY:**
\`\`\`sql
SELECT name, status FROM Orders
ORDER BY
  CASE status
    WHEN 'Urgent' THEN 1
    WHEN 'Normal' THEN 2
    WHEN 'Low' THEN 3
  END;
\`\`\`

**CASE in Aggregation:**
\`\`\`sql
SELECT
  dept_id,
  COUNT(CASE WHEN salary > 50000 THEN 1 END) AS high_earners,
  COUNT(CASE WHEN salary <= 50000 THEN 1 END) AS low_earners,
  SUM(CASE WHEN gender = 'F' THEN salary ELSE 0 END) AS female_salary_total
FROM Employees GROUP BY dept_id;
\`\`\`

**Grade assign karo:**
\`\`\`sql
SELECT student_id, name, marks,
  CASE
    WHEN marks >= 90 THEN 'A+'
    WHEN marks >= 80 THEN 'A'
    WHEN marks >= 70 THEN 'B'
    WHEN marks >= 60 THEN 'C'
    ELSE 'F'
  END AS grade
FROM Students;
\`\`\`

**Interview Tip**: CASE bahut versatile hai — SELECT, WHERE, ORDER BY, GROUP BY, sab mein kaam aata hai.`,
    tags: ["CASE", "Conditional Logic", "Basics", "SELECT"],
  },
  {
    id: 33,
    difficulty: "Medium",
    category: "String Functions",
    question: "SQL mein important String functions kaunse hain?",
    answer: `**Most Important SQL String Functions:**

\`\`\`sql
-- UPPER / LOWER
SELECT UPPER('hello');  -- 'HELLO'
SELECT LOWER('HELLO');  -- 'hello'

-- LENGTH
SELECT LENGTH('Hello');   -- 5 (MySQL/PostgreSQL)

-- SUBSTRING
SELECT SUBSTRING('Hello World', 1, 5);  -- 'Hello'
SELECT SUBSTR('Hello World', 7);        -- 'World'

-- TRIM
SELECT TRIM('  hello  ');   -- 'hello'
SELECT LTRIM('  hello');    -- 'hello'
SELECT RTRIM('hello  ');    -- 'hello'

-- REPLACE
SELECT REPLACE('Hello World', 'World', 'SQL');  -- 'Hello SQL'

-- CONCAT
SELECT CONCAT('Hello', ' ', 'World');  -- 'Hello World'

-- LIKE — pattern matching
SELECT * FROM Employees WHERE name LIKE 'Ra%';
SELECT * FROM Employees WHERE name LIKE '_a%';

-- INSTR / CHARINDEX
SELECT INSTR('Hello World', 'World');  -- 7 (MySQL)

-- LPAD / RPAD
SELECT LPAD('42', 5, '0');  -- '00042'
\`\`\`

**Real world use:**
\`\`\`sql
-- Email domain extract
SELECT SUBSTRING(email, INSTR(email, '@') + 1) AS domain FROM Users;
-- 'rahul@gmail.com' → 'gmail.com'
\`\`\``,
    tags: ["String Functions", "SUBSTRING", "LIKE", "CONCAT", "Basics"],
  },
  {
    id: 34,
    difficulty: "Medium",
    category: "Date Functions",
    question: "SQL mein important Date functions kaunse hain?",
    answer: `**Most Important Date Functions:**

\`\`\`sql
-- Current date/time
SELECT NOW();           -- 2024-01-15 14:30:00
SELECT CURDATE();       -- 2024-01-15
SELECT CURRENT_DATE;    -- Standard SQL

-- Date parts extract
SELECT YEAR('2024-01-15');    -- 2024
SELECT MONTH('2024-01-15');   -- 1
SELECT DAY('2024-01-15');     -- 15
SELECT DAYNAME('2024-01-15'); -- 'Monday'

-- Date arithmetic
SELECT DATE_ADD('2024-01-15', INTERVAL 30 DAY);
SELECT DATE_SUB('2024-01-15', INTERVAL 1 MONTH);

-- Date difference
SELECT DATEDIFF('2024-12-31', '2024-01-01');  -- 365 days
SELECT TIMESTAMPDIFF(MONTH, '2024-01-01', '2024-06-01');  -- 5

-- Format date
SELECT DATE_FORMAT(NOW(), '%d/%m/%Y');   -- 15/01/2024 (MySQL)
SELECT TO_CHAR(NOW(), 'DD/MM/YYYY');     -- PostgreSQL
\`\`\`

**Real Interview Queries:**
\`\`\`sql
-- Last 30 days ke orders
SELECT * FROM Orders
WHERE order_date >= DATE_SUB(NOW(), INTERVAL 30 DAY);

-- Age calculate
SELECT name, TIMESTAMPDIFF(YEAR, dob, CURDATE()) AS age FROM Users;

-- Monthly report
SELECT YEAR(order_date) yr, MONTH(order_date) mo, SUM(amount)
FROM Orders GROUP BY yr, mo ORDER BY yr, mo;
\`\`\``,
    tags: ["Date Functions", "DATEDIFF", "DATE_FORMAT", "NOW", "Basics"],
  },
  {
    id: 35,
    difficulty: "Hard",
    category: "Advanced",
    question: "Database Sharding kya hai? Horizontal vs Vertical Scaling explain karo.",
    answer: `**Vertical Scaling (Scale Up)** — Same server ko powerful banao.
\`\`\`
Server: 8 CPU → 32 CPU, 16GB RAM → 256GB RAM
✅ Simple
❌ Physical limits hain, expensive, single point of failure
\`\`\`

**Horizontal Scaling (Scale Out)** — Zyada servers add karo.
\`\`\`
1 server → 10 servers (load distribute)
✅ Near unlimited scale
❌ Complex, data consistency challenges
\`\`\`

**Database Sharding** — Data ko multiple database servers (shards) mein distribute karna.

**Sharding Strategies:**

1. **Range-based Sharding:**
\`\`\`
Shard 1: user_id 1-1000000
Shard 2: user_id 1000001-2000000
Problem: Hotspot possible
\`\`\`

2. **Hash-based Sharding:**
\`\`\`
shard_number = hash(user_id) % total_shards
✅ Even distribution
❌ Resharding complex
\`\`\`

3. **Directory-based Sharding:**
\`\`\`
Lookup table se track karo which data is on which shard
\`\`\`

**Challenges:**
- Cross-shard JOINs complex hote hain
- Transactions across shards difficult
- Schema changes sabhi shards pe apply karne hote hain`,
    tags: ["Sharding", "Horizontal Scaling", "Vertical Scaling", "Advanced", "Architecture"],
  },
  {
    id: 36,
    difficulty: "Medium",
    category: "Subquery",
    question: "Derived Table kya hoti hai? CTE se kya fark hai?",
    answer: `**Derived Table** — FROM clause mein ek subquery jo temporary table ki tarah kaam karta hai.

\`\`\`sql
-- Dept average se zyada salary waale employees
SELECT e.name, e.salary, dept_avg.avg_salary
FROM Employees e
JOIN (
  SELECT dept_id, AVG(salary) AS avg_salary
  FROM Employees GROUP BY dept_id
) AS dept_avg ON e.dept_id = dept_avg.dept_id
WHERE e.salary > dept_avg.avg_salary;
\`\`\`

**CTE version (same logic, more readable):**
\`\`\`sql
WITH dept_avg AS (
  SELECT dept_id, AVG(salary) AS avg_salary
  FROM Employees GROUP BY dept_id
)
SELECT e.name, e.salary, da.avg_salary
FROM Employees e
JOIN dept_avg da ON e.dept_id = da.dept_id
WHERE e.salary > da.avg_salary;
\`\`\`

| Feature        | Derived Table  | CTE          | View         |
|----------------|----------------|--------------|--------------|
| Scope          | Single FROM    | Single query | Persistent   |
| Reusable       | Same FROM only | ✅ Same query| ✅ Always    |
| Readability    | Hard nested    | Clean        | Cleanest     |
| Recursive      | ❌ No          | ✅ Yes       | ❌ No        |

**Interview Tip**: Derived table = inline temporary table. CTE same kaam better readability se karta hai.`,
    tags: ["Derived Table", "Inline View", "Subquery", "CTE"],
  },
  {
    id: 37,
    difficulty: "Easy",
    category: "Basics",
    question: "SQL mein Constraints kya hote hain? Saare types explain karo.",
    answer: `**Constraints** — Database rules jo data integrity ensure karte hain.

**1. PRIMARY KEY** — Unique + NOT NULL.
\`\`\`sql
CREATE TABLE Students (student_id INT PRIMARY KEY);
\`\`\`

**2. FOREIGN KEY** — Doosri table ke PRIMARY KEY se link.
\`\`\`sql
CREATE TABLE Enrollments (
  student_id INT,
  FOREIGN KEY (student_id) REFERENCES Students(student_id)
    ON DELETE CASCADE ON UPDATE CASCADE
);
\`\`\`

**3. UNIQUE** — Duplicate values nahi. NULL allow.
\`\`\`sql
email VARCHAR(100) UNIQUE,
CONSTRAINT uq_email UNIQUE (email, phone)
\`\`\`

**4. NOT NULL** — NULL values nahi.
\`\`\`sql
name VARCHAR(100) NOT NULL,
\`\`\`

**5. CHECK** — Custom validation rule.
\`\`\`sql
age INT CHECK (age >= 18 AND age <= 100),
salary DECIMAL CHECK (salary >= 0),
gender CHAR(1) CHECK (gender IN ('M', 'F', 'O'))
\`\`\`

**6. DEFAULT** — Default value set karo.
\`\`\`sql
status VARCHAR(20) DEFAULT 'Active',
created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
\`\`\`

**Adding/Dropping Constraint:**
\`\`\`sql
ALTER TABLE Students ADD CONSTRAINT chk_age CHECK (age >= 0);
ALTER TABLE Students DROP CONSTRAINT chk_age;
\`\`\``,
    tags: ["Constraints", "PRIMARY KEY", "FOREIGN KEY", "UNIQUE", "CHECK", "DEFAULT"],
  },
  {
    id: 38,
    difficulty: "Hard",
    category: "Window Functions",
    question: "Window Functions mein PARTITION BY aur ROWS vs RANGE explain karo.",
    answer: `**Window Function Anatomy:**
\`\`\`sql
function_name() OVER (
  PARTITION BY column1      -- Groups define karo (optional)
  ORDER BY column2          -- Order define karo (optional)
  ROWS/RANGE frame_clause   -- Window frame (optional)
)
\`\`\`

**PARTITION BY:**
\`\`\`sql
-- Bina PARTITION: overall running total
SELECT name, salary, SUM(salary) OVER (ORDER BY emp_id) AS running_total
FROM Employees;

-- PARTITION BY dept: har dept ka running total
SELECT name, dept_id, salary,
  SUM(salary) OVER (PARTITION BY dept_id ORDER BY emp_id) AS dept_running_total
FROM Employees;
\`\`\`

**ROWS vs RANGE Frame:**
\`\`\`sql
-- ROWS: physical rows count karta hai
SUM(salary) OVER (
  ORDER BY hire_date
  ROWS BETWEEN 2 PRECEDING AND CURRENT ROW
)  -- Exactly 3 rows ka sum

-- RANGE: logical values (same ORDER BY value = same group)
SUM(salary) OVER (
  ORDER BY hire_date
  RANGE BETWEEN INTERVAL '7' DAY PRECEDING AND CURRENT ROW
)  -- Last 7 days ka sum
\`\`\`

**Common Frames:**
\`\`\`sql
ROWS BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW  -- start se current
ROWS BETWEEN 2 PRECEDING AND 2 FOLLOWING          -- sliding window ±2
\`\`\`

**3-month moving average:**
\`\`\`sql
SELECT month, sales,
  AVG(sales) OVER (ORDER BY month ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) AS moving_avg
FROM MonthlySales;
\`\`\``,
    tags: ["PARTITION BY", "Window Frame", "ROWS", "RANGE", "Window Functions", "Advanced"],
  },
  {
    id: 39,
    difficulty: "Medium",
    category: "Performance",
    question: "SQL Execution Order kya hoti hai? Query internally kaise process hoti hai?",
    answer: `**SQL Logical Execution Order:**

**Likhne ka Order:**
\`\`\`sql
SELECT name, dept_id, COUNT(*) AS emp_count  -- 1
FROM Employees                                -- 2
WHERE salary > 30000                          -- 3
GROUP BY dept_id                              -- 4
HAVING COUNT(*) > 2                           -- 5
ORDER BY emp_count DESC                       -- 6
LIMIT 5;                                      -- 7
\`\`\`

**Execute hone ka Order:**
\`\`\`
1. FROM        → Kaunsi table(s)? JOINs process
2. WHERE       → Rows filter (groups banne se pehle)
3. GROUP BY    → Rows ko groups mein organize
4. HAVING      → Groups filter (aggregate conditions)
5. SELECT      → Columns choose, expressions evaluate
6. DISTINCT    → Duplicates remove
7. ORDER BY    → Result sort
8. LIMIT/TOP   → Rows limit
\`\`\`

**Practical Impact:**
\`\`\`sql
-- ❌ Error: WHERE mein alias use nahi kar sakte
SELECT salary * 1.1 AS new_salary FROM Employees
WHERE new_salary > 50000;  -- ERROR! alias WHERE mein nahi pata

-- ✅ Correct: expression repeat karo
SELECT salary * 1.1 AS new_salary FROM Employees
WHERE salary * 1.1 > 50000;

-- ✅ HAVING mein aggregate use karo
SELECT dept_id, AVG(salary) AS avg_sal FROM Employees
GROUP BY dept_id HAVING AVG(salary) > 50000;
\`\`\`

**Mnemonic**: "Furious Whales Go Hunting, See Other Life"
FROM → WHERE → GROUP BY → HAVING → SELECT → ORDER BY → LIMIT`,
    tags: ["Execution Order", "FROM", "WHERE", "GROUP BY", "Performance", "Basics"],
  },
  {
    id: 40,
    difficulty: "Medium",
    category: "Advanced",
    question: "Database mein Pagination kaise implement karte hain? OFFSET vs Cursor-based.",
    answer: `**OFFSET-based Pagination:**
\`\`\`sql
-- Page 1
SELECT * FROM Products ORDER BY product_id LIMIT 10 OFFSET 0;
-- Page 2
SELECT * FROM Products ORDER BY product_id LIMIT 10 OFFSET 10;
-- Page N
SELECT * FROM Products ORDER BY product_id LIMIT 10 OFFSET (N-1) * 10;

-- SQL Server style
SELECT * FROM Products ORDER BY product_id
OFFSET 20 ROWS FETCH NEXT 10 ROWS ONLY;
\`\`\`

**OFFSET ka Problem:**
\`\`\`
Page 1000 ke liye: OFFSET 9990
→ Database 9990 rows skip karta hai (sab read karke!)
→ Late pages bahut slow
\`\`\`

**Cursor-based Pagination — Efficient:**
\`\`\`sql
-- Pehli page
SELECT * FROM Products ORDER BY product_id LIMIT 10;
-- Last item ka product_id: 150

-- Next page — last ID use karo
SELECT * FROM Products
WHERE product_id > 150
ORDER BY product_id LIMIT 10;
-- Hamesha fast hai!
\`\`\`

**Comparison:**
| Feature              | OFFSET              | Cursor-based      |
|----------------------|---------------------|-------------------|
| Performance (large)  | ❌ Slow             | ✅ Always fast    |
| Jump to page N       | ✅ Direct           | ❌ Sequential     |
| Data consistency     | ❌ Unstable         | ✅ Stable         |
| Use case             | Small datasets      | Large/infinite    |

**Interview Tip**: Social media infinite scroll = cursor-based. Admin page numbers = OFFSET ok.`,
    tags: ["Pagination", "OFFSET", "LIMIT", "Cursor Pagination", "Performance"],
  },
  {
    id: 41,
    difficulty: "Easy",
    category: "Basics",
    question: "SQL mein Numbers ke liye important Math functions kaunse hain?",
    answer: `**Important SQL Math Functions:**

\`\`\`sql
-- ROUND — decimal round
SELECT ROUND(3.14159, 2);   -- 3.14
SELECT ROUND(3.567, 0);     -- 4

-- FLOOR — niche round
SELECT FLOOR(3.9);    -- 3
SELECT FLOOR(-3.1);   -- -4

-- CEILING/CEIL — upar round
SELECT CEILING(3.1);  -- 4
SELECT CEIL(-3.9);    -- -3

-- ABS — absolute value
SELECT ABS(-42);      -- 42

-- MOD — remainder
SELECT MOD(10, 3);    -- 1
SELECT 10 % 3;        -- 1 (MySQL)

-- POWER/POW — exponent
SELECT POWER(2, 10);  -- 1024

-- SQRT — square root
SELECT SQRT(144);     -- 12

-- RAND — random 0 to 1
SELECT RAND();

-- TRUNCATE — no rounding
SELECT TRUNCATE(3.987, 2);  -- 3.98

-- SIGN
SELECT SIGN(-5);   -- -1
SELECT SIGN(0);    -- 0
SELECT SIGN(5);    -- 1
\`\`\`

**Real use cases:**
\`\`\`sql
-- Price with GST
SELECT product_name, ROUND(price * 1.18, 2) AS price_with_gst FROM Products;

-- Random sample
SELECT * FROM Employees ORDER BY RAND() LIMIT 10;

-- Even/Odd
SELECT id, CASE WHEN MOD(id,2)=0 THEN 'Even' ELSE 'Odd' END FROM Numbers;
\`\`\``,
    tags: ["Math Functions", "ROUND", "FLOOR", "CEILING", "ABS", "Basics"],
  },
  {
    id: 42,
    difficulty: "Hard",
    category: "Advanced",
    question: "Second Highest Salary dhundhne ke 4 alag tarike kya hain?",
    answer: `**Yeh ek bahut popular interview question hai! 4 approaches:**

**Approach 1: LIMIT + OFFSET (MySQL):**
\`\`\`sql
SELECT DISTINCT salary
FROM Employees
ORDER BY salary DESC
LIMIT 1 OFFSET 1;
\`\`\`

**Approach 2: Subquery:**
\`\`\`sql
SELECT MAX(salary) AS second_highest
FROM Employees
WHERE salary < (SELECT MAX(salary) FROM Employees);
\`\`\`

**Approach 3: Dense Rank (Best approach):**
\`\`\`sql
SELECT salary AS second_highest
FROM (
  SELECT salary, DENSE_RANK() OVER (ORDER BY salary DESC) AS rnk
  FROM Employees
) ranked
WHERE rnk = 2;
-- Nth highest ke liye: change rnk = N
\`\`\`

**Approach 4: NOT IN:**
\`\`\`sql
SELECT MAX(salary) AS second_highest
FROM Employees
WHERE salary NOT IN (SELECT MAX(salary) FROM Employees);
\`\`\`

**Edge case: Same salary hone pe:**
\`\`\`sql
-- Salaries: 100, 100, 80, 60
-- ROW_NUMBER se: 100=1, 100=2 → 2nd = 100 (same! wrong)
-- DENSE_RANK se: 100=1, 80=2 → 2nd = 80 ✅
\`\`\`

**Nth Highest (Generic):**
\`\`\`sql
SELECT salary FROM (
  SELECT salary, DENSE_RANK() OVER (ORDER BY salary DESC) AS rnk
  FROM Employees
) ranked WHERE rnk = 3;  -- 3rd highest
\`\`\`

**Interview Tip**: DENSE_RANK approach sabse correct aur flexible hai.`,
    tags: ["Second Highest Salary", "DENSE_RANK", "Subquery", "Interview Classic"],
  },
  {
    id: 43,
    difficulty: "Medium",
    category: "Joins",
    question: "Duplicate records find aur delete kaise karte hain SQL mein?",
    answer: `**Step 1: Duplicates dhundho:**
\`\`\`sql
SELECT email, COUNT(*) AS count
FROM Users GROUP BY email HAVING COUNT(*) > 1;
\`\`\`

**Step 2: Duplicates delete karo (original rakhke):**

**Method 1: ROW_NUMBER (Best approach):**
\`\`\`sql
DELETE FROM Users
WHERE id NOT IN (
  SELECT min_id FROM (
    SELECT MIN(id) AS min_id
    FROM Users GROUP BY email
  ) AS keep_rows
);
\`\`\`

**Method 2: Self JOIN:**
\`\`\`sql
DELETE u1 FROM Users u1
INNER JOIN Users u2
  ON u1.email = u2.email AND u1.id > u2.id;
\`\`\`

**Method 3: CTE (PostgreSQL/SQL Server):**
\`\`\`sql
WITH DuplicateCTE AS (
  SELECT id,
    ROW_NUMBER() OVER (PARTITION BY email ORDER BY id) AS rn
  FROM Users
)
DELETE FROM DuplicateCTE WHERE rn > 1;
\`\`\`

**Safe approach — pehle check karo:**
\`\`\`sql
WITH DuplicateCTE AS (
  SELECT id, email,
    ROW_NUMBER() OVER (PARTITION BY email ORDER BY id) AS rn
  FROM Users
)
SELECT * FROM DuplicateCTE WHERE rn > 1;  -- Yeh delete honge
\`\`\``,
    tags: ["Duplicates", "DELETE", "ROW_NUMBER", "Self JOIN", "CTE"],
  },
  {
    id: 44,
    difficulty: "Medium",
    category: "Advanced",
    question: "Running Total (Cumulative Sum) aur Moving Average kaise calculate karte hain?",
    answer: `**Running Total:**
\`\`\`sql
SELECT
  order_date, amount,
  SUM(amount) OVER (ORDER BY order_date) AS running_total,
  COUNT(*) OVER (ORDER BY order_date) AS running_count
FROM Orders;

-- Per customer running total
SELECT
  customer_id, order_date, amount,
  SUM(amount) OVER (PARTITION BY customer_id ORDER BY order_date) AS customer_total
FROM Orders;
\`\`\`

**Running Percentage:**
\`\`\`sql
SELECT dept_id, salary,
  ROUND(
    SUM(salary) OVER (ORDER BY salary) * 100.0 / SUM(salary) OVER(),
    2
  ) AS running_pct
FROM Employees;
\`\`\`

**Moving Average (Sliding Window):**
\`\`\`sql
SELECT sale_date, daily_sales,
  ROUND(AVG(daily_sales) OVER (
    ORDER BY sale_date
    ROWS BETWEEN 2 PRECEDING AND CURRENT ROW
  ), 2) AS moving_avg_3day,
  ROUND(AVG(daily_sales) OVER (
    ORDER BY sale_date
    ROWS BETWEEN 6 PRECEDING AND CURRENT ROW
  ), 2) AS moving_avg_7day
FROM DailySales;
\`\`\`

**Month-over-Month Growth %:**
\`\`\`sql
SELECT month, revenue,
  LAG(revenue) OVER (ORDER BY month) AS prev_month,
  ROUND(
    (revenue - LAG(revenue) OVER (ORDER BY month)) * 100.0 /
    LAG(revenue) OVER (ORDER BY month), 2
  ) AS growth_pct
FROM MonthlyRevenue;
\`\`\``,
    tags: ["Running Total", "Moving Average", "Window Functions", "SUM OVER", "Advanced"],
  },
  {
    id: 45,
    difficulty: "Easy",
    category: "Basics",
    question: "BETWEEN, IN, LIKE operators kaise kaam karte hain?",
    answer: `**BETWEEN** — Range check (inclusive dono endpoints):
\`\`\`sql
SELECT * FROM Products WHERE price BETWEEN 100 AND 500;
-- Equivalent to: price >= 100 AND price <= 500

SELECT * FROM Orders WHERE order_date BETWEEN '2024-01-01' AND '2024-12-31';
SELECT * FROM Products WHERE price NOT BETWEEN 100 AND 500;
\`\`\`

**IN** — List mein check karo:
\`\`\`sql
SELECT * FROM Employees WHERE dept_id IN (1, 3, 5, 7);
SELECT * FROM Employees WHERE city NOT IN ('Mumbai', 'Delhi');

-- Subquery ke saath
SELECT * FROM Employees
WHERE dept_id IN (SELECT dept_id FROM Departments WHERE location = 'Mumbai');
\`\`\`

**LIKE** — Pattern matching:
\`\`\`sql
-- % = zero or more chars, _ = exactly one char
SELECT * FROM Employees WHERE name LIKE 'Ra%';     -- Rahul, Ram, Raj
SELECT * FROM Employees WHERE name LIKE '%kumar';  -- ends with kumar
SELECT * FROM Employees WHERE name LIKE '%ar%';    -- 'ar' anywhere
SELECT * FROM Employees WHERE name LIKE 'R___l';   -- 5 chars: R+3any+l

SELECT * FROM Employees WHERE name NOT LIKE 'A%';  -- NOT LIKE

-- ESCAPE character
SELECT * FROM Products WHERE name LIKE '50\% off%' ESCAPE '\\';
\`\`\`

**Performance Tip**: \`LIKE '%abc'\` (leading wildcard) index use nahi karta. \`LIKE 'abc%'\` index use karta hai.`,
    tags: ["BETWEEN", "IN", "LIKE", "Operators", "Basics"],
  },
  {
    id: 46,
    difficulty: "Hard",
    category: "Advanced",
    question: "Slowly Changing Dimensions (SCD) kya hote hain? Type 1 aur Type 2 explain karo.",
    answer: `**SCD** — Data Warehousing concept. Historical changes ko kaise track karein.

**Real scenario**: Employee ka city change ho jaata hai.

**Type 1 — Overwrite (No History):**
\`\`\`sql
UPDATE DimEmployee SET city = 'Pune' WHERE emp_id = 101;
-- ❌ Mumbai pe kabhi tha — pata nahi chalega
-- ✅ Simple, fast, current data ke liye
\`\`\`

**Type 2 — Add New Row (Full History):**
\`\`\`sql
UPDATE DimEmployee
SET end_date = CURDATE(), is_current = FALSE
WHERE emp_id = 101 AND is_current = TRUE;

INSERT INTO DimEmployee (emp_id, name, city, start_date, end_date, is_current)
VALUES (101, 'Rahul', 'Pune', CURDATE(), '9999-12-31', TRUE);

-- surrogate_key | emp_id | city   | start_date | end_date   | is_current
-- 1001          | 101    | Mumbai | 2020-01-01 | 2024-06-01 | FALSE
-- 1002          | 101    | Pune   | 2024-06-02 | 9999-12-31 | TRUE
\`\`\`

**Type 3 — Add New Column (Limited History):**
\`\`\`sql
UPDATE DimEmployee
SET previous_city = current_city, current_city = 'Pune'
WHERE emp_id = 101;
-- Sirf ek previous value track hoti hai
\`\`\`

| Type | History | Complexity | Storage |
|------|---------|------------|---------|
| 1    | None    | Simple     | Low     |
| 2    | Full    | Complex    | High    |
| 3    | 1 prev  | Medium     | Medium  |`,
    tags: ["SCD", "Data Warehouse", "Type 1", "Type 2", "Advanced"],
  },
  {
    id: 47,
    difficulty: "Medium",
    category: "Aggregation",
    question: "Top N records per group kaise nikaalte hain SQL mein?",
    answer: `**Scenario**: Har department se top 3 highest paid employees nikaalein.

**Method 1: ROW_NUMBER (Best approach):**
\`\`\`sql
SELECT emp_id, name, dept_id, salary
FROM (
  SELECT emp_id, name, dept_id, salary,
    ROW_NUMBER() OVER (PARTITION BY dept_id ORDER BY salary DESC) AS rn
  FROM Employees
) ranked
WHERE rn <= 3;
\`\`\`

**Method 2: DENSE_RANK (Ties include):**
\`\`\`sql
SELECT emp_id, name, dept_id, salary
FROM (
  SELECT emp_id, name, dept_id, salary,
    DENSE_RANK() OVER (PARTITION BY dept_id ORDER BY salary DESC) AS dr
  FROM Employees
) ranked
WHERE dr <= 3;
-- ROW_NUMBER: exactly 3, DENSE_RANK: ties bhi include
\`\`\`

**First record per group (Most recent order per customer):**
\`\`\`sql
SELECT customer_id, order_id, order_date, amount
FROM (
  SELECT customer_id, order_id, order_date, amount,
    ROW_NUMBER() OVER (PARTITION BY customer_id ORDER BY order_date DESC) AS rn
  FROM Orders
) ranked
WHERE rn = 1;
\`\`\`

**Interview Tip**: ROW_NUMBER for exact N, DENSE_RANK for N with ties.
PARTITION BY = grouping, ORDER BY = ranking criteria.`,
    tags: ["Top N per Group", "ROW_NUMBER", "DENSE_RANK", "PARTITION BY", "Interview Classic"],
  },
  {
    id: 48,
    difficulty: "Medium",
    category: "Advanced",
    question: "SQL mein Gaps and Islands problem kya hota hai?",
    answer: `**Gaps and Islands** — Consecutive sequences mein gaps aur islands dhundhna.

**Island Problem: Consecutive dates dhundhna:**
\`\`\`sql
-- Login dates: 1,2,3, 5,6, 8 → Islands: [1,2,3], [5,6], [8]
WITH DateGroups AS (
  SELECT
    login_date,
    login_date - ROW_NUMBER() OVER (ORDER BY login_date) AS grp
  FROM UserLogins
)
SELECT
  MIN(login_date) AS island_start,
  MAX(login_date) AS island_end,
  COUNT(*) AS consecutive_days
FROM DateGroups GROUP BY grp ORDER BY island_start;

-- Output:
-- 2024-01-01 | 2024-01-03 | 3
-- 2024-01-05 | 2024-01-06 | 2
\`\`\`

**Gap Problem: Missing numbers dhundhna:**
\`\`\`sql
SELECT seq + 1 AS gap_start
FROM (
  SELECT id AS seq, LEAD(id) OVER (ORDER BY id) AS next_id
  FROM Orders
) gaps
WHERE next_id - seq > 1;
\`\`\`

**Longest Streak:**
\`\`\`sql
WITH DateGroups AS (
  SELECT login_date,
    login_date - ROW_NUMBER() OVER (ORDER BY login_date) AS grp
  FROM UserLogins
)
SELECT MAX(consecutive_days) AS longest_streak
FROM (
  SELECT grp, COUNT(*) AS consecutive_days
  FROM DateGroups GROUP BY grp
) streaks;
\`\`\`

**Interview Tip**: date - ROW_NUMBER() trick yaad rakho. Same consecutive dates ka result same aata hai.`,
    tags: ["Gaps and Islands", "Consecutive Sequences", "ROW_NUMBER", "Advanced"],
  },
  {
    id: 49,
    difficulty: "Hard",
    category: "Advanced",
    question: "Connection Pooling kya hoti hai? N+1 Query Problem explain karo.",
    answer: `**Connection Pooling** — Database connections ko reuse karna.

**Problem without pooling:**
\`\`\`
Request aai → New DB connection banao → Query run karo → Connection close karo
❌ Connection banane mein 50-200ms lag sakta hai
❌ 1000 simultaneous users = 1000 connections = crash!
\`\`\`

**Connection Pool solution:**
\`\`\`
Startup pe 10-50 connections ready rakho
Request → Available connection lo → Query → Return karo pool mein
✅ No overhead, limited connections
\`\`\`

\`\`\`python
# Django config
DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.postgresql',
        'CONN_MAX_AGE': 600,  # 10 min connection pool
    }
}
\`\`\`

**N+1 Query Problem:**
\`\`\`python
# ❌ N+1 Problem:
employees = Employee.objects.all()  # 1 query
for emp in employees:
    print(emp.department.name)  # N queries! 100 employees = 101 queries!

# ✅ Fix: select_related (JOIN)
employees = Employee.objects.select_related('department').all()
# Sirf 1 query with JOIN!
\`\`\`

\`\`\`sql
-- SQL equivalent:
-- ❌ N+1
SELECT * FROM Employees;
SELECT * FROM Departments WHERE id = 1; -- for each employee

-- ✅ 1 query with JOIN
SELECT e.*, d.dept_name
FROM Employees e
JOIN Departments d ON e.dept_id = d.dept_id;
\`\`\``,
    tags: ["Connection Pooling", "N+1 Problem", "Performance", "ORM", "Advanced"],
  },
  {
    id: 50,
    difficulty: "Hard",
    category: "Interview Scenario",
    question: "Real Interview: E-commerce database design karo aur common queries likhon.",
    answer: `**E-commerce Database Design:**

\`\`\`sql
CREATE TABLE Users (
  user_id INT PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(100) NOT NULL,
  email VARCHAR(150) UNIQUE NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
CREATE TABLE Products (
  product_id INT PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(200) NOT NULL,
  category VARCHAR(100),
  price DECIMAL(10,2) NOT NULL,
  stock_qty INT DEFAULT 0
);
CREATE TABLE Orders (
  order_id INT PRIMARY KEY AUTO_INCREMENT,
  user_id INT NOT NULL,
  total_amount DECIMAL(12,2),
  status ENUM('pending','processing','shipped','delivered','cancelled'),
  order_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (user_id) REFERENCES Users(user_id)
);
CREATE TABLE OrderItems (
  item_id INT PRIMARY KEY AUTO_INCREMENT,
  order_id INT, product_id INT, quantity INT NOT NULL,
  unit_price DECIMAL(10,2) NOT NULL,
  FOREIGN KEY (order_id) REFERENCES Orders(order_id),
  FOREIGN KEY (product_id) REFERENCES Products(product_id)
);
\`\`\`

**Common Interview Queries:**
\`\`\`sql
-- 1. Top 5 bestselling products
SELECT p.name, SUM(oi.quantity) AS total_sold
FROM Products p JOIN OrderItems oi ON p.product_id = oi.product_id
JOIN Orders o ON oi.order_id = o.order_id WHERE o.status = 'delivered'
GROUP BY p.product_id, p.name ORDER BY total_sold DESC LIMIT 5;

-- 2. Customers jo kabhi order nahi kiya
SELECT u.user_id, u.name FROM Users u
LEFT JOIN Orders o ON u.user_id = o.user_id WHERE o.order_id IS NULL;

-- 3. Monthly revenue
SELECT DATE_FORMAT(order_date,'%Y-%m') AS month,
  SUM(total_amount) AS revenue, COUNT(*) AS total_orders
FROM Orders WHERE status != 'cancelled'
GROUP BY month ORDER BY month;

-- 4. Customer lifetime value
SELECT u.name, COUNT(o.order_id) AS orders, SUM(o.total_amount) AS lifetime_value
FROM Users u JOIN Orders o ON u.user_id = o.user_id
GROUP BY u.user_id, u.name ORDER BY lifetime_value DESC;
\`\`\``,
    tags: ["E-commerce", "Database Design", "Real-World", "Interview Scenario"],
  },
  {
    id: 51,
    difficulty: "Medium",
    category: "Interview Scenario",
    question: "Social Media database ke common SQL queries kaunsi hoti hain?",
    answer: `**Social Media Schema:**
\`\`\`sql
Users (user_id, name, username, created_at)
Posts (post_id, user_id, content, likes_count, created_at)
Follows (follower_id, following_id, followed_at)
Likes (user_id, post_id, liked_at)
Comments (comment_id, post_id, user_id, content, created_at)
\`\`\`

**Common Queries:**
\`\`\`sql
-- 1. User ka feed (jo follow karta hoon unki posts)
SELECT p.post_id, u.name, p.content, p.created_at
FROM Posts p JOIN Users u ON p.user_id = u.user_id
WHERE p.user_id IN (
  SELECT following_id FROM Follows WHERE follower_id = 101
)
ORDER BY p.created_at DESC LIMIT 20;

-- 2. Mutual Friends
SELECT u.user_id, u.name FROM Users u
WHERE u.user_id IN (SELECT following_id FROM Follows WHERE follower_id = 101)
AND u.user_id IN (SELECT following_id FROM Follows WHERE follower_id = 202);

-- 3. Trending posts (last 24 hours)
SELECT p.post_id, u.name, COUNT(l.user_id) AS recent_likes
FROM Posts p JOIN Users u ON p.user_id = u.user_id
LEFT JOIN Likes l ON p.post_id = l.post_id
  AND l.liked_at >= NOW() - INTERVAL 24 HOUR
GROUP BY p.post_id, u.name ORDER BY recent_likes DESC LIMIT 10;

-- 4. Followers jo follow back nahi kiya
SELECT u.name FROM Follows f JOIN Users u ON f.follower_id = u.user_id
WHERE f.following_id = 101
AND f.follower_id NOT IN (SELECT following_id FROM Follows WHERE follower_id = 101);
\`\`\``,
    tags: ["Social Media", "Real-World", "Interview Scenario", "Complex Joins"],
  },
  {
    id: 52,
    difficulty: "Medium",
    category: "Advanced",
    question: "Manager hierarchy related SQL queries kaise likhte hain?",
    answer: `**Employee-Manager Hierarchy — Classic Questions:**

**Q1: Har employee ke saath manager naam:**
\`\`\`sql
SELECT e.emp_id, e.name AS employee,
  COALESCE(m.name, 'No Manager (CEO)') AS manager, e.salary
FROM Employees e
LEFT JOIN Employees m ON e.manager_id = m.emp_id
ORDER BY e.emp_id;
\`\`\`

**Q2: Managers jinke under 3+ employees:**
\`\`\`sql
SELECT m.name AS manager, COUNT(e.emp_id) AS team_size
FROM Employees m JOIN Employees e ON e.manager_id = m.emp_id
GROUP BY m.emp_id, m.name HAVING COUNT(e.emp_id) >= 3
ORDER BY team_size DESC;
\`\`\`

**Q3: Employees jinki salary manager se zyada:**
\`\`\`sql
SELECT e.name AS employee, e.salary,
  m.name AS manager, m.salary AS mgr_salary
FROM Employees e JOIN Employees m ON e.manager_id = m.emp_id
WHERE e.salary > m.salary;
\`\`\`

**Q4: Recursive hierarchy — complete org tree:**
\`\`\`sql
WITH RECURSIVE OrgChart AS (
  SELECT emp_id, name, manager_id, 0 AS depth, name AS path
  FROM Employees WHERE manager_id IS NULL

  UNION ALL

  SELECT e.emp_id, e.name, e.manager_id, oc.depth + 1,
    CONCAT(oc.path, ' → ', e.name)
  FROM Employees e JOIN OrgChart oc ON e.manager_id = oc.emp_id
)
SELECT emp_id, name, depth, path FROM OrgChart ORDER BY path;
\`\`\``,
    tags: ["Self JOIN", "Manager Hierarchy", "Recursive CTE", "Interview Classic"],
  },
  {
    id: 53,
    difficulty: "Easy",
    category: "Basics",
    question: "ORDER BY advanced usage — Multiple columns, NULL handling, Custom sort.",
    answer: `**Basic ORDER BY:**
\`\`\`sql
SELECT * FROM Employees ORDER BY salary;           -- ASC (default)
SELECT * FROM Employees ORDER BY salary DESC;       -- Descending
SELECT * FROM Employees ORDER BY dept_id ASC, salary DESC;  -- Mixed
\`\`\`

**NULL values sorting:**
\`\`\`sql
-- NULLs ko end mein karo (MySQL):
SELECT name, salary FROM Employees
ORDER BY salary IS NULL, salary;  -- False(non-null) pehle, True(NULL) baad

-- PostgreSQL:
SELECT name, salary FROM Employees ORDER BY salary NULLS LAST;
SELECT name, salary FROM Employees ORDER BY salary NULLS FIRST;
\`\`\`

**Custom sort order:**
\`\`\`sql
SELECT * FROM Orders
ORDER BY
  CASE status
    WHEN 'urgent' THEN 1 WHEN 'processing' THEN 2
    WHEN 'pending' THEN 3 WHEN 'delivered' THEN 4
    ELSE 5
  END;
\`\`\`

**FIELD() function — MySQL:**
\`\`\`sql
SELECT * FROM Employees ORDER BY FIELD(dept_id, 5, 3, 1, 2, 4);
\`\`\`

**Random order:**
\`\`\`sql
SELECT * FROM Products ORDER BY RAND() LIMIT 5;  -- 5 random
\`\`\``,
    tags: ["ORDER BY", "NULL handling", "Custom Sort", "CASE", "Basics"],
  },
  {
    id: 54,
    difficulty: "Hard",
    category: "Interview Scenario",
    question: "Interview mein poochhhe jaane waale tricky SQL questions.",
    answer: `**Tricky SQL Questions Collection:**

**Q1: Table mein khud se JOIN (without SELF JOIN keyword)?**
\`\`\`sql
SELECT e.name, mgr.name AS manager
FROM Employees e, Employees mgr
WHERE e.manager_id = mgr.emp_id;
\`\`\`

**Q2: Empty table copy with structure?**
\`\`\`sql
CREATE TABLE Employees_Backup AS SELECT * FROM Employees WHERE 1=0;
-- WHERE 1=0 = no rows, sirf structure copy
\`\`\`

**Q3: Ek query mein multiple tables update?**
\`\`\`sql
UPDATE Employees e JOIN Departments d ON e.dept_id = d.dept_id
SET e.city = d.location, e.updated_at = NOW()
WHERE d.dept_name = 'IT';
\`\`\`

**Q4: Alternate rows (odd/even)?**
\`\`\`sql
-- Odd rows
SELECT * FROM (SELECT *, ROW_NUMBER() OVER() AS rn FROM Employees) t
WHERE MOD(rn, 2) = 1;
-- Even rows — MOD(rn, 2) = 0
\`\`\`

**Q5: Last inserted row ID?**
\`\`\`sql
INSERT INTO Employees (name, salary) VALUES ('Rahul', 50000);
SELECT LAST_INSERT_ID();   -- MySQL
SELECT @@IDENTITY;          -- SQL Server
SELECT lastval();           -- PostgreSQL
\`\`\`

**Q6: Rows ko columns mein bina PIVOT?**
\`\`\`sql
SELECT
  MAX(CASE WHEN subject='Math' THEN marks END) AS Math,
  MAX(CASE WHEN subject='Science' THEN marks END) AS Science
FROM StudentMarks GROUP BY student_id;
\`\`\``,
    tags: ["Tricky Questions", "Interview Tips", "Advanced", "Misc"],
  },
  {
    id: 55,
    difficulty: "Medium",
    category: "Interview Scenario",
    question: "Time-series data analysis aur Year-over-Year comparison kaise karte hain?",
    answer: `**Month-over-Month Growth:**
\`\`\`sql
WITH MonthlyRevenue AS (
  SELECT DATE_FORMAT(order_date, '%Y-%m') AS month_year,
    SUM(amount) AS revenue
  FROM Orders WHERE status = 'delivered' GROUP BY month_year
)
SELECT month_year, revenue,
  LAG(revenue) OVER (ORDER BY month_year) AS prev_month,
  ROUND((revenue - LAG(revenue) OVER (ORDER BY month_year)) * 100.0 /
        LAG(revenue) OVER (ORDER BY month_year), 2) AS pct_change
FROM MonthlyRevenue ORDER BY month_year;
\`\`\`

**Year-over-Year Comparison:**
\`\`\`sql
SELECT MONTH(order_date) AS month_num, MONTHNAME(order_date) AS month_name,
  SUM(CASE WHEN YEAR(order_date) = 2023 THEN amount ELSE 0 END) AS revenue_2023,
  SUM(CASE WHEN YEAR(order_date) = 2024 THEN amount ELSE 0 END) AS revenue_2024,
  SUM(CASE WHEN YEAR(order_date)=2024 THEN amount ELSE 0 END) -
  SUM(CASE WHEN YEAR(order_date)=2023 THEN amount ELSE 0 END) AS yoy_growth
FROM Orders WHERE YEAR(order_date) IN (2023, 2024)
GROUP BY month_num, month_name ORDER BY month_num;
\`\`\`

**Cohort Analysis (User Retention):**
\`\`\`sql
WITH UserCohort AS (
  SELECT user_id, DATE_FORMAT(MIN(order_date), '%Y-%m') AS cohort_month
  FROM Orders GROUP BY user_id
)
SELECT cohort_month,
  COUNT(DISTINCT CASE WHEN PERIOD_DIFF(DATE_FORMAT(o.order_date,'%Y%m'),
    DATE_FORMAT(uc.cohort_month,'%Y%m')) = 0 THEN o.user_id END) AS month_0,
  COUNT(DISTINCT CASE WHEN PERIOD_DIFF(DATE_FORMAT(o.order_date,'%Y%m'),
    DATE_FORMAT(uc.cohort_month,'%Y%m')) = 1 THEN o.user_id END) AS month_1
FROM Orders o JOIN UserCohort uc ON o.user_id = uc.user_id
GROUP BY cohort_month ORDER BY cohort_month;
\`\`\``,
    tags: ["Time Series", "Year-over-Year", "Cohort Analysis", "LAG", "Advanced Analytics"],
  },
  {
    id: 56,
    difficulty: "Easy",
    category: "Basics",
    question: "COALESCE, NULLIF, IIF aur NVL functions explain karo.",
    answer: `**COALESCE** — Pehli non-NULL value return karta hai:
\`\`\`sql
SELECT COALESCE(NULL, NULL, 'Hello', 'World');  -- 'Hello'
SELECT COALESCE(NULL, 0);  -- 0

-- Multiple fallback
SELECT name, COALESCE(mobile, landline, work_phone, 'No Contact') AS contact
FROM Users;

-- NULL salary ko 0 se replace
SELECT name, COALESCE(salary, 0) AS salary FROM Employees;
\`\`\`

**NULLIF** — Do values equal hoon toh NULL, else first value:
\`\`\`sql
SELECT NULLIF(100, 100);   -- NULL
SELECT NULLIF(100, 200);   -- 100

-- Division by zero avoid!
SELECT total_sales / NULLIF(total_customers, 0) AS avg_sale;
\`\`\`

**IIF (SQL Server) / IF (MySQL):**
\`\`\`sql
-- SQL Server
SELECT name, IIF(salary > 50000, 'High', 'Low') AS bracket FROM Employees;

-- MySQL
SELECT name, IF(salary > 50000, 'High', 'Low') AS bracket FROM Employees;
\`\`\`

**NVL (Oracle) / IFNULL (MySQL):**
\`\`\`sql
SELECT NVL(salary, 0) FROM Employees;    -- Oracle
SELECT IFNULL(salary, 0) FROM Employees; -- MySQL

-- Comparison:
-- COALESCE: Standard SQL, multiple args ✅ Recommended
-- IFNULL: MySQL only, 2 args
-- NVL: Oracle only, 2 args
\`\`\``,
    tags: ["COALESCE", "NULLIF", "IIF", "IFNULL", "NULL Handling", "Basics"],
  },
  {
    id: 57,
    difficulty: "Medium",
    category: "Advanced",
    question: "Database Backup strategies aur Point-in-Time Recovery kya hoti hai?",
    answer: `**Database Backup Types:**

**1. Full Backup:**
\`\`\`sql
mysqldump -u root -p database_name > backup_full.sql  -- MySQL
pg_dump database_name > backup_full.sql               -- PostgreSQL
\`\`\`

**2. Incremental Backup** — Pichle backup ke baad ke sirf changes.
\`\`\`
Full: Monday (100GB) + Incremental Tuesday (5GB) + Wednesday (3GB)
Restore: Monday + Tuesday + Wednesday apply karo
\`\`\`

**3. Differential Backup** — Last FULL ke baad ke saare changes.
\`\`\`
Full: Monday + Differential Wednesday (8GB)
Restore: Monday + Wednesday sirf
\`\`\`

**Binary Logging (MySQL) — Point-in-Time Recovery:**
\`\`\`sql
SHOW BINARY LOGS;
SHOW BINLOG EVENTS IN 'mysql-bin.000001' LIMIT 20;

-- Accident ke pehle restore karo:
mysqlbinlog --start-datetime="2024-01-15 10:00:00" \
            --stop-datetime="2024-01-15 14:29:00" \
            mysql-bin.000001 | mysql -u root -p

-- Scenario:
-- 2:30 PM: DELETE FROM Users (galti!)
-- Fix: Full backup restore + binary logs apply till 2:29 PM
\`\`\`

**Best Practices:**
- ✅ Daily full backup + hourly binary logs
- ✅ Offsite backup (different location)
- ✅ Regularly RESTORE test karo
- ✅ Encryption on backups
- ✅ 90-day retention policy`,
    tags: ["Backup", "Recovery", "Binary Log", "Point-in-Time", "Advanced"],
  },
  {
    id: 58,
    difficulty: "Easy",
    category: "Basics",
    question: "INSERT ke different ways kya hain? UPSERT kya hota hai?",
    answer: `**Basic INSERT:**
\`\`\`sql
-- Single row
INSERT INTO Students (student_id, name, age) VALUES (1, 'Rahul', 20);

-- Multiple rows (Bulk Insert — faster!)
INSERT INTO Students (student_id, name, age) VALUES
  (2, 'Priya', 21), (3, 'Amit', 19), (4, 'Neha', 22);
\`\`\`

**INSERT from SELECT:**
\`\`\`sql
INSERT INTO EmployeeArchive (emp_id, name, salary, archived_at)
SELECT emp_id, name, salary, NOW() FROM Employees WHERE status = 'inactive';
\`\`\`

**UPSERT — Insert ya Update:**
\`\`\`sql
-- MySQL: ON DUPLICATE KEY UPDATE
INSERT INTO Products (product_id, name, stock)
VALUES (101, 'Laptop', 50)
ON DUPLICATE KEY UPDATE
  stock = stock + VALUES(stock), updated_at = NOW();

-- PostgreSQL: ON CONFLICT
INSERT INTO Products (product_id, name, stock)
VALUES (101, 'Laptop', 50)
ON CONFLICT (product_id) DO UPDATE SET
  stock = Products.stock + EXCLUDED.stock,
  updated_at = NOW();

-- SQL Server: MERGE
MERGE Products AS target
USING (VALUES (101, 'Laptop', 50)) AS source(product_id, name, stock)
ON target.product_id = source.product_id
WHEN MATCHED THEN UPDATE SET stock = target.stock + source.stock
WHEN NOT MATCHED THEN INSERT (product_id, name, stock)
  VALUES (source.product_id, source.name, source.stock);
\`\`\`

**INSERT IGNORE:**
\`\`\`sql
INSERT IGNORE INTO Students (student_id, name) VALUES (1, 'Test');
-- Duplicate → silently skip, no error
\`\`\``,
    tags: ["INSERT", "UPSERT", "Bulk Insert", "ON DUPLICATE KEY", "MERGE", "Basics"],
  },
  {
    id: 59,
    difficulty: "Hard",
    category: "Advanced",
    question: "SQL Anti-patterns kya hote hain? Common mistakes jo avoid karni chahiye.",
    answer: `**SQL Anti-patterns — Common Mistakes:**

**1. SELECT * use karna:**
\`\`\`sql
-- ❌ Bad: unnecessary data, index not used
SELECT * FROM Employees;
-- ✅ Good
SELECT emp_id, name, email FROM Employees;
\`\`\`

**2. WHERE mein function (index break):**
\`\`\`sql
-- ❌ Bad: Full table scan!
SELECT * FROM Orders WHERE YEAR(order_date) = 2024;
SELECT * FROM Users WHERE UPPER(email) = 'RAHUL@GMAIL.COM';
-- ✅ Good
SELECT * FROM Orders WHERE order_date >= '2024-01-01' AND order_date < '2025-01-01';
\`\`\`

**3. NOT IN with NULL (Silent bug):**
\`\`\`sql
-- ❌ DANGEROUS: B mein NULL ho toh nothing returns!
SELECT * FROM A WHERE id NOT IN (SELECT id FROM B);
-- ✅ Safe
SELECT * FROM A WHERE NOT EXISTS (SELECT 1 FROM B WHERE B.id = A.id);
\`\`\`

**4. Missing Index on JOIN columns:**
\`\`\`sql
-- ✅ Add index
CREATE INDEX idx_order_user ON Orders(user_id);
\`\`\`

**5. DISTINCT overuse:**
\`\`\`sql
-- ❌ Often indicates bad JOIN
SELECT DISTINCT u.name FROM Users u JOIN Orders o ON u.user_id = o.user_id;
-- ✅ Fix with GROUP BY
SELECT u.name, COUNT(o.order_id) AS order_count
FROM Users u LEFT JOIN Orders o ON u.user_id = o.user_id
GROUP BY u.user_id, u.name;
\`\`\`

**6. N+1 Queries in loops (Use JOIN instead)**

**7. No LIMIT on large tables:**
\`\`\`sql
SELECT * FROM Logs;  -- ❌ Millions of rows
SELECT * FROM Logs LIMIT 100;  -- ✅
\`\`\``,
    tags: ["Anti-patterns", "Performance", "Best Practices", "Common Mistakes"],
  },
  {
    id: 60,
    difficulty: "Medium",
    category: "Interview Scenario",
    question: "SQL mein Data Cleaning queries kaise likhte hain?",
    answer: `**Data Cleaning Common Tasks:**

**1. Whitespace remove:**
\`\`\`sql
UPDATE Users SET name = TRIM(name) WHERE name != TRIM(name);
UPDATE Users SET email = LOWER(TRIM(email));  -- Standardize
\`\`\`

**2. Invalid data fix:**
\`\`\`sql
UPDATE Products SET price = ABS(price) WHERE price < 0;
SELECT * FROM Orders WHERE order_date > NOW();  -- Future orders?
SELECT * FROM Users WHERE dob > CURDATE() OR dob < '1900-01-01';
\`\`\`

**3. NULL handling:**
\`\`\`sql
UPDATE Employees SET city = 'Unknown' WHERE city IS NULL;
UPDATE Products SET discount = 0 WHERE discount IS NULL;

-- Orphan records
SELECT oi.* FROM OrderItems oi
LEFT JOIN Orders o ON oi.order_id = o.order_id
WHERE o.order_id IS NULL;
\`\`\`

**4. Data standardization:**
\`\`\`sql
UPDATE Users SET gender =
  CASE UPPER(TRIM(gender))
    WHEN 'M' THEN 'Male' WHEN 'F' THEN 'Female'
    WHEN 'MALE' THEN 'Male' WHEN 'FEMALE' THEN 'Female'
    ELSE 'Other'
  END;

UPDATE Users SET city = 'Mumbai' WHERE city IN ('Bombay', 'mumbai', 'MUMBAI');
\`\`\`

**5. Data Quality Audit:**
\`\`\`sql
SELECT
  COUNT(*) AS total,
  SUM(CASE WHEN email IS NULL THEN 1 ELSE 0 END) AS null_emails,
  SUM(CASE WHEN email NOT LIKE '%@%.%' THEN 1 ELSE 0 END) AS invalid_emails,
  SUM(CASE WHEN age < 0 OR age > 150 THEN 1 ELSE 0 END) AS invalid_age
FROM Users;
\`\`\``,
    tags: ["Data Cleaning", "TRIM", "NULL", "Standardization", "Data Quality"],
  },

  // ==================== 20 BASIC SQL QUERIES ====================

  {
    id: 61,
    difficulty: "Easy",
    category: "Basic Queries",
    question: "Basic Query 1: SELECT — Saari rows aur columns select karna.",
    answer: `**Sabse basic SELECT queries:**

\`\`\`sql
-- Saari rows aur columns
SELECT * FROM Employees;

-- Specific columns only
SELECT emp_id, name, salary FROM Employees;

-- Alias use karo
SELECT emp_id AS "Employee ID", name AS "Full Name", salary AS "Monthly Salary"
FROM Employees;

-- DISTINCT — duplicate values hata do
SELECT DISTINCT city FROM Employees;
SELECT DISTINCT dept_id, city FROM Employees;

-- LIMIT — limited rows
SELECT * FROM Employees LIMIT 10;          -- MySQL/PostgreSQL
SELECT TOP 10 * FROM Employees;            -- SQL Server

-- Expressions in SELECT
SELECT
  name, salary,
  salary * 12 AS annual_salary,
  salary * 0.10 AS bonus,
  CONCAT(first_name, ' ', last_name) AS full_name,
  UPPER(name) AS name_upper
FROM Employees;

-- Literal values
SELECT 'Hello World';
SELECT NOW();
SELECT 'India' AS country;
\`\`\`

**Interview Tip**: \`SELECT *\` avoid karo production mein. Specific columns better practice hai.`,
    tags: ["SELECT", "Basic Query", "Beginner", "Alias", "DISTINCT"],
  },
  {
    id: 62,
    difficulty: "Easy",
    category: "Basic Queries",
    question: "Basic Query 2: WHERE clause se data filter karna.",
    answer: `**WHERE Clause — Rows filter karna:**

\`\`\`sql
-- Single condition
SELECT * FROM Employees WHERE salary > 50000;
SELECT * FROM Employees WHERE city = 'Mumbai';
SELECT * FROM Employees WHERE dept_id != 3;

-- Multiple conditions
SELECT * FROM Employees WHERE salary > 40000 AND dept_id = 2;
SELECT * FROM Employees WHERE city = 'Mumbai' OR city = 'Delhi';
SELECT * FROM Employees WHERE NOT city = 'Mumbai';

-- Combine AND, OR with parentheses!
SELECT * FROM Employees
WHERE (city = 'Mumbai' OR city = 'Delhi') AND salary > 50000;

-- NULL check
SELECT * FROM Employees WHERE manager_id IS NULL;
SELECT * FROM Employees WHERE phone IS NOT NULL;

-- Multiple values
SELECT * FROM Employees WHERE city IN ('Mumbai', 'Delhi', 'Pune');
SELECT * FROM Employees WHERE dept_id NOT IN (1, 2, 3);

-- Range
SELECT * FROM Employees WHERE salary BETWEEN 30000 AND 60000;
SELECT * FROM Orders WHERE order_date BETWEEN '2024-01-01' AND '2024-12-31';

-- Pattern
SELECT * FROM Employees WHERE name LIKE 'Ra%';
SELECT * FROM Employees WHERE email LIKE '%@gmail.com';
\`\`\``,
    tags: ["WHERE", "Filter", "AND", "OR", "Basic Query", "Beginner"],
  },
  {
    id: 63,
    difficulty: "Easy",
    category: "Basic Queries",
    question: "Basic Query 3: Data sort karna ORDER BY se.",
    answer: `**ORDER BY — Data sort karna:**

\`\`\`sql
-- Ascending order (default)
SELECT * FROM Employees ORDER BY name;
SELECT * FROM Employees ORDER BY salary ASC;

-- Descending order
SELECT * FROM Employees ORDER BY salary DESC;

-- Multiple columns
SELECT * FROM Employees ORDER BY dept_id ASC, salary DESC;

-- Dates sort
SELECT * FROM Orders ORDER BY order_date DESC;  -- Latest first

-- Top 5 highest paid
SELECT name, salary FROM Employees ORDER BY salary DESC LIMIT 5;

-- Bottom 3 performers
SELECT name, score FROM Students ORDER BY score ASC LIMIT 3;

-- Top 10 recent orders
SELECT order_id, amount, order_date
FROM Orders ORDER BY order_date DESC LIMIT 10;
\`\`\`

**Real Example:**
\`\`\`sql
-- Student results — highest marks first, alphabetically if tie
SELECT student_id, name, subject, marks
FROM Results ORDER BY marks DESC, name ASC;
\`\`\``,
    tags: ["ORDER BY", "Sort", "ASC", "DESC", "Basic Query", "Beginner"],
  },
  {
    id: 64,
    difficulty: "Easy",
    category: "Basic Queries",
    question: "Basic Query 4: COUNT, SUM, AVG, MAX, MIN — Aggregate functions.",
    answer: `**Aggregate Functions — Summary calculations:**

\`\`\`sql
-- COUNT
SELECT COUNT(*) AS total_employees FROM Employees;
SELECT COUNT(manager_id) AS has_manager FROM Employees;  -- NULL skip
SELECT COUNT(DISTINCT city) AS unique_cities FROM Employees;

-- SUM
SELECT SUM(salary) AS total_salary FROM Employees;
SELECT SUM(amount) AS total_revenue FROM Orders WHERE status = 'delivered';

-- AVG
SELECT AVG(salary) AS average_salary FROM Employees;
SELECT ROUND(AVG(price), 2) AS avg_price FROM Products;

-- MAX / MIN
SELECT MAX(salary) AS highest FROM Employees;
SELECT MIN(salary) AS lowest FROM Employees;
SELECT MAX(order_date) AS latest_order FROM Orders;

-- Combine multiple
SELECT
  COUNT(*) AS total,
  SUM(salary) AS total_salary,
  ROUND(AVG(salary), 0) AS avg_salary,
  MAX(salary) AS max_salary,
  MIN(salary) AS min_salary
FROM Employees;
\`\`\`

**Monthly revenue stats:**
\`\`\`sql
SELECT DATE_FORMAT(order_date, '%Y-%m') AS month,
  COUNT(*) AS orders,
  SUM(amount) AS revenue,
  AVG(amount) AS avg_order,
  MAX(amount) AS biggest_order
FROM Orders GROUP BY month ORDER BY month;
\`\`\``,
    tags: ["COUNT", "SUM", "AVG", "MAX", "MIN", "Aggregate", "Basic Query", "Beginner"],
  },
  {
    id: 65,
    difficulty: "Easy",
    category: "Basic Queries",
    question: "Basic Query 5: GROUP BY se data group karna aur HAVING se groups filter karna.",
    answer: `**GROUP BY:**
\`\`\`sql
-- Har department mein kitne employees
SELECT dept_id, COUNT(*) AS employee_count
FROM Employees GROUP BY dept_id;

-- Har city mein average salary
SELECT city, ROUND(AVG(salary), 0) AS avg_salary
FROM Employees GROUP BY city ORDER BY avg_salary DESC;

-- Multiple column grouping
SELECT dept_id, city, COUNT(*) AS count
FROM Employees GROUP BY dept_id, city;
\`\`\`

**HAVING — Groups ko filter karo:**
\`\`\`sql
-- Sirf wo departments jahan 5+ employees hain
SELECT dept_id, COUNT(*) AS emp_count
FROM Employees GROUP BY dept_id HAVING COUNT(*) >= 5;

-- Average salary 50000 se zyada
SELECT dept_id, AVG(salary) AS avg_sal
FROM Employees GROUP BY dept_id
HAVING AVG(salary) > 50000 ORDER BY avg_sal DESC;

-- Combined WHERE + GROUP BY + HAVING
SELECT dept_id, COUNT(*) AS active_count, AVG(salary) AS avg_sal
FROM Employees
WHERE status = 'Active'       -- pehle filter
GROUP BY dept_id              -- phir group
HAVING COUNT(*) >= 3          -- phir group filter
ORDER BY avg_sal DESC;
\`\`\`

**Real Example:**
\`\`\`sql
SELECT category, COUNT(*) AS products, AVG(price) AS avg_price
FROM Products WHERE is_available = 1
GROUP BY category HAVING COUNT(*) >= 10 AND AVG(price) > 500
ORDER BY avg_price DESC;
\`\`\``,
    tags: ["GROUP BY", "HAVING", "Aggregate", "Basic Query", "Beginner"],
  },
  {
    id: 66,
    difficulty: "Easy",
    category: "Basic Queries",
    question: "Basic Query 6: INNER JOIN — Do tables ko join karna.",
    answer: `**INNER JOIN — Do tables se matching data:**

\`\`\`sql
-- Employees aur unka department naam
SELECT e.emp_id, e.name AS employee_name, e.salary, d.dept_name AS department
FROM Employees e
INNER JOIN Departments d ON e.dept_id = d.dept_id;

-- INNER keyword optional
SELECT e.name, d.dept_name
FROM Employees e JOIN Departments d ON e.dept_id = d.dept_id;

-- JOIN with WHERE
SELECT e.name, d.dept_name, e.salary
FROM Employees e JOIN Departments d ON e.dept_id = d.dept_id
WHERE d.location = 'Mumbai' AND e.salary > 40000;

-- 3 tables join
SELECT c.customer_name, o.order_date, p.product_name, oi.quantity
FROM Orders o
JOIN Customers c ON o.customer_id = c.customer_id
JOIN OrderItems oi ON o.order_id = oi.order_id
JOIN Products p ON oi.product_id = p.product_id;
\`\`\`

**Real Example:**
\`\`\`sql
-- Students aur unke course names
SELECT s.name AS student, c.course_name, e.grade
FROM Students s
JOIN Enrollments e ON s.student_id = e.student_id
JOIN Courses c ON e.course_id = c.course_id
ORDER BY s.name, c.course_name;
\`\`\`

**Interview Tip**: Hamesha table aliases use karo — readability badh jaati hai.`,
    tags: ["INNER JOIN", "JOIN", "Two Tables", "Basic Query", "Beginner"],
  },
  {
    id: 67,
    difficulty: "Easy",
    category: "Basic Queries",
    question: "Basic Query 7: INSERT, UPDATE, DELETE — Data modify karna.",
    answer: `**INSERT:**
\`\`\`sql
INSERT INTO Students (student_id, name, age) VALUES (101, 'Rahul Kumar', 20);

-- Multiple rows
INSERT INTO Students (student_id, name, age) VALUES
  (102, 'Priya Singh', 21), (103, 'Amit Sharma', 19);
\`\`\`

**UPDATE:**
\`\`\`sql
UPDATE Students SET marks = 90.0 WHERE student_id = 101;

-- Multiple columns
UPDATE Students SET marks = 95.0, city = 'Delhi', updated_at = NOW()
WHERE student_id = 102;

-- Calculation
UPDATE Employees SET salary = salary * 1.10 WHERE dept_id = 3;  -- 10% hike

-- ⚠️ ALWAYS use WHERE! Warna saari rows update!
\`\`\`

**DELETE:**
\`\`\`sql
DELETE FROM Students WHERE student_id = 101;
DELETE FROM Orders WHERE status = 'cancelled' AND order_date < '2023-01-01';

-- Related data delete (child pehle, parent baad)
DELETE FROM OrderItems WHERE order_id = 500;
DELETE FROM Orders WHERE order_id = 500;

-- ⚠️ ALWAYS use WHERE! Warna saara data delete!

-- Safe approach: pehle SELECT, phir DELETE
SELECT * FROM Students WHERE student_id = 101;  -- check
DELETE FROM Students WHERE student_id = 101;    -- then delete
\`\`\``,
    tags: ["INSERT", "UPDATE", "DELETE", "DML", "Basic Query", "Beginner"],
  },
  {
    id: 68,
    difficulty: "Easy",
    category: "Basic Queries",
    question: "Basic Query 8: Table create, alter, drop karna — DDL commands.",
    answer: `**CREATE TABLE:**
\`\`\`sql
CREATE TABLE Students (
  student_id   INT PRIMARY KEY AUTO_INCREMENT,
  name         VARCHAR(100) NOT NULL,
  email        VARCHAR(150) UNIQUE,
  age          INT CHECK (age >= 0 AND age <= 150),
  city         VARCHAR(50) DEFAULT 'Unknown',
  marks        DECIMAL(5,2),
  enrolled_at  TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  is_active    BOOLEAN DEFAULT TRUE
);
\`\`\`

**ALTER TABLE:**
\`\`\`sql
-- Column add
ALTER TABLE Students ADD COLUMN phone VARCHAR(15);
ALTER TABLE Students ADD COLUMN grade CHAR(2) AFTER marks;

-- Column modify
ALTER TABLE Students MODIFY COLUMN name VARCHAR(200);
ALTER TABLE Students CHANGE COLUMN city address VARCHAR(200);

-- Column delete
ALTER TABLE Students DROP COLUMN phone;

-- Constraint add/drop
ALTER TABLE Students ADD CONSTRAINT chk_age CHECK (age >= 18);
ALTER TABLE Students DROP CONSTRAINT chk_age;
\`\`\`

**RENAME TABLE:**
\`\`\`sql
RENAME TABLE Students TO Learners;  -- MySQL
ALTER TABLE Students RENAME TO Learners;  -- PostgreSQL
\`\`\`

**DROP / TRUNCATE:**
\`\`\`sql
DROP TABLE IF EXISTS Students;    -- Permanent delete
TRUNCATE TABLE Students;          -- Fast data delete, structure raho
\`\`\`

**CREATE TABLE AS SELECT:**
\`\`\`sql
CREATE TABLE HighScorers AS SELECT * FROM Students WHERE marks > 90;
-- Empty copy: WHERE 1=0
CREATE TABLE Students_Backup AS SELECT * FROM Students WHERE 1=0;
\`\`\``,
    tags: ["CREATE TABLE", "ALTER TABLE", "DROP TABLE", "DDL", "Basic Query", "Beginner"],
  },
  {
    id: 69,
    difficulty: "Easy",
    category: "Basic Queries",
    question: "Basic Query 9: String operations — name, email data clean karna.",
    answer: `**String Operations — Real World Use:**

\`\`\`sql
-- Full name split
SELECT
  SUBSTRING_INDEX(full_name, ' ', 1) AS first_name,
  SUBSTRING_INDEX(full_name, ' ', -1) AS last_name
FROM Employees;

-- Email domain nikalna
SELECT email, SUBSTRING(email, LOCATE('@', email) + 1) AS domain FROM Users;
-- 'rahul@gmail.com' → 'gmail.com'

-- Proper Case
SELECT CONCAT(UPPER(LEFT(name,1)), LOWER(SUBSTRING(name,2))) AS proper_case
FROM Users;
-- 'rAHUL' → 'Rahul'

-- Case-insensitive search
SELECT * FROM Products WHERE LOWER(name) LIKE '%laptop%';

-- Clean whitespace
SELECT TRIM(name), LENGTH(name), LENGTH(TRIM(name)) FROM Users;

-- Phone number format
SELECT CONCAT('+91-', SUBSTRING(phone,1,5), '-', SUBSTRING(phone,6)) AS formatted
FROM Users WHERE LENGTH(phone) = 10;

-- Count @ in email (should be 1)
SELECT name, LENGTH(email) - LENGTH(REPLACE(email,'@','')) AS at_count FROM Users;

-- Pad ID
SELECT LPAD(student_id, 5, '0') AS formatted_id FROM Students;
-- 42 → '00042'
\`\`\``,
    tags: ["String Operations", "SUBSTRING", "LIKE", "TRIM", "Basic Query", "Beginner"],
  },
  {
    id: 70,
    difficulty: "Easy",
    category: "Basic Queries",
    question: "Basic Query 10: Date operations — age calculate, date range, format.",
    answer: `**Date Operations:**

\`\`\`sql
-- Current date/time
SELECT NOW(), CURDATE(), CURTIME();

-- Age calculate
SELECT name, dob, TIMESTAMPDIFF(YEAR, dob, CURDATE()) AS age FROM Users;

-- Date ranges
SELECT * FROM Orders WHERE order_date >= DATE_SUB(NOW(), INTERVAL 7 DAY);   -- Last 7 days
SELECT * FROM Orders WHERE order_date >= DATE_SUB(NOW(), INTERVAL 1 MONTH); -- Last 30 days

-- Current month
SELECT * FROM Orders
WHERE MONTH(order_date) = MONTH(NOW()) AND YEAR(order_date) = YEAR(NOW());

-- Date format
SELECT order_id,
  DATE_FORMAT(order_date, '%d %M %Y') AS formatted,  -- '15 January 2024'
  DATE_FORMAT(order_date, '%d/%m/%Y') AS indian       -- '15/01/2024'
FROM Orders;

-- Days employed
SELECT name, hire_date,
  DATEDIFF(CURDATE(), hire_date) AS days_employed,
  FLOOR(DATEDIFF(CURDATE(), hire_date) / 365) AS years
FROM Employees;

-- Date add/subtract
SELECT order_date,
  DATE_ADD(order_date, INTERVAL 3 DAY) AS expected_delivery,
  DATE_SUB(order_date, INTERVAL 1 MONTH) AS month_before
FROM Orders;

-- Day/Month/Year extract
SELECT DAYNAME(order_date) AS day_name, WEEK(order_date), QUARTER(order_date)
FROM Orders;
\`\`\``,
    tags: ["Date Functions", "AGE", "DATE_FORMAT", "DATEDIFF", "Basic Query", "Beginner"],
  },
  {
    id: 71,
    difficulty: "Easy",
    category: "Basic Queries",
    question: "Basic Query 11: LEFT JOIN — Optional relationships handle karna.",
    answer: `**LEFT JOIN — Matching na hone pe bhi data dikhao:**

\`\`\`sql
-- Saare employees, department chahiye ya na chahiye
SELECT e.emp_id, e.name, e.salary,
  COALESCE(d.dept_name, 'No Department') AS department
FROM Employees e LEFT JOIN Departments d ON e.dept_id = d.dept_id;

-- Customers jinhoone kabhi order nahi kiya
SELECT c.customer_id, c.name, c.email
FROM Customers c LEFT JOIN Orders o ON c.customer_id = o.customer_id
WHERE o.order_id IS NULL;

-- Products pe koi order nahi
SELECT p.product_id, p.name, COUNT(oi.order_id) AS total_orders
FROM Products p LEFT JOIN OrderItems oi ON p.product_id = oi.product_id
GROUP BY p.product_id, p.name HAVING total_orders = 0;

-- Count with LEFT JOIN (empty dept bhi show)
SELECT d.dept_name, COUNT(e.emp_id) AS employee_count
FROM Departments d LEFT JOIN Employees e ON d.dept_id = e.dept_id
GROUP BY d.dept_id, d.dept_name ORDER BY employee_count DESC;

-- Students aur scores (score na hone pe bhi)
SELECT s.student_id, s.name,
  COALESCE(e.marks, 0) AS marks,
  COALESCE(e.grade, 'Not Evaluated') AS grade
FROM Students s LEFT JOIN Exams e ON s.student_id = e.student_id;
\`\`\`

**Interview Tip**: "Find customers with no orders" = LEFT JOIN + WHERE right_table IS NULL. Very common pattern!`,
    tags: ["LEFT JOIN", "NULL check", "Optional Relationship", "Basic Query", "Beginner"],
  },
  {
    id: 72,
    difficulty: "Easy",
    category: "Basic Queries",
    question: "Basic Query 12: Subquery — Query ke andar query likhna.",
    answer: `**Subqueries — Common Patterns:**

\`\`\`sql
-- Average se zyada salary
SELECT name, salary FROM Employees
WHERE salary > (SELECT AVG(salary) FROM Employees);

-- Sabse zyada salary wala employee
SELECT name, salary FROM Employees
WHERE salary = (SELECT MAX(salary) FROM Employees);

-- Specific department employees
SELECT name FROM Employees
WHERE dept_id IN (SELECT dept_id FROM Departments WHERE location = 'Mumbai');

-- NOT IN subquery
SELECT name FROM Employees
WHERE emp_id NOT IN (
  SELECT manager_id FROM Employees WHERE manager_id IS NOT NULL
);  -- Jo kisi ke manager nahi hain

-- Subquery in SELECT (scalar)
SELECT name, salary,
  (SELECT AVG(salary) FROM Employees) AS company_avg,
  salary - (SELECT AVG(salary) FROM Employees) AS diff_from_avg
FROM Employees;

-- Subquery in FROM (derived table)
SELECT dept_id, avg_salary FROM (
  SELECT dept_id, AVG(salary) AS avg_salary
  FROM Employees GROUP BY dept_id
) dept_averages WHERE avg_salary > 50000;
\`\`\`

**Interview Tip**: Pehle inner query likhke test karo, phir outer mein use karo.`,
    tags: ["Subquery", "IN", "Scalar Subquery", "Derived Table", "Basic Query", "Beginner"],
  },
  {
    id: 73,
    difficulty: "Easy",
    category: "Basic Queries",
    question: "Basic Query 13: CASE statement se conditional columns banana.",
    answer: `**CASE — Conditional Column Values:**

\`\`\`sql
-- Salary level
SELECT name, salary,
  CASE
    WHEN salary < 25000 THEN 'Junior'
    WHEN salary BETWEEN 25000 AND 50000 THEN 'Mid-Level'
    WHEN salary BETWEEN 50001 AND 100000 THEN 'Senior'
    ELSE 'Executive'
  END AS level
FROM Employees;

-- Grade assign
SELECT student_id, name, marks,
  CASE
    WHEN marks >= 90 THEN 'A+'
    WHEN marks >= 80 THEN 'A'
    WHEN marks >= 70 THEN 'B'
    WHEN marks >= 60 THEN 'C'
    WHEN marks >= 50 THEN 'D'
    ELSE 'F'
  END AS grade
FROM Students;

-- Boolean to text
SELECT name, is_active,
  CASE is_active WHEN 1 THEN 'Active' WHEN 0 THEN 'Inactive' ELSE 'Unknown' END AS status
FROM Users;

-- CASE in aggregation
SELECT dept_id,
  COUNT(CASE WHEN salary > 50000 THEN 1 END) AS high_earners,
  AVG(CASE WHEN gender = 'F' THEN salary END) AS avg_female_salary,
  AVG(CASE WHEN gender = 'M' THEN salary END) AS avg_male_salary
FROM Employees GROUP BY dept_id;
\`\`\``,
    tags: ["CASE", "Conditional", "Grade", "Basic Query", "Beginner"],
  },
  {
    id: 74,
    difficulty: "Easy",
    category: "Basic Queries",
    question: "Basic Query 14: UNION — Multiple queries ka result combine karna.",
    answer: `**UNION — Multiple SELECT results combine karo:**

\`\`\`sql
-- UNION — duplicates remove
SELECT emp_id, name, 'Active' AS status FROM ActiveEmployees
UNION
SELECT emp_id, name, 'Inactive' AS status FROM InactiveEmployees;

-- UNION ALL — duplicates rakhna (faster)
SELECT city FROM Employees UNION ALL SELECT city FROM Customers;

-- Different tables ka similar data
SELECT 'Income' AS type, description, amount FROM Income WHERE month = '2024-01'
UNION ALL
SELECT 'Expense' AS type, description, -amount FROM Expenses WHERE month = '2024-01'
ORDER BY type, amount DESC;

-- All transactions
SELECT 'Order' AS type, order_id AS id, amount, order_date AS txn_date
FROM Orders
UNION ALL
SELECT 'Refund' AS type, refund_id, -amount, refund_date
FROM Refunds
ORDER BY txn_date DESC;
\`\`\`

**Rules yaad rakho:**
\`\`\`
1. Same number of columns in both SELECT
2. Compatible data types
3. ORDER BY sirf end mein ek baar
4. UNION = no duplicates (slower)
5. UNION ALL = with duplicates (faster)
\`\`\``,
    tags: ["UNION", "UNION ALL", "Combine Queries", "Basic Query", "Beginner"],
  },
  {
    id: 75,
    difficulty: "Easy",
    category: "Basic Queries",
    question: "Basic Query 15: NULL handle karna — COALESCE, IFNULL, IS NULL patterns.",
    answer: `**NULL Handling — Common Patterns:**

\`\`\`sql
-- NULL check
SELECT * FROM Employees WHERE manager_id IS NULL;
SELECT * FROM Employees WHERE manager_id IS NOT NULL;

-- NULL ko default value se replace
SELECT name, COALESCE(phone, 'Not Provided') AS phone FROM Users;
SELECT name, IFNULL(salary, 0) AS salary FROM Employees;

-- Multiple fallback
SELECT name, COALESCE(mobile, landline, work_phone, 'No Contact') AS contact FROM Users;

-- NULL in calculations (NULL + number = NULL!)
SELECT name, salary,
  salary + COALESCE(bonus, 0) AS total_compensation FROM Employees;

-- NULL in aggregations
SELECT
  COUNT(*) AS total_rows,
  COUNT(phone) AS has_phone,           -- NULL skip
  COUNT(*) - COUNT(phone) AS no_phone,
  AVG(salary) AS avg_salary            -- NULL values skip
FROM Employees;

-- Division by zero
SELECT total_sales / NULLIF(num_orders, 0) AS avg_order FROM Sales;

-- Empty string vs NULL
SELECT * FROM Users WHERE name = '';        -- Empty string
SELECT * FROM Users WHERE name IS NULL;     -- NULL
SELECT * FROM Users WHERE COALESCE(name, '') = '';  -- Both!
\`\`\``,
    tags: ["NULL", "COALESCE", "IFNULL", "IS NULL", "Basic Query", "Beginner"],
  },
  {
    id: 76,
    difficulty: "Easy",
    category: "Basic Queries",
    question: "Basic Query 16: Date range queries — today, this week, this month.",
    answer: `**Date Range Queries — Ready-to-use Templates:**

\`\`\`sql
-- TODAY
SELECT * FROM Orders WHERE DATE(order_date) = CURDATE();

-- YESTERDAY
SELECT * FROM Orders WHERE DATE(order_date) = DATE_SUB(CURDATE(), INTERVAL 1 DAY);

-- LAST 7 DAYS
SELECT * FROM Orders WHERE order_date >= DATE_SUB(NOW(), INTERVAL 7 DAY);

-- LAST 30 DAYS
SELECT * FROM Orders WHERE order_date >= DATE_SUB(NOW(), INTERVAL 30 DAY);

-- THIS WEEK
SELECT * FROM Orders WHERE YEARWEEK(order_date) = YEARWEEK(NOW());

-- LAST WEEK
SELECT * FROM Orders WHERE YEARWEEK(order_date) = YEARWEEK(NOW()) - 1;

-- THIS MONTH
SELECT * FROM Orders
WHERE YEAR(order_date) = YEAR(NOW()) AND MONTH(order_date) = MONTH(NOW());

-- THIS YEAR
SELECT * FROM Orders WHERE YEAR(order_date) = YEAR(NOW());

-- SPECIFIC RANGE
SELECT * FROM Orders
WHERE order_date BETWEEN '2024-01-01 00:00:00' AND '2024-03-31 23:59:59';

-- FUTURE (upcoming)
SELECT * FROM Appointments WHERE appointment_date > NOW();

-- OVERDUE
SELECT * FROM Tasks WHERE due_date < NOW() AND status != 'completed';
\`\`\`

**Quick Stats:**
\`\`\`sql
SELECT COUNT(*) AS today_orders, SUM(amount) AS today_revenue
FROM Orders WHERE DATE(order_date) = CURDATE();
\`\`\``,
    tags: ["Date Range", "TODAY", "THIS MONTH", "LAST 7 DAYS", "Basic Query", "Beginner"],
  },
  {
    id: 77,
    difficulty: "Easy",
    category: "Basic Queries",
    question: "Basic Query 17: Data summarize karna — Dashboard queries.",
    answer: `**Dashboard / Summary Queries:**

\`\`\`sql
-- E-commerce Dashboard (last 30 days)
SELECT
  COUNT(DISTINCT customer_id) AS total_customers,
  COUNT(*) AS total_orders,
  SUM(amount) AS total_revenue,
  ROUND(AVG(amount), 2) AS avg_order_value,
  MAX(amount) AS biggest_order,
  SUM(CASE WHEN status = 'pending' THEN 1 ELSE 0 END) AS pending_orders,
  SUM(CASE WHEN status = 'delivered' THEN 1 ELSE 0 END) AS delivered_orders,
  SUM(CASE WHEN status = 'cancelled' THEN 1 ELSE 0 END) AS cancelled_orders
FROM Orders WHERE order_date >= DATE_SUB(NOW(), INTERVAL 30 DAY);

-- Department-wise summary
SELECT d.dept_name,
  COUNT(e.emp_id) AS headcount,
  ROUND(AVG(e.salary), 0) AS avg_salary,
  SUM(e.salary) AS total_cost
FROM Departments d LEFT JOIN Employees e ON d.dept_id = e.dept_id
GROUP BY d.dept_id, d.dept_name ORDER BY headcount DESC;

-- Product inventory summary
SELECT category,
  COUNT(*) AS total_products,
  SUM(stock_qty) AS total_stock,
  SUM(CASE WHEN stock_qty = 0 THEN 1 ELSE 0 END) AS out_of_stock,
  SUM(CASE WHEN stock_qty < 10 THEN 1 ELSE 0 END) AS low_stock,
  SUM(stock_qty * price) AS inventory_value
FROM Products GROUP BY category ORDER BY inventory_value DESC;
\`\`\``,
    tags: ["Dashboard", "Summary", "Reporting", "Aggregation", "Basic Query", "Beginner"],
  },
  {
    id: 78,
    difficulty: "Easy",
    category: "Basic Queries",
    question: "Basic Query 18: LIKE aur REGEXP — String search patterns.",
    answer: `**String Search Patterns:**

\`\`\`sql
-- LIKE patterns (% = any chars, _ = one char)
SELECT * FROM Users WHERE name LIKE 'Ra%';      -- Rahul, Ram, Raj
SELECT * FROM Users WHERE email LIKE '%@gmail.com';  -- Gmail only
SELECT * FROM Products WHERE description LIKE '%waterproof%';
SELECT * FROM Users WHERE phone LIKE '__________';  -- Exactly 10 chars

-- Multiple LIKE with OR
SELECT * FROM Products
WHERE name LIKE '%phone%' OR name LIKE '%mobile%' OR name LIKE '%smartphone%';

-- NOT LIKE
SELECT * FROM Users WHERE email NOT LIKE '%@temp.com';

-- ESCAPE character
SELECT * FROM Products WHERE name LIKE '50\% off%' ESCAPE '\\';

-- REGEXP — More powerful patterns (MySQL)
SELECT * FROM Users WHERE email REGEXP '^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$';
-- Valid email format

SELECT * FROM Users WHERE phone REGEXP '^[6-9][0-9]{9}$';
-- Valid Indian mobile (starts 6-9, total 10 digits)

SELECT * FROM Products WHERE name REGEXP 'laptop|notebook|computer';
-- Multiple keywords

-- PostgreSQL case-insensitive
SELECT * FROM Products WHERE name ILIKE '%laptop%';
\`\`\`

**Performance**: \`LIKE 'abc%'\` uses index. \`LIKE '%abc'\` (leading %) does NOT use index!`,
    tags: ["LIKE", "REGEXP", "Pattern Matching", "Search", "Basic Query", "Beginner"],
  },
  {
    id: 79,
    difficulty: "Easy",
    category: "Basic Queries",
    question: "Basic Query 19: Table information aur metadata queries.",
    answer: `**Table Information aur Metadata:**

\`\`\`sql
-- Database mein kaunsi tables hain
SHOW TABLES;  -- MySQL
SELECT table_name FROM information_schema.tables WHERE table_schema = 'your_db';

-- Table ka structure
DESCRIBE Employees;   -- MySQL
DESC Employees;       -- Shorthand
SHOW COLUMNS FROM Employees;

-- PostgreSQL structure
SELECT column_name, data_type, is_nullable
FROM information_schema.columns WHERE table_name = 'employees';

-- Table ka approximate row count
SELECT TABLE_NAME, TABLE_ROWS
FROM information_schema.tables WHERE TABLE_SCHEMA = 'your_db';

-- Table ka size
SELECT TABLE_NAME,
  ROUND((DATA_LENGTH + INDEX_LENGTH) / 1024 / 1024, 2) AS size_mb
FROM information_schema.tables WHERE TABLE_SCHEMA = 'your_db'
ORDER BY size_mb DESC;

-- Indexes
SHOW INDEXES FROM Employees;

-- Foreign keys
SELECT CONSTRAINT_NAME, TABLE_NAME, COLUMN_NAME,
  REFERENCED_TABLE_NAME, REFERENCED_COLUMN_NAME
FROM information_schema.KEY_COLUMN_USAGE
WHERE TABLE_SCHEMA = 'your_db' AND REFERENCED_TABLE_NAME IS NOT NULL;

-- CREATE TABLE statement
SHOW CREATE TABLE Employees;  -- MySQL

-- Current database
SELECT DATABASE();         -- MySQL
SELECT CURRENT_DATABASE(); -- PostgreSQL
\`\`\``,
    tags: ["DESCRIBE", "SHOW TABLES", "Metadata", "Information Schema", "Basic Query", "Beginner"],
  },
  {
    id: 80,
    difficulty: "Easy",
    category: "Basic Queries",
    question: "Basic Query 20: Practical mini project — Student Grade Management System.",
    answer: `**Student Grade Management — Complete Query Set:**

\`\`\`sql
-- Tables:
-- Students (student_id, name, email, batch_year)
-- Subjects (subject_id, subject_name, max_marks)
-- Marks (student_id, subject_id, marks_obtained, exam_date)

-- 1. Saare students
SELECT student_id, name, email, batch_year FROM Students ORDER BY name;

-- 2. Har student ke total marks aur percentage
SELECT s.student_id, s.name,
  SUM(m.marks_obtained) AS total_marks,
  SUM(sub.max_marks) AS max_possible,
  ROUND(SUM(m.marks_obtained) * 100.0 / SUM(sub.max_marks), 2) AS percentage
FROM Students s
JOIN Marks m ON s.student_id = m.student_id
JOIN Subjects sub ON m.subject_id = sub.subject_id
GROUP BY s.student_id, s.name ORDER BY percentage DESC;

-- 3. Class topper
SELECT name, percentage FROM (
  SELECT s.name, ROUND(SUM(m.marks_obtained)*100.0/SUM(sub.max_marks),2) AS percentage
  FROM Students s JOIN Marks m ON s.student_id = m.student_id
  JOIN Subjects sub ON m.subject_id = sub.subject_id
  GROUP BY s.student_id, s.name
) r ORDER BY percentage DESC LIMIT 1;

-- 4. Subject-wise average
SELECT sub.subject_name, ROUND(AVG(m.marks_obtained),2) AS avg,
  MAX(m.marks_obtained) AS highest, MIN(m.marks_obtained) AS lowest
FROM Subjects sub JOIN Marks m ON sub.subject_id = m.subject_id
GROUP BY sub.subject_id, sub.subject_name;

-- 5. Failed students (marks < 40%)
SELECT s.name, sub.subject_name, m.marks_obtained, sub.max_marks,
  ROUND(m.marks_obtained*100.0/sub.max_marks,2) AS pct
FROM Students s JOIN Marks m ON s.student_id = m.student_id
JOIN Subjects sub ON m.subject_id = sub.subject_id
WHERE m.marks_obtained < sub.max_marks * 0.4;

-- 6. Students who appeared in all subjects
SELECT s.student_id, s.name FROM Students s
JOIN Marks m ON s.student_id = m.student_id
GROUP BY s.student_id, s.name
HAVING COUNT(DISTINCT m.subject_id) = (SELECT COUNT(*) FROM Subjects);
\`\`\``,
    tags: ["Student Management", "Real-World Project", "Complete Query", "Basic Query", "Beginner"],
  },

];

export const PYTHON_QUESTIONS = [
  {
    id: 1,
    difficulty: "Easy",
    category: "Basics",
    question: "What is Python?",
    answer: `Python is a **high-level, interpreted, object-oriented programming language** known for its simple and readable syntax. It was created by **Guido van Rossum** and released in **1991**.

**Key Features:**
- 🧩 **High-level** → No need to manage memory or hardware
- ⚡ **Interpreted** → Runs code line by line (no compilation needed)
- 🔁 **Object-Oriented** → Supports classes and objects
- 📝 **Dynamically Typed** → No need to declare variable types
- 💻 **Cross-Platform** → Runs on Windows, Linux, macOS

**Common uses:** Web development, Data Science, AI/ML, Automation, Scripting`,
    tags: ["Python", "Introduction", "Basics"],
  },
  {
    id: 2,
    difficulty: "Easy",
    category: "Basics",
    question: "What are the key features of Python?",
    answer: `Python has several features that make it popular among developers:

**1. Easy to Read and Write** – Clean syntax, almost like plain English
**2. Interpreted Language** – Code runs line by line, no compile step needed
**3. Dynamically Typed** – Variable types are decided at runtime
**4. Object-Oriented** – Supports classes, objects, inheritance, etc.
**5. Large Standard Library** – Built-in modules for almost everything
**6. Cross-Platform** – Same code works on Windows, Linux, Mac
**7. Free and Open Source** – Anyone can use and contribute
**8. Huge Community** – Lots of support, tutorials, and packages (PyPI)

> **Interview tip**: Always mention "simple syntax + huge ecosystem" as the top reasons Python is popular.`,
    tags: ["Features", "Python", "Basics"],
  },
  {
    id: 3,
    difficulty: "Easy",
    category: "Basics",
    question: "What is a variable in Python?",
    answer: `A **variable** is a name that stores a value in memory. In Python, you don't need to declare the type — Python figures it out automatically.

\`\`\`python
name = "Alice"      # string
age = 25            # integer
price = 99.99       # float
is_active = True    # boolean
\`\`\`

**Key Points:**
- No need to write \`int x = 5\` like in Java/C++
- Variable type can change at any time (dynamic typing)
- Variable names are case-sensitive: \`age\` and \`Age\` are different`,
    tags: ["Variables", "Basics"],
  },
  {
    id: 4,
    difficulty: "Easy",
    category: "Data Types",
    question: "What are Python data types?",
    answer: `Python has several built-in data types:

| Type | Example | Description |
|------|---------|-------------|
| int | \`x = 10\` | Whole numbers |
| float | \`x = 3.14\` | Decimal numbers |
| str | \`x = "hello"\` | Text/strings |
| bool | \`x = True\` | True or False |
| list | \`x = [1,2,3]\` | Ordered, changeable |
| tuple | \`x = (1,2,3)\` | Ordered, unchangeable |
| dict | \`x = {"a":1}\` | Key-value pairs |
| set | \`x = {1,2,3}\` | Unique values only |
| NoneType | \`x = None\` | No value |

\`\`\`python
print(type(10))       # <class 'int'>
print(type("hello"))  # <class 'str'>
print(type(3.14))     # <class 'float'>
\`\`\``,
    tags: ["Data Types", "Basics"],
  },
  {
    id: 5,
    difficulty: "Easy",
    category: "Basics",
    question: "What is type casting in Python?",
    answer: `**Type casting** means converting one data type into another.

**Two types:**
1. **Implicit** – Python does it automatically
2. **Explicit** – You do it manually using functions

\`\`\`python
# Implicit casting
x = 5       # int
y = 2.0     # float
z = x + y   # Python auto-converts → 7.0 (float)

# Explicit casting
a = int("10")       # str → int → 10
b = float(5)        # int → float → 5.0
c = str(100)        # int → str → "100"
d = list((1,2,3))   # tuple → list → [1, 2, 3]
\`\`\`

**Common functions:** \`int()\`, \`float()\`, \`str()\`, \`list()\`, \`tuple()\`, \`set()\``,
    tags: ["Type Casting", "Data Types"],
  },
  {
    id: 6,
    difficulty: "Easy",
    category: "Data Structures",
    question: "What is a list in Python?",
    answer: `A **list** is an ordered, mutable (changeable) collection that can store multiple items of any type.

\`\`\`python
fruits = ["apple", "banana", "mango"]

# Access
print(fruits[0])   # apple

# Add
fruits.append("grape")

# Remove
fruits.remove("banana")

# Loop
for fruit in fruits:
    print(fruit)
\`\`\`

**Key Properties:**
- ✅ Ordered (items have an index)
- ✅ Allows duplicates
- ✅ Mutable (can add, remove, change items)
- ✅ Can store mixed types: \`[1, "hello", True, 3.14]\``,
    tags: ["List", "Data Structures"],
  },
  {
    id: 7,
    difficulty: "Easy",
    category: "Data Structures",
    question: "What is a tuple?",
    answer: `A **tuple** is an ordered, immutable (unchangeable) collection. Once created, you cannot modify it.

\`\`\`python
colors = ("red", "green", "blue")

# Access
print(colors[0])   # red

# Tuples are IMMUTABLE → this gives error:
# colors[0] = "yellow"  ❌ TypeError
\`\`\`

**Why use tuples?**
- Faster than lists
- Used for data that should NOT change (e.g., coordinates, RGB values)
- Can be used as dictionary keys (lists cannot)

| Feature | List | Tuple |
|---------|------|-------|
| Mutable | ✅ Yes | ❌ No |
| Syntax | \`[]\` | \`()\` |
| Speed | Slower | Faster |`,
    tags: ["Tuple", "Data Structures"],
  },
  {
    id: 8,
    difficulty: "Easy",
    category: "Data Structures",
    question: "What is a dictionary?",
    answer: `A **dictionary** stores data as **key-value pairs**. Each key must be unique.

\`\`\`python
student = {
    "name": "Alice",
    "age": 20,
    "marks": 95
}

# Access value
print(student["name"])     # Alice
print(student.get("age"))  # 20

# Add/Update
student["city"] = "Delhi"

# Delete
del student["marks"]

# Loop
for key, value in student.items():
    print(key, "→", value)
\`\`\`

**Key Properties:**
- Key-value pairs
- Keys must be unique
- Values can be any type
- Fast lookup by key`,
    tags: ["Dictionary", "Data Structures"],
  },
  {
    id: 9,
    difficulty: "Easy",
    category: "Data Structures",
    question: "What is a set?",
    answer: `A **set** is an unordered collection of **unique** items. It automatically removes duplicates.

\`\`\`python
nums = {1, 2, 3, 3, 2, 1}
print(nums)   # {1, 2, 3}  ← duplicates removed!

# Add
nums.add(4)

# Remove
nums.remove(2)

# Set operations
a = {1, 2, 3}
b = {3, 4, 5}
print(a | b)   # Union → {1,2,3,4,5}
print(a & b)   # Intersection → {3}
print(a - b)   # Difference → {1,2}
\`\`\`

**Use case:** Removing duplicates from a list → \`list(set(my_list))\``,
    tags: ["Set", "Data Structures"],
  },
  {
    id: 10,
    difficulty: "Easy",
    category: "Data Structures",
    question: "What is the difference between list and tuple?",
    answer: `The main difference is **mutability** — lists can be changed, tuples cannot.

| Feature | List | Tuple |
|---------|------|-------|
| Syntax | \`[1, 2, 3]\` | \`(1, 2, 3)\` |
| Mutable | ✅ Yes | ❌ No |
| Speed | Slower | Faster |
| Memory | More | Less |
| Use case | Dynamic data | Fixed data |
| Dict key | ❌ No | ✅ Yes |

\`\`\`python
my_list = [1, 2, 3]
my_list[0] = 99     # ✅ Works

my_tuple = (1, 2, 3)
my_tuple[0] = 99    # ❌ TypeError: 'tuple' object does not support item assignment
\`\`\`

> **Rule of thumb**: Use tuple when data should NOT change (e.g., coordinates, days of week).`,
    tags: ["List", "Tuple", "Comparison"],
  },
  {
    id: 11,
    difficulty: "Easy",
    category: "Data Structures",
    question: "What is the difference between list and dictionary?",
    answer: `Lists use **indexes** (numbers) to access data, while dictionaries use **keys** (any name you choose).

| Feature | List | Dictionary |
|---------|------|------------|
| Access by | Index (0, 1, 2…) | Key ("name", "age"…) |
| Syntax | \`[]\` | \`{}\` |
| Ordered | ✅ Yes | ✅ Yes (Python 3.7+) |
| Duplicates | ✅ Allowed | ❌ Keys must be unique |

\`\`\`python
# List — access by index
fruits = ["apple", "mango", "banana"]
print(fruits[1])   # mango

# Dictionary — access by key
student = {"name": "Alice", "age": 20}
print(student["name"])   # Alice
\`\`\`

> Use **list** when order matters. Use **dictionary** when you need labeled/named data.`,
    tags: ["List", "Dictionary", "Comparison"],
  },
  {
    id: 12,
    difficulty: "Easy",
    category: "Functions",
    question: "What is a function in Python?",
    answer: `A **function** is a reusable block of code that performs a specific task. You define it once and call it multiple times.

\`\`\`python
# Define a function
def greet(name):
    return "Hello, " + name

# Call the function
print(greet("Alice"))   # Hello, Alice
print(greet("Bob"))     # Hello, Bob
\`\`\`

**Why use functions?**
- ✅ Avoid repeating code (DRY principle)
- ✅ Makes code organized and readable
- ✅ Easy to test and debug

**Types of functions:**
- Built-in: \`print()\`, \`len()\`, \`type()\`
- User-defined: functions you write yourself
- Lambda: small anonymous functions`,
    tags: ["Functions", "Basics"],
  },
  {
    id: 13,
    difficulty: "Intermediate",
    category: "Functions",
    question: "What are *args and **kwargs?",
    answer: `They allow functions to accept **any number of arguments**.

**\`*args\`** → Accepts multiple positional arguments as a **tuple**
**\`**kwargs\`** → Accepts multiple keyword arguments as a **dictionary**

\`\`\`python
# *args example
def add(*args):
    return sum(args)

print(add(1, 2, 3))       # 6
print(add(10, 20, 30, 40)) # 100

# **kwargs example
def show_info(**kwargs):
    for key, value in kwargs.items():
        print(f"{key}: {value}")

show_info(name="Alice", age=20, city="Delhi")
# name: Alice
# age: 20
# city: Delhi
\`\`\`

> **Memory trick**: \`*args\` = tuple, \`**kwargs\` = dictionary`,
    tags: ["args", "kwargs", "Functions"],
  },
  {
    id: 14,
    difficulty: "Easy",
    category: "Functions",
    question: "What is a lambda function?",
    answer: `A **lambda function** is a small, anonymous (nameless) function written in one line.

**Syntax:** \`lambda arguments: expression\`

\`\`\`python
# Normal function
def square(x):
    return x * x

# Same thing as lambda
square = lambda x: x * x
print(square(5))   # 25

# Lambda with multiple args
add = lambda a, b: a + b
print(add(3, 4))   # 7

# Common use — sorting
students = [("Alice", 20), ("Bob", 18), ("Carol", 22)]
students.sort(key=lambda s: s[1])   # sort by age
\`\`\`

> **Use case**: When you need a quick function for sorting, filtering, or mapping.`,
    tags: ["Lambda", "Functions"],
  },
  {
    id: 15,
    difficulty: "Easy",
    category: "Modules",
    question: "What is a module in Python?",
    answer: `A **module** is a Python file (\`.py\`) that contains functions, classes, or variables you can reuse in other files.

\`\`\`python
# math module (built-in)
import math

print(math.sqrt(16))   # 4.0
print(math.pi)          # 3.14159...

# import specific function
from math import sqrt
print(sqrt(25))   # 5.0

# Your own module
# File: myutils.py
# def greet(name): return "Hello " + name

# Use it in another file:
# import myutils
# myutils.greet("Alice")
\`\`\`

**Types of modules:**
- **Built-in**: \`math\`, \`os\`, \`sys\`, \`random\`, \`datetime\`
- **Third-party**: \`numpy\`, \`pandas\`, \`requests\`
- **Custom**: modules you write yourself`,
    tags: ["Module", "Imports"],
  },
  {
    id: 16,
    difficulty: "Easy",
    category: "Modules",
    question: "What is a package?",
    answer: `A **package** is a folder containing multiple Python modules (files), with a special \`__init__.py\` file inside.

\`\`\`
mypackage/
    __init__.py
    calculator.py
    converter.py
\`\`\`

\`\`\`python
# Using a package
from mypackage import calculator
calculator.add(5, 3)

# Or
from mypackage.calculator import add
add(5, 3)
\`\`\`

**Real-world examples:**
- \`numpy\` → a package for numerical computing
- \`django\` → a package for web development
- \`pandas\` → a package for data analysis

> **Simple difference**: Module = one file. Package = folder of multiple modules.`,
    tags: ["Package", "Modules"],
  },
  {
    id: 17,
    difficulty: "Easy",
    category: "Basics",
    question: "What is PEP 8?",
    answer: `**PEP 8** is Python's official **style guide** — a set of rules for writing clean, readable Python code.

**Key PEP 8 Rules:**

\`\`\`python
# ✅ Use snake_case for variable/function names
student_name = "Alice"
def calculate_total():
    pass

# ✅ Use PascalCase for class names
class StudentRecord:
    pass

# ✅ 4 spaces for indentation (not tabs)
def greet():
    print("Hello")   # 4 spaces

# ✅ Two blank lines between top-level functions
def func1():
    pass


def func2():
    pass

# ✅ Max line length = 79 characters
# ✅ Spaces around operators: x = 5 + 3, not x=5+3
\`\`\`

> **PEP = Python Enhancement Proposal**. PEP 8 is the most important one for code style.`,
    tags: ["PEP 8", "Style Guide", "Best Practices"],
  },
  {
    id: 18,
    difficulty: "Easy",
    category: "Basics",
    question: "What are Python identifiers?",
    answer: `An **identifier** is the name you give to variables, functions, classes, or modules.

**Rules for identifiers:**
- Can use letters (a-z, A-Z), digits (0-9), and underscore (_)
- **Cannot start with a digit** ❌ \`2name = "hi"\`
- **Cannot use keywords** ❌ \`for = 5\`
- **Case-sensitive**: \`name\` and \`Name\` are different

\`\`\`python
# ✅ Valid identifiers
name = "Alice"
_age = 25
student1 = "Bob"
totalMarks = 90

# ❌ Invalid identifiers
2name = "hi"      # starts with digit
for = 5           # keyword
my-name = "Alice" # hyphen not allowed
\`\`\`

**Best Practice:** Use descriptive names like \`student_name\` instead of \`sn\`.`,
    tags: ["Identifiers", "Naming", "Basics"],
  },
  {
    id: 19,
    difficulty: "Easy",
    category: "Basics",
    question: "What is indentation in Python?",
    answer: `**Indentation** means using spaces (or tabs) at the beginning of a line to define code blocks. In Python, indentation is **mandatory** — it replaces curly braces \`{}\` used in other languages.

\`\`\`python
# ✅ Correct indentation (4 spaces)
if True:
    print("Inside if block")
    print("Still inside")
print("Outside if block")

# ❌ Wrong — IndentationError
if True:
print("No indentation!")   # Error!
\`\`\`

**Python standard:** Use **4 spaces** per level (PEP 8 recommendation).

\`\`\`python
def calculate(x):
    if x > 0:          # 4 spaces
        return x * 2   # 8 spaces (nested)
    return 0
\`\`\`

> Indentation makes Python code visually clean and easy to read.`,
    tags: ["Indentation", "Syntax", "Basics"],
  },
  {
    id: 20,
    difficulty: "Easy",
    category: "Basics",
    question: "What are comments in Python?",
    answer: `**Comments** are lines in code that Python ignores. They are used to explain code for humans.

**Two types:**

\`\`\`python
# Single-line comment — use # symbol
x = 10  # This is also a comment at end of line

"""
Multi-line comment
(technically a string, but used as comment)
This function adds two numbers
and returns the result
"""
def add(a, b):
    return a + b

'''
You can also use single quotes
for multi-line comments
'''
\`\`\`

**Why use comments?**
- Explain what code does
- Leave notes for teammates
- Temporarily disable code during debugging

> **Good practice:** Write comments that explain *why*, not *what* (the code already shows what).`,
    tags: ["Comments", "Basics", "Syntax"],
  },
  {
    id: 21,
    difficulty: "Intermediate",
    category: "OOP",
    question: "What is object-oriented programming (OOP)?",
    answer: `**OOP** is a programming style that organizes code into **objects** — which bundle together data (attributes) and behavior (methods).

**Real-world analogy:**
- A **Car** is a class (blueprint)
- Your specific red Honda car is an **object** (instance)

\`\`\`python
class Car:
    def __init__(self, brand, color):
        self.brand = brand    # attribute
        self.color = color    # attribute

    def drive(self):          # method
        print(f"{self.brand} is driving!")

# Create object
my_car = Car("Honda", "Red")
my_car.drive()   # Honda is driving!
\`\`\`

**OOP makes code:**
- Reusable
- Organized
- Easy to maintain and scale`,
    tags: ["OOP", "Classes", "Objects"],
  },
  {
    id: 22,
    difficulty: "Intermediate",
    category: "OOP",
    question: "What are the four pillars of OOP?",
    answer: `The **4 pillars** of OOP are:

**1. Encapsulation** – Hiding internal details, exposing only what's needed
\`\`\`python
class BankAccount:
    def __init__(self):
        self.__balance = 0       # private
    def deposit(self, amt):
        self.__balance += amt
\`\`\`

**2. Inheritance** – Child class gets properties of parent class
\`\`\`python
class Animal:
    def speak(self): print("Some sound")

class Dog(Animal):
    def speak(self): print("Woof!")
\`\`\`

**3. Polymorphism** – Same method, different behavior
\`\`\`python
# Dog and Cat both have speak(), but behave differently
\`\`\`

**4. Abstraction** – Show only essential details, hide complexity
\`\`\`python
from abc import ABC, abstractmethod
class Shape(ABC):
    @abstractmethod
    def area(self): pass
\`\`\`

> **Memory trick**: **E**ncapsulation, **I**nheritance, **P**olymorphism, **A**bstraction → **EIPA**`,
    tags: ["OOP", "Pillars", "Encapsulation", "Inheritance"],
  },
  {
    id: 23,
    difficulty: "Intermediate",
    category: "OOP",
    question: "What is a class?",
    answer: `A **class** is a **blueprint** or template for creating objects. It defines what attributes and methods objects will have.

\`\`\`python
class Student:
    # Class attribute (shared by all)
    school = "ABC School"

    # Constructor
    def __init__(self, name, age):
        self.name = name    # instance attribute
        self.age = age

    # Method
    def introduce(self):
        print(f"Hi, I am {self.name}, age {self.age}")

# Creating objects from the class
s1 = Student("Alice", 20)
s2 = Student("Bob", 22)

s1.introduce()   # Hi, I am Alice, age 20
s2.introduce()   # Hi, I am Bob, age 22
print(Student.school)   # ABC School
\`\`\`

> **Analogy**: Class = cookie cutter 🍪, Object = the actual cookie`,
    tags: ["Class", "OOP"],
  },
  {
    id: 24,
    difficulty: "Intermediate",
    category: "OOP",
    question: "What is an object?",
    answer: `An **object** is an **instance** of a class — the actual thing created from the blueprint (class).

\`\`\`python
class Dog:
    def __init__(self, name, breed):
        self.name = name
        self.breed = breed

    def bark(self):
        print(f"{self.name} says: Woof!")

# Objects (instances)
dog1 = Dog("Tommy", "Labrador")
dog2 = Dog("Rocky", "Poodle")

dog1.bark()   # Tommy says: Woof!
dog2.bark()   # Rocky says: Woof!

print(dog1.name)   # Tommy
print(dog2.breed)  # Poodle
\`\`\`

**Key points:**
- Each object has its own copy of instance attributes
- All objects share class methods
- You can create unlimited objects from one class`,
    tags: ["Object", "Instance", "OOP"],
  },
  {
    id: 25,
    difficulty: "Intermediate",
    category: "OOP",
    question: "What is inheritance?",
    answer: `**Inheritance** allows a child class to inherit (get) properties and methods from a parent class. This promotes code reuse.

\`\`\`python
# Parent class
class Animal:
    def __init__(self, name):
        self.name = name

    def eat(self):
        print(f"{self.name} is eating")

# Child class inherits from Animal
class Dog(Animal):
    def bark(self):
        print(f"{self.name} says: Woof!")

# Dog inherits eat() from Animal
d = Dog("Tommy")
d.eat()    # Tommy is eating  ← inherited!
d.bark()   # Tommy says: Woof!
\`\`\`

**Types of Inheritance:**
- **Single** – One parent, one child
- **Multiple** – Multiple parents
- **Multilevel** – A → B → C
- **Hierarchical** – One parent, multiple children

> **Use \`super()\`** to call parent class methods from child class.`,
    tags: ["Inheritance", "OOP"],
  },
  {
    id: 26,
    difficulty: "Intermediate",
    category: "OOP",
    question: "What is polymorphism?",
    answer: `**Polymorphism** means "many forms." The same method name works differently for different classes.

\`\`\`python
class Dog:
    def speak(self):
        return "Woof!"

class Cat:
    def speak(self):
        return "Meow!"

class Duck:
    def speak(self):
        return "Quack!"

# Polymorphism in action
animals = [Dog(), Cat(), Duck()]
for animal in animals:
    print(animal.speak())
# Woof!
# Meow!
# Quack!
\`\`\`

**Method Overriding** (child class redefines parent method):
\`\`\`python
class Shape:
    def area(self): return 0

class Circle(Shape):
    def area(self): return 3.14 * 5 * 5   # overrides parent

class Square(Shape):
    def area(self): return 5 * 5
\`\`\`

> Same \`area()\` call → different result for different shapes.`,
    tags: ["Polymorphism", "OOP"],
  },
  {
    id: 27,
    difficulty: "Intermediate",
    category: "OOP",
    question: "What is encapsulation?",
    answer: `**Encapsulation** means hiding the internal details of an object and only exposing what is necessary. It's done using **private** and **protected** attributes.

\`\`\`python
class BankAccount:
    def __init__(self, owner):
        self.owner = owner
        self.__balance = 0    # private (name mangling → _BankAccount__balance)

    def deposit(self, amount):
        if amount > 0:
            self.__balance += amount

    def get_balance(self):
        return self.__balance   # controlled access

acc = BankAccount("Alice")
acc.deposit(1000)
print(acc.get_balance())   # 1000

# ❌ Direct access blocked
# print(acc.__balance)   → AttributeError
\`\`\`

**Access modifiers:**
- \`name\` → public (accessible everywhere)
- \`_name\` → protected (convention, use with care)
- \`__name\` → private (name-mangled, hard to access)`,
    tags: ["Encapsulation", "OOP", "Private"],
  },
  {
    id: 28,
    difficulty: "Intermediate",
    category: "OOP",
    question: "What is abstraction?",
    answer: `**Abstraction** means hiding complex implementation details and showing only the essential features to the user.

In Python, abstraction is achieved using **abstract classes** from the \`abc\` module.

\`\`\`python
from abc import ABC, abstractmethod

class Shape(ABC):
    @abstractmethod
    def area(self):
        pass   # No implementation here

    @abstractmethod
    def perimeter(self):
        pass

class Circle(Shape):
    def __init__(self, r):
        self.r = r

    def area(self):
        return 3.14 * self.r ** 2

    def perimeter(self):
        return 2 * 3.14 * self.r

c = Circle(5)
print(c.area())       # 78.5
print(c.perimeter())  # 31.4

# ❌ Cannot instantiate abstract class
# s = Shape()   → TypeError
\`\`\`

> **Real-life analogy**: You press the accelerator to go faster — you don't need to know how the engine works internally.`,
    tags: ["Abstraction", "OOP", "ABC"],
  },
  {
    id: 29,
    difficulty: "Intermediate",
    category: "OOP",
    question: "What are constructors in Python?",
    answer: `A **constructor** is a special method that is **automatically called** when an object is created. In Python, it is the \`__init__\` method.

\`\`\`python
class Student:
    def __init__(self, name, age):   # Constructor
        self.name = name
        self.age = age
        print(f"Student {name} created!")

s1 = Student("Alice", 20)   # Constructor auto-called → "Student Alice created!"
s2 = Student("Bob", 22)     # "Student Bob created!"
\`\`\`

**Types of constructors:**
1. **Default constructor** – No parameters (only \`self\`)
2. **Parameterized constructor** – Takes extra parameters

\`\`\`python
# Default
class Demo:
    def __init__(self):
        self.value = 0

# Parameterized
class Demo:
    def __init__(self, value):
        self.value = value
\`\`\`

> Python also has a \`__del__\` method (destructor) called when object is deleted.`,
    tags: ["Constructor", "__init__", "OOP"],
  },
  {
    id: 30,
    difficulty: "Intermediate",
    category: "OOP",
    question: "What is the difference between deep copy and shallow copy?",
    answer: `**Shallow copy** creates a new object but references the same nested objects.
**Deep copy** creates a completely independent copy, including nested objects.

\`\`\`python
import copy

original = [[1, 2], [3, 4]]

# Shallow copy
shallow = copy.copy(original)
shallow[0][0] = 99
print(original)  # [[99, 2], [3, 4]] ← original CHANGED!

# Deep copy
original = [[1, 2], [3, 4]]
deep = copy.deepcopy(original)
deep[0][0] = 99
print(original)  # [[1, 2], [3, 4]] ← original UNCHANGED ✅
\`\`\`

| Feature | Shallow Copy | Deep Copy |
|---------|-------------|-----------|
| New object | ✅ Yes | ✅ Yes |
| Nested objects | ❌ Same reference | ✅ New copy |
| Speed | Faster | Slower |
| Memory | Less | More |

> Use **deep copy** when you have lists/dicts inside lists/dicts.`,
    tags: ["Deep Copy", "Shallow Copy", "OOP"],
  },
  {
    id: 31,
    difficulty: "Intermediate",
    category: "OOP",
    question: "What is the __init__ method?",
    answer: `\`__init__\` is the **initializer/constructor** method in Python. It is called automatically when you create a new object from a class.

\`\`\`python
class Person:
    def __init__(self, name, age):
        self.name = name   # Set instance attributes
        self.age = age

    def greet(self):
        print(f"Hello! I am {self.name}, {self.age} years old.")

p = Person("Alice", 25)   # __init__ is called here
p.greet()   # Hello! I am Alice, 25 years old.
\`\`\`

**Key points:**
- \`__init__\` is NOT called manually — Python calls it automatically
- \`self\` refers to the current object
- You set instance attributes inside \`__init__\`
- It can have default values: \`def __init__(self, name="Unknown")\`

> \`__init__\` = "initialize the object with starting values"`,
    tags: ["__init__", "Constructor", "OOP"],
  },
  {
    id: 32,
    difficulty: "Intermediate",
    category: "Exception Handling",
    question: "What is an exception?",
    answer: `An **exception** is an error that occurs **during runtime** (while the program is running) that disrupts the normal flow of the program.

**Common Python exceptions:**

| Exception | When it occurs |
|-----------|---------------|
| \`ZeroDivisionError\` | Dividing by zero |
| \`TypeError\` | Wrong data type |
| \`ValueError\` | Wrong value |
| \`IndexError\` | List index out of range |
| \`KeyError\` | Dictionary key not found |
| \`FileNotFoundError\` | File doesn't exist |
| \`NameError\` | Variable not defined |

\`\`\`python
x = 10 / 0      # ZeroDivisionError
y = int("abc")  # ValueError
z = [1,2][5]    # IndexError
\`\`\`

> Exceptions can be **handled** using try-except so the program doesn't crash.`,
    tags: ["Exception", "Errors", "Basics"],
  },
  {
    id: 33,
    difficulty: "Intermediate",
    category: "Exception Handling",
    question: "How do you handle exceptions in Python?",
    answer: `Python uses \`try-except\` blocks to handle exceptions gracefully without crashing the program.

\`\`\`python
# Basic try-except
try:
    x = int(input("Enter a number: "))
    result = 10 / x
    print(result)
except ZeroDivisionError:
    print("Cannot divide by zero!")
except ValueError:
    print("Please enter a valid number!")

# else and finally
try:
    x = int("5")
except ValueError:
    print("Error!")
else:
    print("No error! x =", x)   # Runs if no exception
finally:
    print("This always runs!")   # Always executes
\`\`\`

**Catching all exceptions:**
\`\`\`python
try:
    risky_code()
except Exception as e:
    print(f"Error: {e}")
\`\`\`

> **Best practice**: Catch specific exceptions rather than generic \`Exception\`.`,
    tags: ["try-except", "Exception Handling"],
  },
  {
    id: 34,
    difficulty: "Intermediate",
    category: "Exception Handling",
    question: "What is the difference between errors and exceptions?",
    answer: `Both are problems in code, but they happen at different times and for different reasons.

| Feature | Errors | Exceptions |
|---------|--------|------------|
| When | Compile time / Syntax | Runtime |
| Handleable? | ❌ Usually not | ✅ Yes (try-except) |
| Example | \`SyntaxError\`, \`IndentationError\` | \`ZeroDivisionError\`, \`ValueError\` |

\`\`\`python
# Error — SyntaxError (code won't even run)
if True    # Missing colon → SyntaxError

# Exception — happens during execution
x = 10 / 0   # ZeroDivisionError → can be caught
\`\`\`

**In Python specifically:**
- Everything that can go wrong inherits from \`BaseException\`
- \`Exception\` is the base class for all catchable exceptions
- \`SyntaxError\` and \`IndentationError\` are technically exceptions too, but can't be caught at runtime (they prevent code from running at all)

> **Practical rule**: If the code can't even start → Error. If it crashes while running → Exception.`,
    tags: ["Errors", "Exceptions", "Difference"],
  },
  {
    id: 35,
    difficulty: "Intermediate",
    category: "Advanced Concepts",
    question: "What is a generator in Python?",
    answer: `A **generator** is a special function that produces values one at a time using the **\`yield\`** keyword, instead of returning all values at once.

\`\`\`python
# Normal function — returns all at once
def get_numbers():
    return [1, 2, 3, 4, 5]

# Generator — yields one at a time
def gen_numbers():
    for i in range(1, 6):
        yield i   # pauses and returns one value

gen = gen_numbers()
print(next(gen))   # 1
print(next(gen))   # 2
print(next(gen))   # 3

# Or use in a loop
for num in gen_numbers():
    print(num)
\`\`\`

**Why use generators?**
- ✅ **Memory efficient** — doesn't load all data at once
- ✅ Great for large datasets (reading million-line files)
- ✅ Lazy evaluation — computes only when needed

> **Generator expression**: \`(x**2 for x in range(10))\` — like list comprehension but with \`()\``,
    tags: ["Generator", "yield", "Memory"],
  },
  {
    id: 36,
    difficulty: "Intermediate",
    category: "Advanced Concepts",
    question: "What is an iterator?",
    answer: `An **iterator** is an object that returns elements one by one using \`next()\`. It implements two methods: \`__iter__()\` and \`__next__()\`.

\`\`\`python
# Lists are iterable but not iterators
nums = [1, 2, 3]
it = iter(nums)      # Creates an iterator

print(next(it))   # 1
print(next(it))   # 2
print(next(it))   # 3
# print(next(it)) → StopIteration (no more items)
\`\`\`

**Custom iterator:**
\`\`\`python
class Counter:
    def __init__(self, max):
        self.max = max
        self.current = 0

    def __iter__(self):
        return self

    def __next__(self):
        if self.current >= self.max:
            raise StopIteration
        self.current += 1
        return self.current

for num in Counter(3):
    print(num)   # 1 2 3
\`\`\`

> **Difference**: Every iterator is iterable, but not every iterable is an iterator.`,
    tags: ["Iterator", "iter", "next"],
  },
  {
    id: 37,
    difficulty: "Intermediate",
    category: "Advanced Concepts",
    question: "What is a decorator?",
    answer: `A **decorator** is a function that wraps another function to add extra behavior without changing the original code.

\`\`\`python
# Simple decorator
def my_decorator(func):
    def wrapper():
        print("Before function runs")
        func()
        print("After function runs")
    return wrapper

@my_decorator
def say_hello():
    print("Hello!")

say_hello()
# Before function runs
# Hello!
# After function runs
\`\`\`

**Real-world use case — timing a function:**
\`\`\`python
import time

def timer(func):
    def wrapper(*args, **kwargs):
        start = time.time()
        result = func(*args, **kwargs)
        end = time.time()
        print(f"Time taken: {end - start:.4f}s")
        return result
    return wrapper

@timer
def slow_function():
    time.sleep(1)

slow_function()   # Time taken: 1.0001s
\`\`\`

> **Used heavily in**: Flask routes (\`@app.route\`), Django views (\`@login_required\`)`,
    tags: ["Decorator", "Functions", "Advanced"],
  },
  {
    id: 38,
    difficulty: "Easy",
    category: "Data Structures",
    question: "What are built-in data structures in Python?",
    answer: `Python has **4 main built-in data structures**:

| Structure | Syntax | Ordered | Mutable | Duplicates |
|-----------|--------|---------|---------|------------|
| **List** | \`[1,2,3]\` | ✅ | ✅ | ✅ |
| **Tuple** | \`(1,2,3)\` | ✅ | ❌ | ✅ |
| **Set** | \`{1,2,3}\` | ❌ | ✅ | ❌ |
| **Dictionary** | \`{"a":1}\` | ✅ | ✅ | Keys: ❌ |

\`\`\`python
my_list  = [1, 2, 3, 2]         # ordered, changeable, allows duplicates
my_tuple = (1, 2, 3)            # ordered, unchangeable
my_set   = {1, 2, 3, 2}         # unordered, no duplicates → {1,2,3}
my_dict  = {"name": "Alice"}    # key-value pairs
\`\`\`

**When to use what:**
- Need order + change → **list**
- Fixed data → **tuple**
- Unique items → **set**
- Key-value lookup → **dict**`,
    tags: ["Data Structures", "List", "Tuple", "Set", "Dict"],
  },
  {
    id: 39,
    difficulty: "Intermediate",
    category: "Advanced Concepts",
    question: "What is list comprehension?",
    answer: `**List comprehension** is a short, clean way to create a list in one line.

**Syntax:** \`[expression for item in iterable if condition]\`

\`\`\`python
# Normal way
squares = []
for x in range(1, 6):
    squares.append(x ** 2)
# [1, 4, 9, 16, 25]

# List comprehension — same result, one line ✨
squares = [x ** 2 for x in range(1, 6)]
# [1, 4, 9, 16, 25]

# With condition — even numbers only
evens = [x for x in range(10) if x % 2 == 0]
# [0, 2, 4, 6, 8]

# String manipulation
words = ["hello", "world", "python"]
upper = [w.upper() for w in words]
# ['HELLO', 'WORLD', 'PYTHON']
\`\`\`

> **Advantages**: Faster than loops, more Pythonic, readable for simple cases.`,
    tags: ["List Comprehension", "Advanced", "Pythonic"],
  },
  {
    id: 40,
    difficulty: "Intermediate",
    category: "Advanced Concepts",
    question: "What is dictionary comprehension?",
    answer: `**Dictionary comprehension** is a concise way to create a dictionary in one line.

**Syntax:** \`{key: value for item in iterable if condition}\`

\`\`\`python
# Normal way
squares = {}
for x in range(1, 6):
    squares[x] = x ** 2

# Dictionary comprehension
squares = {x: x**2 for x in range(1, 6)}
# {1: 1, 2: 4, 3: 9, 4: 16, 5: 25}

# With condition — only even keys
even_squares = {x: x**2 for x in range(10) if x % 2 == 0}
# {0: 0, 2: 4, 4: 16, 6: 36, 8: 64}

# Swap keys and values
original = {"a": 1, "b": 2, "c": 3}
swapped = {v: k for k, v in original.items()}
# {1: "a", 2: "b", 3: "c"}
\`\`\`

> Also works for **set comprehension**: \`{x**2 for x in range(5)}\``,
    tags: ["Dictionary Comprehension", "Advanced", "Pythonic"],
  },
  {
    id: 41,
    difficulty: "Hard",
    category: "Advanced",
    question: "What is the Global Interpreter Lock (GIL)?",
    answer: `The **GIL (Global Interpreter Lock)** is a mutex (lock) in CPython that allows only **one thread** to execute Python bytecode at a time, even on multi-core processors.

**Why does it exist?**
- Python's memory management (reference counting) is not thread-safe
- GIL prevents multiple threads from corrupting memory

**Impact:**
\`\`\`python
# Even with threading, Python runs only ONE thread at a time for CPU tasks
import threading

def count():
    for i in range(10_000_000):
        pass

t1 = threading.Thread(target=count)
t2 = threading.Thread(target=count)
t1.start(); t2.start()
# NOT truly parallel due to GIL
\`\`\`

**Workarounds:**
- Use \`multiprocessing\` (each process has its own GIL)
- Use \`concurrent.futures\`
- Use non-CPython implementations (Jython, PyPy)
- For I/O tasks (web, files), threading still helps since GIL is released during I/O

> **GIL affects CPU-bound tasks**. I/O-bound tasks (reading files, network requests) are fine with threading.`,
    tags: ["GIL", "Threading", "CPython", "Advanced"],
  },
  {
    id: 42,
    difficulty: "Hard",
    category: "Advanced",
    question: "What is multithreading in Python?",
    answer: `**Multithreading** means running multiple threads (mini-programs) concurrently within the same process.

\`\`\`python
import threading
import time

def download(file):
    print(f"Downloading {file}...")
    time.sleep(2)
    print(f"{file} downloaded!")

# Without threading: takes 6 seconds total (3 x 2s)
# With threading: takes ~2 seconds (all run at same time)

threads = []
for file in ["file1.txt", "file2.txt", "file3.txt"]:
    t = threading.Thread(target=download, args=(file,))
    threads.append(t)
    t.start()

for t in threads:
    t.join()   # Wait for all threads to finish
\`\`\`

**When to use:**
- ✅ I/O-bound tasks: downloading files, API calls, reading/writing
- ❌ CPU-bound tasks: complex calculations (use multiprocessing instead)

**Note:** Due to the GIL, Python threads don't run truly in parallel for CPU work.`,
    tags: ["Multithreading", "Concurrency", "Advanced"],
  },
  {
    id: 43,
    difficulty: "Hard",
    category: "Advanced",
    question: "What is multiprocessing in Python?",
    answer: `**Multiprocessing** runs multiple processes in parallel, each with its own memory and Python interpreter (and GIL). It's true parallelism.

\`\`\`python
from multiprocessing import Process
import os

def task(name):
    print(f"Process {name}, PID: {os.getpid()}")

if __name__ == "__main__":
    processes = []
    for i in range(3):
        p = Process(target=task, args=(f"P{i}",))
        processes.append(p)
        p.start()

    for p in processes:
        p.join()
\`\`\`

**vs Multithreading:**

| Feature | Threading | Multiprocessing |
|---------|-----------|----------------|
| Memory | Shared | Separate |
| GIL | Affected | Not affected |
| Best for | I/O tasks | CPU tasks |
| Overhead | Low | Higher |

\`\`\`python
# Process Pool for parallel computation
from multiprocessing import Pool

def square(n): return n * n

with Pool(4) as p:
    results = p.map(square, [1,2,3,4,5])
print(results)   # [1, 4, 9, 16, 25]
\`\`\``,
    tags: ["Multiprocessing", "Parallelism", "Advanced"],
  },
  {
    id: 44,
    difficulty: "Hard",
    category: "Advanced",
    question: "What is a virtual environment (virtualenv)?",
    answer: `A **virtual environment** is an isolated Python environment where you can install packages separately for each project — without affecting other projects or the system Python.

**Why needed?**
- Project A needs Django 3.0
- Project B needs Django 4.2
- Without venv, they'd conflict!

\`\`\`bash
# Create a virtual environment
python -m venv myenv

# Activate it
# Windows:
myenv\\Scripts\\activate

# Mac/Linux:
source myenv/bin/activate

# Now install packages (only in this venv)
pip install django numpy

# Deactivate when done
deactivate

# Save dependencies
pip freeze > requirements.txt

# Recreate venv from requirements
pip install -r requirements.txt
\`\`\`

**Tools:**
- \`venv\` (built-in, Python 3.3+)
- \`virtualenv\` (third-party, more features)
- \`conda\` (for data science)
- \`poetry\` / \`pipenv\` (modern alternatives)`,
    tags: ["Virtual Environment", "venv", "pip"],
  },
  {
    id: 45,
    difficulty: "Hard",
    category: "Advanced",
    question: "What are Python modules like NumPy and Pandas used for?",
    answer: `**NumPy** and **Pandas** are the two most important libraries for data science in Python.

**NumPy (Numerical Python):**
- Works with large arrays and matrices
- Much faster than Python lists for math
\`\`\`python
import numpy as np

arr = np.array([1, 2, 3, 4, 5])
print(arr * 2)        # [2 4 6 8 10]
print(arr.mean())     # 3.0
print(arr.sum())      # 15

matrix = np.zeros((3, 3))   # 3x3 zero matrix
\`\`\`

**Pandas (Panel Data):**
- Works with tables/spreadsheets (DataFrames)
- Read CSV, Excel, filter, group data
\`\`\`python
import pandas as pd

df = pd.read_csv("students.csv")
print(df.head())              # First 5 rows
print(df["marks"].mean())     # Average marks
df_filtered = df[df["marks"] > 80]   # Filter

# Create DataFrame manually
data = {"name": ["Alice", "Bob"], "age": [20, 22]}
df = pd.DataFrame(data)
\`\`\`

> **NumPy** = math on numbers. **Pandas** = work with tables/data.`,
    tags: ["NumPy", "Pandas", "Data Science", "Libraries"],
  },
  {
    id: 46,
    difficulty: "Hard",
    category: "Advanced",
    question: "What is recursion? Give an example.",
    answer: `**Recursion** is when a function calls **itself** to solve a smaller version of the same problem.

**Structure:**
1. **Base case** – condition to stop (prevents infinite loop)
2. **Recursive case** – function calls itself with smaller input

\`\`\`python
# Classic example: Factorial
# 5! = 5 × 4 × 3 × 2 × 1 = 120

def factorial(n):
    if n == 0 or n == 1:   # Base case
        return 1
    return n * factorial(n - 1)   # Recursive case

print(factorial(5))   # 120
# factorial(5) → 5 * factorial(4)
# factorial(4) → 4 * factorial(3) → ...
# factorial(1) → 1 (base case, stops here)

# Fibonacci
def fib(n):
    if n <= 1:
        return n
    return fib(n-1) + fib(n-2)

print(fib(6))   # 8 (0,1,1,2,3,5,8)
\`\`\`

> **Warning**: Always have a base case! Without it → infinite recursion → \`RecursionError\``,
    tags: ["Recursion", "Functions", "Advanced"],
  },
  {
    id: 47,
    difficulty: "Easy",
    category: "Basics",
    question: "What is the purpose of the pass keyword?",
    answer: `**\`pass\`** is a placeholder statement that does nothing. It's used when Python requires some code syntactically, but you have nothing to write yet.

\`\`\`python
# Empty function (without pass → IndentationError)
def my_function():
    pass   # Placeholder — will add code later

# Empty class
class MyClass:
    pass

# Empty if block
x = 10
if x > 5:
    pass   # Handle later
else:
    print("x is small")

# Empty loop body
for i in range(5):
    pass   # Just iterate, do nothing
\`\`\`

**Common use cases:**
- Stub functions/classes during development
- To-do placeholders
- Exception blocks you want to silently ignore:
\`\`\`python
try:
    risky_code()
except SomeError:
    pass   # Ignore this error
\`\`\``,
    tags: ["pass", "Keywords", "Basics"],
  },
  {
    id: 48,
    difficulty: "Hard",
    category: "Advanced",
    question: "What are Python namespaces?",
    answer: `A **namespace** is a container that maps names (variables, functions) to objects. It's like a dictionary of \`name → object\` mappings.

**Types of namespaces:**

1. **Built-in** – \`print\`, \`len\`, \`range\` etc. (always available)
2. **Global** – Names defined at module/file level
3. **Local** – Names inside a function
4. **Enclosing** – Names in outer function (for nested functions)

Python searches in **LEGB order**: Local → Enclosing → Global → Built-in

\`\`\`python
x = "global"   # Global namespace

def outer():
    x = "enclosing"   # Enclosing namespace

    def inner():
        x = "local"   # Local namespace
        print(x)      # local (found in Local first)

    inner()
    print(x)   # enclosing

outer()
print(x)   # global
\`\`\`

\`\`\`python
# globals() and locals() show namespaces
x = 5
print(globals())   # Shows all global names
def foo():
    y = 10
    print(locals())   # {'y': 10}
\`\`\``,
    tags: ["Namespaces", "LEGB", "Scope", "Advanced"],
  },
  {
    id: 49,
    difficulty: "Hard",
    category: "OOP",
    question: "What are magic/dunder methods? (like __str__, __len__)",
    answer: `**Magic methods** (also called **dunder methods** — double underscore) are special methods that Python calls automatically for built-in operations.

\`\`\`python
class Book:
    def __init__(self, title, pages):
        self.title = title
        self.pages = pages

    def __str__(self):              # Called by print()
        return f"Book: {self.title}"

    def __len__(self):              # Called by len()
        return self.pages

    def __repr__(self):             # Developer-friendly representation
        return f"Book('{self.title}', {self.pages})"

    def __add__(self, other):       # Called by +
        return Book("Combined", self.pages + other.pages)

    def __eq__(self, other):        # Called by ==
        return self.title == other.title

b1 = Book("Python 101", 300)
b2 = Book("Django Guide", 200)

print(b1)         # Book: Python 101  (calls __str__)
print(len(b1))    # 300               (calls __len__)
combined = b1 + b2    # calls __add__
print(b1 == b2)   # False             (calls __eq__)
\`\`\`

**Common dunder methods:**
- \`__init__\` → constructor
- \`__str__\` → string representation
- \`__len__\` → length
- \`__add__\` → addition
- \`__eq__\` → equality check`,
    tags: ["Dunder", "Magic Methods", "OOP", "Advanced"],
  },
  {
    id: 50,
    difficulty: "Intermediate",
    category: "Basics",
    question: "What is the difference between Python 2 and Python 3?",
    answer: `Python 3 is the current version. Python 2 reached **end of life on January 1, 2020** and is no longer supported.

**Key Differences:**

| Feature | Python 2 | Python 3 |
|---------|----------|----------|
| print | \`print "Hello"\` | \`print("Hello")\` |
| Integer division | \`5/2 = 2\` | \`5/2 = 2.5\` |
| String type | ASCII by default | Unicode by default |
| \`range()\` | Returns a list | Returns an iterator |
| \`input()\` | Returns string + eval | Returns string only |
| \`long\` type | Has \`long\` type | Just \`int\` |

\`\`\`python
# Python 2
print "Hello"      # works
print(5 / 2)       # → 2 (integer division)

# Python 3
print("Hello")     # must use parentheses
print(5 / 2)       # → 2.5 (float division)
print(5 // 2)      # → 2  (use // for integer division)
\`\`\`

> **Always use Python 3.** Python 2 is dead. Most interviews and projects expect Python 3.`,
    tags: ["Python 2", "Python 3", "Difference"],
  },
];

export const PYTHON_QUESTIONS_2 = [
  {
    id: 51,
    difficulty: "Easy",
    category: "Basics",
    question: "What is the difference between == and is in Python?",
    answer: `This is a very common interview question!

- **\`==\`** checks if two values are **equal**
- **\`is\`** checks if two variables point to the **same object in memory**

\`\`\`python
a = [1, 2, 3]
b = [1, 2, 3]
c = a

print(a == b)   # True  → same values
print(a is b)   # False → different objects in memory
print(a is c)   # True  → c points to same object as a
\`\`\`

**With small integers (Python caches -5 to 256):**
\`\`\`python
x = 100
y = 100
print(x is y)   # True  → Python reuses same object for small ints

x = 1000
y = 1000
print(x is y)   # False → new objects created for large ints
\`\`\`

> **Rule**: Use \`==\` for value comparison. Use \`is\` only for checking \`None\`: \`if x is None\``,
    tags: ["==", "is", "Comparison", "Basics"],
  },
  {
    id: 52,
    difficulty: "Easy",
    category: "Basics",
    question: "What is the difference between mutable and immutable objects?",
    answer: `- **Mutable** → can be changed after creation
- **Immutable** → cannot be changed after creation

| Mutable | Immutable |
|---------|-----------|
| list | int |
| dict | float |
| set | str |
| bytearray | tuple |
| | bool |
| | frozenset |

\`\`\`python
# Mutable — list
my_list = [1, 2, 3]
my_list[0] = 99       # ✅ Works
print(my_list)         # [99, 2, 3]

# Immutable — string
my_str = "hello"
my_str[0] = "H"        # ❌ TypeError!

# Immutable — tuple
my_tuple = (1, 2, 3)
my_tuple[0] = 99       # ❌ TypeError!
\`\`\`

**Why does it matter?**
- Immutable objects are safer (no accidental changes)
- Immutable objects can be used as dictionary keys
- Mutable objects passed to functions CAN be modified inside`,
    tags: ["Mutable", "Immutable", "Basics"],
  },
  {
    id: 53,
    difficulty: "Easy",
    category: "Basics",
    question: "What are Python's scope rules? (LEGB rule)",
    answer: `When Python looks up a variable, it searches in this order — **LEGB**:

1. **L**ocal → Inside the current function
2. **E**nclosing → Inside outer functions (for nested functions)
3. **G**lobal → At the module/file level
4. **B**uilt-in → Python's built-in names (\`print\`, \`len\`, etc.)

\`\`\`python
x = "global"

def outer():
    x = "enclosing"

    def inner():
        x = "local"
        print(x)   # local (found in L first)

    inner()
    print(x)   # enclosing

outer()
print(x)   # global
\`\`\`

**\`global\` and \`nonlocal\` keywords:**
\`\`\`python
count = 0

def increment():
    global count      # Modify global variable
    count += 1

increment()
print(count)   # 1

def outer():
    n = 10
    def inner():
        nonlocal n    # Modify enclosing variable
        n += 1
    inner()
    print(n)   # 11
\`\`\``,
    tags: ["LEGB", "Scope", "global", "nonlocal"],
  },
  {
    id: 54,
    difficulty: "Intermediate",
    category: "Functions",
    question: "What is the difference between append() and extend() in a list?",
    answer: `Both add items to a list, but differently:

- **\`append()\`** → adds the argument as a **single item** (even if it's a list)
- **\`extend()\`** → adds each element of the iterable **individually**

\`\`\`python
a = [1, 2, 3]
b = [1, 2, 3]

# append — adds whole list as one item
a.append([4, 5])
print(a)   # [1, 2, 3, [4, 5]]  ← nested list!

# extend — unpacks and adds each item
b.extend([4, 5])
print(b)   # [1, 2, 3, 4, 5]   ← flat list ✅
\`\`\`

**Other list methods:**
\`\`\`python
lst = [3, 1, 2]
lst.insert(1, 99)   # Insert 99 at index 1 → [3, 99, 1, 2]
lst.sort()          # Sort in place
lst.reverse()       # Reverse in place
lst.pop()           # Remove and return last item
lst.pop(0)          # Remove and return item at index 0
lst.remove(99)      # Remove first occurrence of value
\`\`\``,
    tags: ["append", "extend", "List Methods"],
  },
  {
    id: 55,
    difficulty: "Intermediate",
    category: "Strings",
    question: "What are common string methods in Python?",
    answer: `Strings are immutable in Python. These methods return a **new string** — they don't modify the original.

\`\`\`python
s = "  Hello, World!  "

# Case
print(s.upper())         # "  HELLO, WORLD!  "
print(s.lower())         # "  hello, world!  "
print(s.title())         # "  Hello, World!  "

# Whitespace
print(s.strip())         # "Hello, World!"
print(s.lstrip())        # "Hello, World!  "
print(s.rstrip())        # "  Hello, World!"

# Search
print(s.find("World"))   # 9  (index) or -1 if not found
print(s.count("l"))      # 3
print("Hello" in s)      # True

# Replace & Split
print(s.replace("World", "Python"))   # "  Hello, Python!  "
words = "a,b,c".split(",")            # ["a", "b", "c"]
print("-".join(words))                 # "a-b-c"

# Check
print("123".isdigit())    # True
print("abc".isalpha())    # True
print("  ".isspace())     # True
print(s.startswith("  ")) # True
\`\`\``,
    tags: ["Strings", "String Methods"],
  },
  {
    id: 56,
    difficulty: "Intermediate",
    category: "Strings",
    question: "What are f-strings in Python?",
    answer: `**f-strings** (formatted string literals) are the modern and fastest way to format strings in Python 3.6+. Just add \`f\` before the quotes and use \`{}\` for expressions.

\`\`\`python
name = "Alice"
age = 20
marks = 95.678

# Old way (format)
print("Hello, {}! You are {} years old.".format(name, age))

# f-string (modern, recommended ✅)
print(f"Hello, {name}! You are {age} years old.")

# Expressions inside {}
print(f"Next year you'll be {age + 1}")    # 21
print(f"Marks: {marks:.2f}")               # 95.68 (2 decimal places)
print(f"Upper: {name.upper()}")            # ALICE

# Multiline f-string
info = (
    f"Name: {name}\n"
    f"Age: {age}\n"
    f"Marks: {marks:.1f}"
)
print(info)
\`\`\`

**3 ways to format strings:**
1. \`%\` formatting → old, avoid
2. \`.format()\` → ok
3. **f-strings** → best, use this ✅`,
    tags: ["f-strings", "String Formatting", "Python 3.6+"],
  },
  {
    id: 57,
    difficulty: "Intermediate",
    category: "Functions",
    question: "What is the difference between return and print in Python?",
    answer: `Very commonly confused by beginners!

- **\`print()\`** → displays output to the screen (for humans to see)
- **\`return\`** → sends a value back from the function (for the program to use)

\`\`\`python
# Using print — can't use the result
def add_print(a, b):
    print(a + b)   # shows on screen

result = add_print(3, 4)   # prints 7
print(result)               # None ← nothing was returned!

# Using return — can use the result
def add_return(a, b):
    return a + b   # sends value back

result = add_return(3, 4)  # no output yet
print(result)               # 7 ← now we print it
x = result * 2             # can use in calculations → 14
\`\`\`

> **Rule of thumb:**
> - Use \`return\` in functions — makes them reusable
> - Use \`print\` only for debugging or final output`,
    tags: ["return", "print", "Functions", "Basics"],
  },
  {
    id: 58,
    difficulty: "Intermediate",
    category: "Data Structures",
    question: "How do you remove duplicates from a list in Python?",
    answer: `Several ways to do it — interviewers love this question!

**Method 1: Using \`set()\`** (fastest, but loses order)
\`\`\`python
nums = [1, 2, 3, 2, 1, 4, 3]
unique = list(set(nums))
print(unique)   # [1, 2, 3, 4] — order may differ
\`\`\`

**Method 2: Using \`dict.fromkeys()\`** (preserves order, Python 3.7+)
\`\`\`python
nums = [1, 2, 3, 2, 1, 4, 3]
unique = list(dict.fromkeys(nums))
print(unique)   # [1, 2, 3, 4] — order preserved ✅
\`\`\`

**Method 3: Loop with seen set** (most control)
\`\`\`python
nums = [1, 2, 3, 2, 1, 4]
seen = set()
unique = []
for n in nums:
    if n not in seen:
        unique.append(n)
        seen.add(n)
print(unique)   # [1, 2, 3, 4]
\`\`\`

**Method 4: List comprehension**
\`\`\`python
unique = list({x: None for x in nums}.keys())
\`\`\`

> **Interview answer**: Mention \`set()\` first, then note it loses order, then offer \`dict.fromkeys()\` as order-preserving solution.`,
    tags: ["Duplicates", "List", "set", "Interview Trick"],
  },
  {
    id: 59,
    difficulty: "Intermediate",
    category: "Functions",
    question: "What are map(), filter(), and reduce() functions?",
    answer: `These are **functional programming** tools that work on iterables.

**\`map()\`** – Apply a function to every item
\`\`\`python
nums = [1, 2, 3, 4, 5]
squares = list(map(lambda x: x**2, nums))
print(squares)   # [1, 4, 9, 16, 25]
\`\`\`

**\`filter()\`** – Keep items where function returns True
\`\`\`python
nums = [1, 2, 3, 4, 5, 6]
evens = list(filter(lambda x: x % 2 == 0, nums))
print(evens)   # [2, 4, 6]
\`\`\`

**\`reduce()\`** – Reduce list to single value (needs import)
\`\`\`python
from functools import reduce
nums = [1, 2, 3, 4, 5]
total = reduce(lambda x, y: x + y, nums)
print(total)   # 15  (1+2+3+4+5)
\`\`\`

**Modern Pythonic alternative** (list comprehension):
\`\`\`python
squares = [x**2 for x in nums]          # replaces map
evens   = [x for x in nums if x % 2==0] # replaces filter
\`\`\`

> In interviews, mention both \`map/filter\` and their list comprehension equivalents.`,
    tags: ["map", "filter", "reduce", "Functional Programming"],
  },
  {
    id: 60,
    difficulty: "Intermediate",
    category: "Exception Handling",
    question: "How do you raise a custom exception in Python?",
    answer: `You can create your own exception classes by inheriting from the built-in \`Exception\` class.

\`\`\`python
# Define custom exception
class AgeError(Exception):
    def __init__(self, age, message="Age must be between 0 and 120"):
        self.age = age
        self.message = message
        super().__init__(self.message)

# Raise it
def set_age(age):
    if age < 0 or age > 120:
        raise AgeError(age)   # Raise custom exception
    return age

# Handle it
try:
    set_age(-5)
except AgeError as e:
    print(f"Invalid age! {e}")   # Invalid age! Age must be between 0 and 120
\`\`\`

**Using \`raise\` to re-raise:**
\`\`\`python
try:
    x = int("abc")
except ValueError:
    print("Caught it!")
    raise   # Re-raise the same exception
\`\`\`

> **Interview tip**: Custom exceptions make your code more readable and errors more meaningful.`,
    tags: ["Custom Exception", "raise", "Exception Handling"],
  },
  {
    id: 61,
    difficulty: "Intermediate",
    category: "File Handling",
    question: "How do you read and write files in Python?",
    answer: `Python has built-in \`open()\` function for file operations. Always use \`with\` statement — it auto-closes the file.

**Reading files:**
\`\`\`python
# Read entire file
with open("file.txt", "r") as f:
    content = f.read()
    print(content)

# Read line by line
with open("file.txt", "r") as f:
    for line in f:
        print(line.strip())

# Read all lines as list
with open("file.txt", "r") as f:
    lines = f.readlines()   # ["line1\\n", "line2\\n"]
\`\`\`

**Writing files:**
\`\`\`python
# Write (creates file, overwrites if exists)
with open("output.txt", "w") as f:
    f.write("Hello, World!\\n")
    f.write("Second line\\n")

# Append (adds to existing file)
with open("output.txt", "a") as f:
    f.write("New line added\\n")
\`\`\`

**File modes:**
| Mode | Description |
|------|-------------|
| \`"r"\` | Read (default) |
| \`"w"\` | Write (overwrite) |
| \`"a"\` | Append |
| \`"rb"\` | Read binary |
| \`"wb"\` | Write binary |`,
    tags: ["File Handling", "open", "read", "write"],
  },
  {
    id: 62,
    difficulty: "Intermediate",
    category: "Advanced Concepts",
    question: "What is the difference between a shallow copy and assignment (=)?",
    answer: `This trips up many beginners in interviews!

**Assignment (\`=\`)** → Both variables point to the **exact same object**
**Shallow copy** → Creates a **new object** but shares nested references
**Deep copy** → Creates a **fully independent** copy

\`\`\`python
import copy

original = [1, 2, [3, 4]]

# Assignment — same object!
assigned = original
assigned[0] = 99
print(original)   # [99, 2, [3, 4]] ← CHANGED!

# Shallow copy
original = [1, 2, [3, 4]]
shallow = original.copy()   # or copy.copy()
shallow[0] = 99
print(original)   # [1, 2, [3, 4]] ← top level OK

shallow[2][0] = 99          # nested list still shared
print(original)   # [1, 2, [99, 4]] ← nested CHANGED!

# Deep copy — fully independent
original = [1, 2, [3, 4]]
deep = copy.deepcopy(original)
deep[2][0] = 99
print(original)   # [1, 2, [3, 4]] ← UNCHANGED ✅
\`\`\``,
    tags: ["Assignment", "Shallow Copy", "Deep Copy", "Memory"],
  },
  {
    id: 63,
    difficulty: "Intermediate",
    category: "Advanced Concepts",
    question: "What is *args vs **kwargs — when to use which?",
    answer: `Both let you pass variable number of arguments to a function, but differently.

**\`*args\`** → Variable **positional** arguments → stored as **tuple**
**\`**kwargs\`** → Variable **keyword** arguments → stored as **dict**

\`\`\`python
def demo(*args, **kwargs):
    print("args:", args)
    print("kwargs:", kwargs)

demo(1, 2, 3, name="Alice", age=20)
# args: (1, 2, 3)
# kwargs: {'name': 'Alice', 'age': 20}
\`\`\`

**Real use cases:**

\`\`\`python
# *args — flexible sum function
def total(*args):
    return sum(args)

print(total(1, 2, 3))         # 6
print(total(10, 20, 30, 40))  # 100

# **kwargs — flexible config
def create_profile(**kwargs):
    for key, val in kwargs.items():
        print(f"{key}: {val}")

create_profile(name="Alice", city="Delhi", role="Dev")
\`\`\`

**Correct order in function signature:**
\`\`\`python
def func(normal, *args, **kwargs):
    pass
\`\`\`

> Regular args → \`*args\` → \`**kwargs\` — always in this order!`,
    tags: ["args", "kwargs", "Functions"],
  },
  {
    id: 64,
    difficulty: "Intermediate",
    category: "OOP",
    question: "What is method overriding in Python?",
    answer: `**Method overriding** is when a child class provides its own version of a method that already exists in the parent class.

\`\`\`python
class Animal:
    def speak(self):
        return "Some generic sound"

    def describe(self):
        return f"I am an animal and I say: {self.speak()}"

class Dog(Animal):
    def speak(self):           # Override parent method
        return "Woof!"

class Cat(Animal):
    def speak(self):           # Override parent method
        return "Meow!"

d = Dog()
c = Cat()

print(d.speak())      # Woof!
print(c.speak())      # Meow!
print(d.describe())   # I am an animal and I say: Woof!
\`\`\`

**Using \`super()\` to call parent method:**
\`\`\`python
class Dog(Animal):
    def speak(self):
        parent_sound = super().speak()   # Call Animal's speak
        return f"Dog overrides '{parent_sound}' with: Woof!"

print(Dog().speak())
# Dog overrides 'Some generic sound' with: Woof!
\`\`\``,
    tags: ["Method Overriding", "OOP", "Inheritance", "super"],
  },
  {
    id: 65,
    difficulty: "Intermediate",
    category: "OOP",
    question: "What is the difference between instance, class, and static methods?",
    answer: `Three types of methods in a Python class, each with a different purpose.

\`\`\`python
class MyClass:

    class_var = 0   # Shared by all instances

    def instance_method(self):
        # Access instance (self) and class
        print(f"Instance method, self = {self}")

    @classmethod
    def class_method(cls):
        # Access only class, NOT instance
        cls.class_var += 1
        print(f"Class method, class_var = {cls.class_var}")

    @staticmethod
    def static_method():
        # No access to instance or class
        print("Static method — just a utility function")

obj = MyClass()
obj.instance_method()    # needs object
MyClass.class_method()   # called on class
MyClass.static_method()  # called on class
\`\`\`

| Type | Decorator | First param | Access |
|------|-----------|-------------|--------|
| Instance | none | \`self\` | instance + class |
| Class | \`@classmethod\` | \`cls\` | class only |
| Static | \`@staticmethod\` | none | neither |

> **Use static methods** for utility/helper functions that logically belong to a class but don't need instance/class data.`,
    tags: ["Instance Method", "Class Method", "Static Method", "OOP"],
  },
  {
    id: 66,
    difficulty: "Intermediate",
    category: "OOP",
    question: "What is multiple inheritance? What is MRO?",
    answer: `**Multiple inheritance** means a class can inherit from **more than one parent class**.

\`\`\`python
class Father:
    def speak(self):
        return "Father speaking"

    def skill(self):
        return "Gardening"

class Mother:
    def speak(self):
        return "Mother speaking"

    def cook(self):
        return "Cooking"

class Child(Father, Mother):   # Multiple inheritance
    pass

c = Child()
print(c.cook())    # Cooking   (from Mother)
print(c.skill())   # Gardening (from Father)
print(c.speak())   # Father speaking ← MRO decides this!
\`\`\`

**MRO (Method Resolution Order)** – the order Python searches for methods:
\`\`\`python
print(Child.__mro__)
# (<class 'Child'>, <class 'Father'>, <class 'Mother'>, <class 'object'>)
\`\`\`

Python uses **C3 linearization** algorithm for MRO. It goes:
1. Child first
2. Then left-to-right through parent classes
3. Then \`object\` (base of all classes)

> **Diamond problem**: Multiple inheritance can cause ambiguity — MRO solves this in Python.`,
    tags: ["Multiple Inheritance", "MRO", "OOP"],
  },
  {
    id: 67,
    difficulty: "Intermediate",
    category: "Advanced Concepts",
    question: "What is a context manager and the with statement?",
    answer: `A **context manager** automatically handles setup and teardown (like opening/closing files). The \`with\` statement uses it.

**Most common use — files:**
\`\`\`python
# Without with — must manually close
f = open("file.txt", "r")
data = f.read()
f.close()   # easy to forget!

# With with — auto closes ✅
with open("file.txt", "r") as f:
    data = f.read()
# File is automatically closed here, even if error occurs
\`\`\`

**Creating a custom context manager:**
\`\`\`python
class Timer:
    import time

    def __enter__(self):
        import time
        self.start = time.time()
        return self

    def __exit__(self, *args):
        import time
        elapsed = time.time() - self.start
        print(f"Time: {elapsed:.3f}s")

with Timer():
    total = sum(range(1_000_000))
# Time: 0.045s
\`\`\`

**Using \`contextlib\` (simpler way):**
\`\`\`python
from contextlib import contextmanager

@contextmanager
def managed_resource():
    print("Setup")
    yield
    print("Teardown")

with managed_resource():
    print("Doing work")
\`\`\``,
    tags: ["Context Manager", "with", "__enter__", "__exit__"],
  },
  {
    id: 68,
    difficulty: "Intermediate",
    category: "Advanced Concepts",
    question: "What is the difference between __str__ and __repr__?",
    answer: `Both are dunder methods that return a string representation of an object, but for different audiences.

- **\`__str__\`** → Human-friendly, used by \`print()\` and \`str()\`
- **\`__repr__\`** → Developer-friendly, used in console/debugging, should be unambiguous

\`\`\`python
class Point:
    def __init__(self, x, y):
        self.x = x
        self.y = y

    def __str__(self):
        return f"Point({self.x}, {self.y})"   # for users

    def __repr__(self):
        return f"Point(x={self.x}, y={self.y})"  # for devs

p = Point(3, 4)

print(p)       # Point(3, 4)         ← uses __str__
print(repr(p)) # Point(x=3, y=4)    ← uses __repr__
\`\`\`

**If only \`__repr__\` is defined, \`print()\` uses it as fallback:**
\`\`\`python
class Demo:
    def __repr__(self):
        return "Demo object"

d = Demo()
print(d)   # Demo object ← __repr__ used as fallback
\`\`\`

> **Best practice**: Always define \`__repr__\`. Define \`__str__\` when you want a different, friendlier output.`,
    tags: ["__str__", "__repr__", "Dunder Methods", "OOP"],
  },
  {
    id: 69,
    difficulty: "Hard",
    category: "Advanced Concepts",
    question: "What are Python closures?",
    answer: `A **closure** is a function that remembers the variables from its enclosing scope even after the outer function has finished executing.

\`\`\`python
def outer(msg):
    def inner():
        print(msg)   # 'msg' is from outer scope — remembered!
    return inner     # Return function, not the result

greet = outer("Hello, Alice!")
greet()   # Hello, Alice!  ← still remembers 'msg'!

# outer() is done, but inner() still has access to msg
\`\`\`

**Practical example — counter:**
\`\`\`python
def make_counter():
    count = 0

    def increment():
        nonlocal count
        count += 1
        return count

    return increment

counter = make_counter()
print(counter())   # 1
print(counter())   # 2
print(counter())   # 3
\`\`\`

**3 conditions for a closure:**
1. Must be a nested function
2. Inner function must refer to a variable from the outer function
3. Outer function must return the inner function

> Closures are the foundation of **decorators**!`,
    tags: ["Closures", "Nested Functions", "Advanced"],
  },
  {
    id: 70,
    difficulty: "Hard",
    category: "Advanced Concepts",
    question: "What is monkey patching in Python?",
    answer: `**Monkey patching** means dynamically modifying or replacing code (a class or module) at runtime, without changing the original source code.

\`\`\`python
class Dog:
    def bark(self):
        return "Woof!"

# Monkey patch — replace bark() at runtime
def new_bark(self):
    return "SUPER WOOF!!!"

Dog.bark = new_bark   # Patch the method

d = Dog()
print(d.bark())   # SUPER WOOF!!! ← original replaced
\`\`\`

**Common use in testing (mock objects):**
\`\`\`python
import requests

# Don't actually hit the API during tests
def fake_get(url):
    class FakeResponse:
        status_code = 200
        text = "Mocked response"
    return FakeResponse()

requests.get = fake_get   # Monkey patch

response = requests.get("https://api.example.com")
print(response.text)   # Mocked response
\`\`\`

**Pros:** Useful for testing, quick fixes
**Cons:** Can make code hard to debug, unexpected behavior, bad practice in production

> Python libraries like \`unittest.mock\` provide a cleaner way to do this.`,
    tags: ["Monkey Patching", "Advanced", "Testing"],
  },
  {
    id: 71,
    difficulty: "Hard",
    category: "Advanced Concepts",
    question: "What are Python metaclasses?",
    answer: `A **metaclass** is the class of a class — it controls how classes are created. Just like a class creates objects, a metaclass creates classes.

\`\`\`python
# type() is the default metaclass
print(type(int))     # <class 'type'>
print(type(str))     # <class 'type'>
print(type(list))    # <class 'type'>

# type() can also CREATE a class dynamically
MyClass = type("MyClass", (object,), {"x": 10, "greet": lambda self: "Hello!"})
obj = MyClass()
print(obj.x)       # 10
print(obj.greet()) # Hello!
\`\`\`

**Custom metaclass:**
\`\`\`python
class UpperMeta(type):
    def __new__(mcs, name, bases, namespace):
        # Convert all method names to uppercase
        new_namespace = {
            k.upper() if not k.startswith("__") else k: v
            for k, v in namespace.items()
        }
        return super().__new__(mcs, name, bases, new_namespace)

class MyClass(metaclass=UpperMeta):
    def greet(self):   # becomes GREET
        return "Hello"

obj = MyClass()
print(obj.GREET())   # Hello
\`\`\`

> **In interviews**: Just say — "Metaclass is a class whose instances are classes. \`type\` is the default metaclass." Used in ORMs like Django Models.`,
    tags: ["Metaclass", "type", "Advanced", "OOP"],
  },
  {
    id: 72,
    difficulty: "Hard",
    category: "Advanced Concepts",
    question: "What is memoization and how to implement it in Python?",
    answer: `**Memoization** is an optimization technique — storing the results of expensive function calls and returning the cached result when the same inputs occur again.

**Without memoization (slow):**
\`\`\`python
def fib(n):
    if n <= 1:
        return n
    return fib(n-1) + fib(n-2)   # Recalculates same values repeatedly

# fib(40) → ~2 billion function calls 🐢
\`\`\`

**With manual memoization (fast):**
\`\`\`python
cache = {}

def fib(n):
    if n in cache:
        return cache[n]   # Return cached result
    if n <= 1:
        return n
    result = fib(n-1) + fib(n-2)
    cache[n] = result     # Store result
    return result

# fib(40) → ~80 function calls 🚀
\`\`\`

**Best way — using \`functools.lru_cache\`:**
\`\`\`python
from functools import lru_cache

@lru_cache(maxsize=None)   # Cache all results
def fib(n):
    if n <= 1:
        return n
    return fib(n-1) + fib(n-2)

print(fib(100))   # instant! ✅
print(fib.cache_info())   # shows hits, misses, size
\`\`\`

> \`lru_cache\` = Least Recently Used cache. Very common in interviews!`,
    tags: ["Memoization", "lru_cache", "Optimization", "Advanced"],
  },
  {
    id: 73,
    difficulty: "Intermediate",
    category: "Advanced Concepts",
    question: "What is the difference between @staticmethod and @classmethod?",
    answer: `Both are method decorators, but they serve different purposes.

| Feature | \`@staticmethod\` | \`@classmethod\` |
|---------|-----------------|---------------|
| Access to \`self\` | ❌ No | ❌ No |
| Access to class | ❌ No | ✅ Yes (via \`cls\`) |
| Can modify class state | ❌ No | ✅ Yes |
| Called on | class or instance | class or instance |

\`\`\`python
class Temperature:
    unit = "Celsius"

    def __init__(self, temp):
        self.temp = temp

    @classmethod
    def set_unit(cls, unit):
        cls.unit = unit        # Modifies class variable

    @staticmethod
    def celsius_to_fahrenheit(c):
        return c * 9/5 + 32   # Pure utility, no class/instance needed

# Class method usage
Temperature.set_unit("Fahrenheit")
print(Temperature.unit)   # Fahrenheit

# Static method usage
print(Temperature.celsius_to_fahrenheit(100))   # 212.0
\`\`\`

> **Use \`@classmethod\`** as alternative constructors (e.g., \`Date.from_string("2024-01-15")\`).
> **Use \`@staticmethod\`** for utility functions related to the class.`,
    tags: ["staticmethod", "classmethod", "Decorators", "OOP"],
  },
  {
    id: 74,
    difficulty: "Intermediate",
    category: "Advanced Concepts",
    question: "What is a property decorator in Python?",
    answer: `**\`@property\`** lets you access a method like an attribute (without calling it with \`()\`). It's used to add validation or computed values to class attributes.

\`\`\`python
class Circle:
    def __init__(self, radius):
        self._radius = radius   # private

    @property
    def radius(self):           # getter
        return self._radius

    @radius.setter
    def radius(self, value):    # setter with validation
        if value < 0:
            raise ValueError("Radius cannot be negative!")
        self._radius = value

    @property
    def area(self):             # computed property (no setter)
        return 3.14 * self._radius ** 2

c = Circle(5)
print(c.radius)   # 5    ← accessed like attribute, not c.radius()
print(c.area)     # 78.5 ← computed on the fly

c.radius = 10     # Uses setter
print(c.area)     # 314.0

c.radius = -1     # ValueError: Radius cannot be negative!
\`\`\`

> **Benefit**: You can add validation/logic without changing how the attribute is accessed externally.`,
    tags: ["@property", "getter", "setter", "OOP"],
  },
  {
    id: 75,
    difficulty: "Hard",
    category: "Advanced Concepts",
    question: "What is asyncio and async/await in Python?",
    answer: `**asyncio** allows Python to run code **asynchronously** — doing other tasks while waiting (for I/O, network, etc.) instead of blocking.

\`\`\`python
import asyncio

# Normal (blocking)
import time
def fetch_data():
    time.sleep(2)   # Program stops for 2s
    return "data"

# Async (non-blocking) ✅
async def fetch_data():
    await asyncio.sleep(2)   # Pause, but allow other tasks to run
    return "data"

async def main():
    print("Fetching...")
    result = await fetch_data()
    print(result)

asyncio.run(main())
\`\`\`

**Running multiple tasks concurrently:**
\`\`\`python
import asyncio

async def task(name, delay):
    await asyncio.sleep(delay)
    print(f"{name} done!")

async def main():
    # Run all tasks at same time — total ~3s not 1+2+3=6s!
    await asyncio.gather(
        task("Task 1", 1),
        task("Task 2", 2),
        task("Task 3", 3),
    )

asyncio.run(main())
\`\`\`

> **Use async/await for**: web requests, database queries, file I/O — anything that involves waiting.`,
    tags: ["asyncio", "async", "await", "Asynchronous", "Advanced"],
  },
  {
    id: 76,
    difficulty: "Intermediate",
    category: "Data Structures",
    question: "How do you sort a list of dictionaries in Python?",
    answer: `Very common interview question! Use \`sorted()\` with a \`key\` argument.

\`\`\`python
students = [
    {"name": "Alice", "age": 22, "marks": 90},
    {"name": "Bob",   "age": 20, "marks": 85},
    {"name": "Carol", "age": 21, "marks": 92},
]

# Sort by age
by_age = sorted(students, key=lambda s: s["age"])
print(by_age[0]["name"])   # Bob (youngest)

# Sort by marks (descending)
by_marks = sorted(students, key=lambda s: s["marks"], reverse=True)
print(by_marks[0]["name"])   # Carol (highest marks)

# Sort by multiple keys (age, then marks)
multi = sorted(students, key=lambda s: (s["age"], s["marks"]))
\`\`\`

**Using \`operator.itemgetter\` (faster for large data):**
\`\`\`python
from operator import itemgetter

by_name = sorted(students, key=itemgetter("name"))
\`\`\`

**In-place sort:**
\`\`\`python
students.sort(key=lambda s: s["age"])   # Modifies original list
\`\`\`

> \`sorted()\` returns new list. \`.sort()\` modifies in place. Both accept \`key\` and \`reverse\` params.`,
    tags: ["Sort", "Dictionary", "lambda", "sorted"],
  },
  {
    id: 77,
    difficulty: "Intermediate",
    category: "Strings",
    question: "How do you reverse a string in Python?",
    answer: `Multiple ways — interviewers love to ask this!

**Method 1: Slicing (most Pythonic ✅)**
\`\`\`python
s = "hello"
reversed_s = s[::-1]
print(reversed_s)   # "olleh"
\`\`\`

**Method 2: \`reversed()\` + join**
\`\`\`python
s = "hello"
reversed_s = "".join(reversed(s))
print(reversed_s)   # "olleh"
\`\`\`

**Method 3: Loop**
\`\`\`python
s = "hello"
result = ""
for char in s:
    result = char + result
print(result)   # "olleh"
\`\`\`

**Check if palindrome:**
\`\`\`python
def is_palindrome(s):
    s = s.lower().replace(" ", "")
    return s == s[::-1]

print(is_palindrome("racecar"))   # True
print(is_palindrome("A man a plan a canal Panama"))  # True
print(is_palindrome("hello"))     # False
\`\`\`

> **In interview**: Use slicing \`[::-1]\` — it's the shortest and most Pythonic.`,
    tags: ["String Reversal", "Slicing", "Palindrome", "Strings"],
  },
  {
    id: 78,
    difficulty: "Intermediate",
    category: "Advanced Concepts",
    question: "What is zip() function in Python?",
    answer: `\`zip()\` combines multiple iterables element-by-element into tuples. It stops at the shortest iterable.

\`\`\`python
names  = ["Alice", "Bob", "Carol"]
scores = [90, 85, 92]
grades = ["A", "B", "A"]

# Zip two lists
for name, score in zip(names, scores):
    print(f"{name}: {score}")
# Alice: 90
# Bob: 85
# Carol: 92

# Zip three lists
combined = list(zip(names, scores, grades))
print(combined)
# [('Alice', 90, 'A'), ('Bob', 85, 'B'), ('Carol', 92, 'A')]
\`\`\`

**Unzip with \`*\`:**
\`\`\`python
pairs = [(1, "a"), (2, "b"), (3, "c")]
nums, letters = zip(*pairs)
print(nums)    # (1, 2, 3)
print(letters) # ('a', 'b', 'c')
\`\`\`

**Create dictionary from two lists:**
\`\`\`python
keys   = ["name", "age", "city"]
values = ["Alice", 20, "Delhi"]
d = dict(zip(keys, values))
print(d)   # {'name': 'Alice', 'age': 20, 'city': 'Delhi'}
\`\`\``,
    tags: ["zip", "Built-in Functions", "Iterables"],
  },
  {
    id: 79,
    difficulty: "Intermediate",
    category: "Advanced Concepts",
    question: "What is enumerate() in Python?",
    answer: `\`enumerate()\` adds a counter to an iterable so you get both the **index** and **value** while looping.

\`\`\`python
fruits = ["apple", "banana", "mango"]

# Without enumerate (old way)
for i in range(len(fruits)):
    print(i, fruits[i])

# With enumerate (Pythonic ✅)
for i, fruit in enumerate(fruits):
    print(i, fruit)
# 0 apple
# 1 banana
# 2 mango

# Start from a different index
for i, fruit in enumerate(fruits, start=1):
    print(f"{i}. {fruit}")
# 1. apple
# 2. banana
# 3. mango
\`\`\`

**Practical uses:**
\`\`\`python
# Find index of specific items
words = ["cat", "dog", "cat", "bird"]
cat_indices = [i for i, w in enumerate(words) if w == "cat"]
print(cat_indices)   # [0, 2]

# Numbered list
tasks = ["Code", "Test", "Deploy"]
for num, task in enumerate(tasks, 1):
    print(f"Step {num}: {task}")
\`\`\`

> **Interview rule**: Whenever you need both index and value in a loop, use \`enumerate()\`.`,
    tags: ["enumerate", "Built-in Functions", "Loops"],
  },
  {
    id: 80,
    difficulty: "Hard",
    category: "Advanced Concepts",
    question: "What are Python data classes? (@dataclass)",
    answer: `**Data classes** (Python 3.7+) are a shortcut for creating classes that mainly store data. They auto-generate \`__init__\`, \`__repr__\`, and \`__eq__\` for you.

**Without dataclass (verbose):**
\`\`\`python
class Student:
    def __init__(self, name, age, marks):
        self.name = name
        self.age = age
        self.marks = marks

    def __repr__(self):
        return f"Student(name={self.name}, age={self.age}, marks={self.marks})"

    def __eq__(self, other):
        return self.name == other.name and self.age == other.age
\`\`\`

**With @dataclass (clean ✅):**
\`\`\`python
from dataclasses import dataclass, field

@dataclass
class Student:
    name: str
    age: int
    marks: float = 0.0   # default value

    def grade(self):      # Can still add methods
        return "A" if self.marks >= 90 else "B"

s1 = Student("Alice", 20, 95)
s2 = Student("Bob", 21)

print(s1)           # Student(name='Alice', age=20, marks=95)
print(s1 == s2)     # False (auto __eq__)
print(s1.grade())   # A
\`\`\`

**Frozen dataclass (immutable):**
\`\`\`python
@dataclass(frozen=True)
class Point:
    x: float
    y: float
# point.x = 5 → FrozenInstanceError
\`\`\``,
    tags: ["dataclass", "Python 3.7+", "OOP", "Advanced"],
  },
];

export const JAVA_QUESTIONS = [
  {
    id: 1,
    difficulty: "Easy",
    category: "Core Java",
    question: "What is Java and what are its main features?",
    answer: `Java is a high-level, object-oriented, platform-independent programming language developed by Sun Microsystems (now owned by Oracle) in 1995.

**Main Features of Java:**

1. **Platform Independent** — Java code compiles to bytecode which runs on any platform via the JVM (Write Once, Run Anywhere)
2. **Object-Oriented** — Everything in Java is based on objects and classes
3. **Simple** — Java has a clean syntax, inspired by C++ but with complexity removed
4. **Secure** — Java has a security manager and no pointer manipulation
5. **Robust** — Strong memory management, exception handling, and type checking
6. **Multithreaded** — Java supports concurrent programming via threads
7. **High Performance** — JIT (Just-In-Time) compiler improves runtime performance
8. **Distributed** — Supports networking with built-in libraries (RMI, JDBC)

**How Java works:**
\`\`\`
Source Code (.java) → Compiler (javac) → Bytecode (.class) → JVM → Output
\`\`\``,
    tags: ["Java", "Features", "Introduction"],
  },
  {
    id: 2,
    difficulty: "Easy",
    category: "Core Java",
    question: "What is the difference between JDK, JRE, and JVM?",
    answer: `These three are different components of the Java ecosystem:

**JVM (Java Virtual Machine):**
- The engine that actually runs Java bytecode
- Converts bytecode to machine-specific code
- Provides memory management (Garbage Collection)
- Platform-specific (different JVM for Windows, Linux, Mac)

**JRE (Java Runtime Environment):**
- JVM + libraries needed to run Java programs
- Used to **run** Java applications
- Does NOT include development tools like compiler

**JDK (Java Development Kit):**
- JRE + development tools (javac compiler, debugger, javadoc, etc.)
- Used to **develop and compile** Java programs
- Includes everything you need to write, compile, and run Java

**Simple analogy:**
| Component | Role |
|-----------|------|
| JVM | The engine |
| JRE | The car (engine + body) |
| JDK | The full garage (car + tools) |

> **Rule**: To develop → install JDK. To only run → install JRE.`,
    tags: ["JDK", "JRE", "JVM", "Core Java"],
  },
  {
    id: 3,
    difficulty: "Easy",
    category: "OOP",
    question: "What are the four pillars of Object-Oriented Programming in Java?",
    answer: `The four pillars of OOP are the foundation of Java's design:

**1. Encapsulation**
- Wrapping data (variables) and methods inside a class
- Use \`private\` fields and \`public\` getters/setters
\`\`\`java
class Student {
    private int age;  // hidden
    public int getAge() { return age; }
    public void setAge(int a) { age = a; }
}
\`\`\`

**2. Inheritance**
- A child class acquires properties of a parent class using \`extends\`
\`\`\`java
class Animal { void eat() { System.out.println("eating"); } }
class Dog extends Animal { void bark() { System.out.println("barking"); } }
\`\`\`

**3. Polymorphism**
- One interface, multiple implementations
- **Compile-time**: Method Overloading (same name, different params)
- **Runtime**: Method Overriding (child class redefines parent method)

**4. Abstraction**
- Hiding implementation details, showing only functionality
- Achieved via \`abstract\` classes and \`interfaces\`
\`\`\`java
abstract class Shape {
    abstract double area();  // no implementation
}
\`\`\``,
    tags: ["OOP", "Encapsulation", "Inheritance", "Polymorphism", "Abstraction"],
  },
  {
    id: 4,
    difficulty: "Easy",
    category: "Core Java",
    question: "What is the difference between == and .equals() in Java?",
    answer: `This is a very common Java interview question about reference vs value comparison.

**== operator:**
- Compares **memory references** (addresses), not actual content
- For primitives: compares values directly
- For objects: checks if both point to the same object in memory

**\`.equals()\` method:**
- Compares the **actual content/value** of objects
- Defined in \`Object\` class, can be overridden
- String, Integer, etc. override it to compare content

\`\`\`java
String s1 = new String("hello");
String s2 = new String("hello");

System.out.println(s1 == s2);        // false (different objects in memory)
System.out.println(s1.equals(s2));   // true  (same content)

// String pool
String s3 = "hello";
String s4 = "hello";
System.out.println(s3 == s4);        // true (same pool reference)
\`\`\`

> **Rule of thumb**: Always use \`.equals()\` to compare String and Object content. Use \`==\` only for primitives or intentional reference checks.`,
    tags: ["equals", "==", "String", "Comparison"],
  },
  {
    id: 5,
    difficulty: "Easy",
    category: "Core Java",
    question: "What is the difference between int and Integer in Java?",
    answer: `\`int\` is a primitive type and \`Integer\` is a Wrapper class — this is Java's autoboxing concept.

**int (Primitive):**
- Stores raw numeric value directly in stack memory
- Cannot be null
- No methods available
- Faster performance

**Integer (Wrapper Class):**
- Object that wraps an \`int\` value in heap memory
- Can be null
- Has useful methods: \`Integer.parseInt()\`, \`compareTo()\`, etc.
- Required for Collections (List, Map only work with objects)

\`\`\`java
int a = 5;           // primitive
Integer b = 5;       // wrapper object

// Autoboxing: int → Integer automatically
Integer x = 10;      // compiler converts int to Integer

// Unboxing: Integer → int automatically
int y = x;           // compiler converts Integer to int

// Null check - only Integer can be null
Integer z = null;    // valid
// int w = null;     // INVALID — compilation error
\`\`\`

**Use Integer when:** using Collections, need null value, or need utility methods.`,
    tags: ["int", "Integer", "Wrapper Class", "Autoboxing"],
  },
  {
    id: 6,
    difficulty: "Easy",
    category: "Core Java",
    question: "What is a String Pool in Java?",
    answer: `The **String Pool** (also called String Constant Pool or Intern Pool) is a special memory area inside the Heap where Java stores String literals to save memory.

**How it works:**
- When you create a String literal, Java first checks the pool
- If the same value exists, it returns the existing reference
- If not, it creates a new String object in the pool

\`\`\`java
// String literal — uses pool
String s1 = "hello";
String s2 = "hello";
System.out.println(s1 == s2);   // true — same pool object

// new String() — bypasses pool, creates new object in heap
String s3 = new String("hello");
String s4 = new String("hello");
System.out.println(s3 == s4);   // false — different heap objects

// intern() — manually push to pool
String s5 = s3.intern();
System.out.println(s1 == s5);   // true — s5 now points to pool
\`\`\`

**Benefits of String Pool:**
- Memory efficiency (same string not stored multiple times)
- Faster comparison via == for literals
- Strings are immutable, making pooling safe`,
    tags: ["String Pool", "Memory", "String"],
  },
  {
    id: 7,
    difficulty: "Easy",
    category: "OOP",
    question: "What is the difference between an abstract class and an interface in Java?",
    answer: `Both are used for abstraction but they have key differences:

| Feature | Abstract Class | Interface |
|---------|---------------|-----------|
| Keyword | \`abstract class\` | \`interface\` |
| Methods | Can have abstract + concrete methods | Only abstract by default (Java 8+: default/static allowed) |
| Variables | Can have instance variables | Only \`public static final\` constants |
| Constructor | Yes (can have) | No constructor |
| Inheritance | \`extends\` (single) | \`implements\` (multiple) |
| Access Modifiers | Any (public, private, etc.) | Methods are public by default |
| When to use | Shared code among related classes | Define contract for unrelated classes |

\`\`\`java
// Abstract class
abstract class Animal {
    String name;
    abstract void sound();  // must override
    void breathe() { System.out.println("breathing"); }  // concrete
}

// Interface
interface Flyable {
    void fly();  // abstract by default
    default void land() { System.out.println("landing"); }  // Java 8+
}

class Bird extends Animal implements Flyable {
    void sound() { System.out.println("chirp"); }
    public void fly() { System.out.println("flying"); }
}
\`\`\`

> **Key rule**: Use abstract class for IS-A relationship with shared state. Use interface for CAN-DO behavior (multiple inheritance).`,
    tags: ["Abstract Class", "Interface", "OOP"],
  },
  {
    id: 8,
    difficulty: "Easy",
    category: "Core Java",
    question: "What is the difference between final, finally, and finalize in Java?",
    answer: `These three are completely different concepts — a classic Java interview trap!

**final (keyword):**
- Applied to variables, methods, or classes
- \`final variable\` → value cannot be changed (constant)
- \`final method\` → cannot be overridden
- \`final class\` → cannot be extended (e.g., String class is final)

\`\`\`java
final int MAX = 100;       // constant
// MAX = 200;              // Error!

final class Immutable {}   // cannot extend
\`\`\`

**finally (block):**
- Used with try-catch blocks
- Always executes whether exception occurs or not
- Used for cleanup (closing files, DB connections)

\`\`\`java
try {
    int result = 10 / 0;
} catch (Exception e) {
    System.out.println("Exception caught");
} finally {
    System.out.println("Always runs");  // always executes
}
\`\`\`

**finalize (method):**
- Called by Garbage Collector before destroying an object
- Used for cleanup operations before GC
- Deprecated in Java 9+, not recommended

\`\`\`java
protected void finalize() {
    System.out.println("Object being destroyed");
}
\`\`\``,
    tags: ["final", "finally", "finalize", "Keywords"],
  },
  {
    id: 9,
    difficulty: "Easy",
    category: "Core Java",
    question: "What is Garbage Collection in Java?",
    answer: `**Garbage Collection (GC)** is Java's automatic memory management system that reclaims memory occupied by objects that are no longer referenced.

**How it works:**
1. Java objects are stored in the **Heap** memory
2. When an object has no more references, it becomes eligible for GC
3. The Garbage Collector runs in the background and destroys unreachable objects
4. This frees up memory automatically — no manual \`free()\` like in C/C++

**Key Points:**
- GC is automatic — you don't control when it runs
- You can suggest GC with \`System.gc()\` but cannot force it
- JVM decides the best time to collect garbage
- Uses algorithms like: Mark-and-Sweep, Generational GC, G1 GC

\`\`\`java
Student s1 = new Student("Alice");  // object created in heap
Student s2 = new Student("Bob");

s1 = s2;  // "Alice" object now has no reference → eligible for GC

s2 = null;  // "Bob" object now unreferenced → also eligible for GC

System.gc();  // suggest GC (not guaranteed to run immediately)
\`\`\`

**Benefit:** Prevents memory leaks without manual memory management.`,
    tags: ["Garbage Collection", "Memory Management", "JVM"],
  },
  {
    id: 10,
    difficulty: "Easy",
    category: "Core Java",
    question: "What is the difference between Stack and Heap memory in Java?",
    answer: `Java uses two main memory areas for different purposes:

**Stack Memory:**
- Stores method calls, local variables, and references
- Follows LIFO (Last In, First Out) order
- Memory is automatically allocated and deallocated when method returns
- Each thread has its own stack
- Fast access but limited size
- Throws \`StackOverflowError\` if full (e.g., infinite recursion)

**Heap Memory:**
- Stores objects and instance variables
- Shared across all threads
- Memory managed by Garbage Collector
- Larger in size than stack
- Throws \`OutOfMemoryError\` if full

\`\`\`java
public void method() {
    int x = 10;           // stored in Stack (local variable)
    Student s = new Student();  // 's' reference in Stack, 
                                // Student object in Heap
}
\`\`\`

| Feature | Stack | Heap |
|---------|-------|------|
| Stores | Primitives, references | Objects |
| Access | Very fast | Slower |
| Size | Small | Large |
| Management | Automatic | Garbage Collector |
| Thread | Per-thread | Shared |`,
    tags: ["Stack", "Heap", "Memory", "JVM"],
  },
  {
    id: 11,
    difficulty: "Intermediate",
    category: "OOP",
    question: "What is method overloading vs method overriding in Java?",
    answer: `Both are forms of polymorphism but work differently:

**Method Overloading (Compile-time Polymorphism):**
- Same method name, different parameters (type/number)
- Happens within the same class
- Resolved at **compile time**
- Return type can be different

\`\`\`java
class Calculator {
    int add(int a, int b) { return a + b; }
    double add(double a, double b) { return a + b; }
    int add(int a, int b, int c) { return a + b + c; }
}
\`\`\`

**Method Overriding (Runtime Polymorphism):**
- Child class redefines a method from parent class
- Same name, same parameters, same return type
- Resolved at **runtime**
- Enables dynamic dispatch

\`\`\`java
class Animal {
    void sound() { System.out.println("Generic sound"); }
}
class Dog extends Animal {
    @Override
    void sound() { System.out.println("Bark"); }  // overrides parent
}

Animal a = new Dog();
a.sound();  // prints "Bark" — runtime decision
\`\`\`

| Feature | Overloading | Overriding |
|---------|-------------|------------|
| Class | Same | Parent-Child |
| Parameters | Must differ | Must be same |
| Polymorphism | Compile-time | Runtime |
| \`@Override\` | Not needed | Recommended |`,
    tags: ["Overloading", "Overriding", "Polymorphism"],
  },
  {
    id: 12,
    difficulty: "Intermediate",
    category: "Collections",
    question: "What is the difference between ArrayList and LinkedList in Java?",
    answer: `Both implement the \`List\` interface but have different internal structures and performance characteristics:

**ArrayList:**
- Backed by a **dynamic array**
- Fast random access: O(1) for \`get(index)\`
- Slow insertion/deletion in middle: O(n) — shifts elements
- Less memory overhead
- Better for read-heavy operations

**LinkedList:**
- Backed by a **doubly linked list**
- Slow random access: O(n) — must traverse from head
- Fast insertion/deletion at beginning/end: O(1)
- More memory (stores next & prev pointers per node)
- Better for write-heavy operations

\`\`\`java
import java.util.*;

ArrayList<Integer> arrayList = new ArrayList<>();
arrayList.add(1); arrayList.add(2); arrayList.add(3);
System.out.println(arrayList.get(1));  // O(1) — fast

LinkedList<Integer> linkedList = new LinkedList<>();
linkedList.add(1); linkedList.add(2); linkedList.add(3);
linkedList.addFirst(0);  // O(1) — fast
linkedList.removeLast(); // O(1) — fast
\`\`\`

| Operation | ArrayList | LinkedList |
|-----------|-----------|------------|
| get(i) | O(1) ✅ | O(n) ❌ |
| add at end | O(1) amortized | O(1) ✅ |
| add at middle | O(n) | O(n) |
| Memory | Less | More |`,
    tags: ["ArrayList", "LinkedList", "Collections", "Performance"],
  },
  {
    id: 13,
    difficulty: "Intermediate",
    category: "Collections",
    question: "What is the difference between HashMap and HashTable in Java?",
    answer: `Both store key-value pairs, but they differ in thread-safety and performance:

**HashMap:**
- **Not synchronized** (not thread-safe)
- Allows **one null key** and multiple null values
- Faster because no synchronization overhead
- Introduced in Java 1.2
- Use in single-threaded environments

**HashTable:**
- **Synchronized** (thread-safe)
- Does **NOT allow null** keys or values
- Slower due to synchronization
- Legacy class from Java 1.0
- Mostly replaced by ConcurrentHashMap

\`\`\`java
// HashMap
HashMap<String, Integer> map = new HashMap<>();
map.put("Alice", 90);
map.put(null, 0);     // valid in HashMap
map.put("Bob", null); // valid in HashMap

// HashTable
Hashtable<String, Integer> table = new Hashtable<>();
table.put("Alice", 90);
// table.put(null, 0);   // throws NullPointerException!
\`\`\`

**Modern recommendation:** Use \`HashMap\` for single-thread, \`ConcurrentHashMap\` for multi-thread (better performance than Hashtable).`,
    tags: ["HashMap", "HashTable", "Collections", "Thread Safety"],
  },
  {
    id: 14,
    difficulty: "Intermediate",
    category: "Exception Handling",
    question: "What is the difference between checked and unchecked exceptions in Java?",
    answer: `Java exceptions are divided into two categories based on when they are checked:

**Checked Exceptions:**
- Checked at **compile time** — compiler forces you to handle them
- Must be handled with try-catch or declared with \`throws\`
- Extend \`Exception\` (but not RuntimeException)
- Examples: \`IOException\`, \`SQLException\`, \`FileNotFoundException\`

\`\`\`java
// Checked — must handle
public void readFile() throws IOException {  // or use try-catch
    FileReader fr = new FileReader("file.txt");
}
\`\`\`

**Unchecked Exceptions:**
- Checked at **runtime** — compiler doesn't force handling
- Extend \`RuntimeException\`
- Usually caused by programming errors
- Examples: \`NullPointerException\`, \`ArrayIndexOutOfBoundsException\`, \`ClassCastException\`

\`\`\`java
// Unchecked — compiler won't warn
String s = null;
s.length();  // NullPointerException at runtime

int[] arr = {1, 2, 3};
arr[10];     // ArrayIndexOutOfBoundsException at runtime
\`\`\`

**Exception Hierarchy:**
\`\`\`
Throwable
├── Error (JVM errors — don't catch)
└── Exception
    ├── Checked Exceptions (IOException, etc.)
    └── RuntimeException (Unchecked — NPE, etc.)
\`\`\``,
    tags: ["Exceptions", "Checked", "Unchecked", "Exception Handling"],
  },
  {
    id: 15,
    difficulty: "Intermediate",
    category: "Multithreading",
    question: "What is multithreading in Java and how do you create a thread?",
    answer: `**Multithreading** allows a Java program to perform multiple tasks simultaneously by running multiple threads concurrently.

**Two ways to create a Thread:**

**1. Extend Thread class:**
\`\`\`java
class MyThread extends Thread {
    public void run() {
        System.out.println("Thread running: " + Thread.currentThread().getName());
    }
}

MyThread t1 = new MyThread();
t1.start();  // start() creates new thread and calls run()
\`\`\`

**2. Implement Runnable interface (preferred):**
\`\`\`java
class MyRunnable implements Runnable {
    public void run() {
        System.out.println("Runnable thread: " + Thread.currentThread().getName());
    }
}

Thread t2 = new Thread(new MyRunnable());
t2.start();

// Lambda (Java 8+)
Thread t3 = new Thread(() -> System.out.println("Lambda thread"));
t3.start();
\`\`\`

**Thread Lifecycle:**
\`\`\`
New → Runnable → Running → (Blocked/Waiting) → Terminated
\`\`\`

**Why prefer Runnable over Thread?**
- Java doesn't support multiple inheritance, but a class can implement multiple interfaces
- Better separation of task (Runnable) from thread management
- Can also be used with thread pools (ExecutorService)`,
    tags: ["Multithreading", "Thread", "Runnable", "Concurrency"],
  },
  {
    id: 16,
    difficulty: "Intermediate",
    category: "Multithreading",
    question: "What is synchronization in Java?",
    answer: `**Synchronization** is a mechanism to control access to shared resources by multiple threads to prevent data inconsistency (race conditions).

**The Problem — Race Condition:**
\`\`\`java
class Counter {
    int count = 0;
    void increment() { count++; }  // not thread-safe!
}
// If two threads call increment() simultaneously, count may be wrong
\`\`\`

**Solution — synchronized keyword:**

\`\`\`java
// Synchronized method
class Counter {
    int count = 0;
    synchronized void increment() {
        count++;  // only one thread can enter at a time
    }
}

// Synchronized block (more fine-grained control)
class Counter {
    int count = 0;
    void increment() {
        synchronized(this) {  // lock on 'this' object
            count++;
        }
    }
}
\`\`\`

**How it works:**
- Every Java object has a built-in **monitor lock (intrinsic lock)**
- When a thread enters a \`synchronized\` method/block, it acquires the lock
- Other threads must wait until the lock is released

**Downsides:**
- Can cause **deadlock** if not used carefully
- Performance overhead due to locking
- Consider \`java.util.concurrent\` package for better concurrency tools`,
    tags: ["Synchronization", "Thread Safety", "Multithreading", "Deadlock"],
  },
  {
    id: 17,
    difficulty: "Intermediate",
    category: "Core Java",
    question: "What is the difference between String, StringBuilder, and StringBuffer?",
    answer: `All three deal with text but differ in mutability and thread-safety:

**String:**
- **Immutable** — once created, value cannot be changed
- Every modification creates a new String object
- Thread-safe (immutable objects are always thread-safe)
- Stored in String Pool

\`\`\`java
String s = "hello";
s = s + " world";  // creates NEW object; old "hello" stays in memory
\`\`\`

**StringBuilder:**
- **Mutable** — can be modified without creating new objects
- **Not thread-safe** (no synchronization)
- Faster than StringBuffer
- Best for single-threaded string manipulation

\`\`\`java
StringBuilder sb = new StringBuilder("hello");
sb.append(" world");  // modifies same object
sb.insert(5, ",");
System.out.println(sb.toString());  // "hello, world"
\`\`\`

**StringBuffer:**
- **Mutable** — similar to StringBuilder
- **Thread-safe** (synchronized methods)
- Slower than StringBuilder due to synchronization
- Best for multi-threaded environments

| Feature | String | StringBuilder | StringBuffer |
|---------|--------|---------------|--------------|
| Mutable | No | Yes | Yes |
| Thread-safe | Yes | No | Yes |
| Performance | Slow (for concat) | Fast | Medium |

> **Rule**: Use String for constants, StringBuilder for single-thread manipulation, StringBuffer for multi-thread.`,
    tags: ["String", "StringBuilder", "StringBuffer", "Immutability"],
  },
  {
    id: 18,
    difficulty: "Intermediate",
    category: "Collections",
    question: "What is the difference between List, Set, and Map in Java?",
    answer: `These are the three main interfaces in the Java Collections Framework:

**List:**
- **Ordered** collection (maintains insertion order)
- Allows **duplicate** elements
- Elements accessed by **index**
- Implementations: \`ArrayList\`, \`LinkedList\`, \`Vector\`

\`\`\`java
List<String> list = new ArrayList<>();
list.add("A"); list.add("B"); list.add("A");  // duplicates allowed
System.out.println(list);  // [A, B, A]
\`\`\`

**Set:**
- **Unordered** (or sorted) collection
- **No duplicates** allowed
- No index-based access
- Implementations: \`HashSet\` (unordered), \`LinkedHashSet\` (insertion order), \`TreeSet\` (sorted)

\`\`\`java
Set<String> set = new HashSet<>();
set.add("A"); set.add("B"); set.add("A");  // duplicate ignored
System.out.println(set);  // [A, B] — no duplicates
\`\`\`

**Map:**
- Stores **key-value pairs**
- Keys are unique, values can repeat
- Not part of \`Collection\` interface (separate hierarchy)
- Implementations: \`HashMap\`, \`LinkedHashMap\`, \`TreeMap\`

\`\`\`java
Map<String, Integer> map = new HashMap<>();
map.put("Alice", 90);
map.put("Bob", 85);
System.out.println(map.get("Alice"));  // 90
\`\`\``,
    tags: ["List", "Set", "Map", "Collections Framework"],
  },
  {
    id: 19,
    difficulty: "Intermediate",
    category: "Core Java",
    question: "What are Java access modifiers?",
    answer: `Access modifiers control the visibility/accessibility of classes, methods, and variables:

**4 Access Modifiers in Java:**

| Modifier | Class | Package | Subclass | World |
|----------|-------|---------|----------|-------|
| \`private\` | ✅ | ❌ | ❌ | ❌ |
| (default) | ✅ | ✅ | ❌ | ❌ |
| \`protected\` | ✅ | ✅ | ✅ | ❌ |
| \`public\` | ✅ | ✅ | ✅ | ✅ |

**private:**
- Only accessible within the **same class**
- Used for encapsulation
\`\`\`java
private int age;  // only accessible in this class
\`\`\`

**default (no keyword):**
- Accessible within the **same package**
- Called "package-private"
\`\`\`java
int salary;  // no modifier = package level access
\`\`\`

**protected:**
- Accessible within **same package** + **subclasses** (even in different packages)
\`\`\`java
protected String name;
\`\`\`

**public:**
- Accessible from **anywhere** in the program
\`\`\`java
public void display() { ... }
\`\`\`

> **Best Practice**: Use the most restrictive access level possible. Follow encapsulation — make fields \`private\` and expose via \`public\` getters/setters.`,
    tags: ["Access Modifiers", "Encapsulation", "public", "private", "protected"],
  },
  {
    id: 20,
    difficulty: "Intermediate",
    category: "Core Java",
    question: "What is a constructor in Java? What are its types?",
    answer: `A **constructor** is a special method that is called when an object is created. It initializes the object's state (fields).

**Key Properties:**
- Same name as the class
- No return type (not even void)
- Called automatically with \`new\` keyword

**Types of Constructors:**

**1. Default Constructor (No-arg):**
\`\`\`java
class Student {
    String name;
    int age;
    
    Student() {  // default constructor
        name = "Unknown";
        age = 0;
    }
}
Student s = new Student();  // calls default constructor
\`\`\`

**2. Parameterized Constructor:**
\`\`\`java
class Student {
    String name;
    int age;
    
    Student(String n, int a) {  // parameterized
        this.name = n;
        this.age = a;
    }
}
Student s = new Student("Alice", 20);
\`\`\`

**3. Copy Constructor:**
\`\`\`java
class Student {
    String name;
    Student(Student other) {  // copy constructor
        this.name = other.name;
    }
}
Student s1 = new Student("Alice");
Student s2 = new Student(s1);  // copies s1
\`\`\`

**Constructor Chaining:** using \`this()\` to call another constructor in the same class or \`super()\` to call parent constructor.`,
    tags: ["Constructor", "Default Constructor", "Parameterized", "this", "super"],
  },
  {
    id: 21,
    difficulty: "Intermediate",
    category: "Core Java",
    question: "What is the 'this' keyword in Java?",
    answer: `\`this\` is a reference variable in Java that refers to the **current object** (the object whose method is being called).

**Uses of 'this' keyword:**

**1. Refer to current class instance variable (resolve naming conflict):**
\`\`\`java
class Student {
    String name;
    Student(String name) {
        this.name = name;  // this.name = instance variable, name = parameter
    }
}
\`\`\`

**2. Call another constructor in same class (constructor chaining):**
\`\`\`java
class Student {
    String name;
    int age;
    
    Student() { this("Unknown", 0); }  // calls parameterized constructor
    Student(String name, int age) {
        this.name = name;
        this.age = age;
    }
}
\`\`\`

**3. Pass current object as argument:**
\`\`\`java
class Student {
    void display(Student s) { ... }
    void show() { display(this); }  // passes current object
}
\`\`\`

**4. Return current object (method chaining/builder pattern):**
\`\`\`java
class Builder {
    String name;
    Builder setName(String n) {
        this.name = n;
        return this;  // returns current object for chaining
    }
}
new Builder().setName("Alice");  // method chaining
\`\`\``,
    tags: ["this keyword", "Constructor Chaining", "OOP"],
  },
  {
    id: 22,
    difficulty: "Intermediate",
    category: "OOP",
    question: "What is the 'super' keyword in Java?",
    answer: `\`super\` is a reference variable that refers to the **immediate parent class** object. It is used in inheritance.

**Uses of 'super' keyword:**

**1. Access parent class variable:**
\`\`\`java
class Animal {
    String color = "white";
}
class Dog extends Animal {
    String color = "black";
    void printColor() {
        System.out.println(color);        // Dog's color: black
        System.out.println(super.color);  // Animal's color: white
    }
}
\`\`\`

**2. Call parent class method:**
\`\`\`java
class Animal {
    void eat() { System.out.println("Animal eating"); }
}
class Dog extends Animal {
    void eat() {
        super.eat();               // calls Animal's eat()
        System.out.println("Dog eating");
    }
}
\`\`\`

**3. Call parent class constructor:**
\`\`\`java
class Animal {
    String name;
    Animal(String name) { this.name = name; }
}
class Dog extends Animal {
    String breed;
    Dog(String name, String breed) {
        super(name);        // must be first line — calls Animal constructor
        this.breed = breed;
    }
}
\`\`\`

> **Note**: \`super()\` call must always be the **first statement** in the child constructor. If not written explicitly, Java inserts a default \`super()\` call automatically.`,
    tags: ["super keyword", "Inheritance", "Constructor"],
  },
  {
    id: 23,
    difficulty: "Intermediate",
    category: "Core Java",
    question: "What are static methods and variables in Java?",
    answer: `\`static\` members belong to the **class** itself rather than any specific object instance.

**Static Variable:**
- Shared among all objects of the class
- Memory allocated only once in class area
- Accessed via class name: \`ClassName.variable\`

\`\`\`java
class Student {
    String name;
    static int count = 0;  // shared by all students
    
    Student(String name) {
        this.name = name;
        count++;  // increments for every new student
    }
}
Student s1 = new Student("Alice");
Student s2 = new Student("Bob");
System.out.println(Student.count);  // 2
\`\`\`

**Static Method:**
- Belongs to class, not instance
- Can be called without creating an object
- Cannot access instance (non-static) variables directly
- Cannot use \`this\` or \`super\`

\`\`\`java
class MathUtils {
    static int add(int a, int b) { return a + b; }  // static method
}

int result = MathUtils.add(5, 3);  // no object needed
\`\`\`

**Static Block:**
- Executes once when the class is loaded
- Used for static initialization

\`\`\`java
class Config {
    static String url;
    static {
        url = "jdbc:mysql://localhost:3306/db";  // runs once on class load
    }
}
\`\`\``,
    tags: ["static", "Static Method", "Static Variable", "Class Members"],
  },
  {
    id: 24,
    difficulty: "Intermediate",
    category: "Core Java",
    question: "What is Java's try-with-resources statement?",
    answer: `**Try-with-resources** (introduced in Java 7) is a special try statement that automatically closes resources (files, database connections, streams) after use.

**Problem with traditional approach:**
\`\`\`java
// Old way — must manually close in finally
FileReader fr = null;
try {
    fr = new FileReader("file.txt");
    // ... use fr
} catch (IOException e) {
    e.printStackTrace();
} finally {
    if (fr != null) {
        try { fr.close(); } catch (IOException e) { e.printStackTrace(); }
    }
}
\`\`\`

**Solution with try-with-resources:**
\`\`\`java
// Java 7+ — resource closed automatically
try (FileReader fr = new FileReader("file.txt")) {
    // ... use fr
} catch (IOException e) {
    e.printStackTrace();
}
// fr.close() is called automatically!
\`\`\`

**Multiple resources:**
\`\`\`java
try (
    FileReader fr = new FileReader("input.txt");
    FileWriter fw = new FileWriter("output.txt")
) {
    // both closed automatically, in reverse order
}
\`\`\`

**Requirements:**
- The resource class must implement the \`AutoCloseable\` (or \`Closeable\`) interface
- Standard I/O classes, JDBC connections, and streams already implement this`,
    tags: ["try-with-resources", "AutoCloseable", "Exception Handling", "Java 7"],
  },
  {
    id: 25,
    difficulty: "Intermediate",
    category: "Java 8+",
    question: "What are Lambda expressions in Java 8?",
    answer: `**Lambda expressions** (Java 8) are anonymous functions that allow you to write concise, functional-style code. They implement **functional interfaces** (interfaces with exactly one abstract method).

**Syntax:**
\`\`\`
(parameters) -> { body }
\`\`\`

**Before Lambda (verbose anonymous class):**
\`\`\`java
List<String> names = Arrays.asList("Charlie", "Alice", "Bob");

Collections.sort(names, new Comparator<String>() {
    public int compare(String a, String b) {
        return a.compareTo(b);
    }
});
\`\`\`

**With Lambda (concise):**
\`\`\`java
Collections.sort(names, (a, b) -> a.compareTo(b));

// Or even shorter with method reference:
names.sort(String::compareTo);
\`\`\`

**Common lambda examples:**
\`\`\`java
// Runnable
Runnable r = () -> System.out.println("Running!");

// Comparator
Comparator<Integer> cmp = (a, b) -> a - b;

// forEach
List<String> list = Arrays.asList("A", "B", "C");
list.forEach(s -> System.out.println(s));

// Predicate (filter)
Predicate<Integer> isEven = n -> n % 2 == 0;
System.out.println(isEven.test(4));  // true
\`\`\``,
    tags: ["Lambda", "Java 8", "Functional Interface", "Stream"],
  },
  {
    id: 26,
    difficulty: "Intermediate",
    category: "Java 8+",
    question: "What is the Stream API in Java 8?",
    answer: `The **Stream API** (Java 8) provides a functional approach to process collections of data declaratively.

**Key Concepts:**
- A stream is a sequence of elements supporting sequential/parallel operations
- Streams do NOT store data (they process it from a source)
- Operations are either **intermediate** (return stream) or **terminal** (produce result)
- Streams are lazy — intermediate ops execute only when terminal op is called

\`\`\`java
List<Integer> numbers = Arrays.asList(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

// Filter even numbers, double them, collect to list
List<Integer> result = numbers.stream()
    .filter(n -> n % 2 == 0)   // intermediate: keep evens
    .map(n -> n * 2)            // intermediate: double each
    .collect(Collectors.toList()); // terminal: collect to list
System.out.println(result);  // [4, 8, 12, 16, 20]

// Sum of all elements
int sum = numbers.stream()
    .reduce(0, Integer::sum);   // terminal
System.out.println(sum);  // 55

// Find first even number
Optional<Integer> first = numbers.stream()
    .filter(n -> n % 2 == 0)
    .findFirst();
System.out.println(first.get());  // 2
\`\`\`

**Common Stream operations:**
| Intermediate | Terminal |
|-------------|----------|
| filter() | collect() |
| map() | forEach() |
| sorted() | count() |
| distinct() | reduce() |
| limit() | findFirst() |`,
    tags: ["Stream API", "Java 8", "filter", "map", "collect"],
  },
  {
    id: 27,
    difficulty: "Intermediate",
    category: "Java 8+",
    question: "What is Optional in Java 8?",
    answer: `\`Optional<T>\` (Java 8) is a container object that may or may not contain a non-null value. It helps avoid \`NullPointerException\` by making null handling explicit.

**Why Optional?**
\`\`\`java
// Old way — NPE risk
String name = user.getName();  // what if user is null? NPE!
System.out.println(name.length());  // crash!

// With Optional — safe
Optional<String> name = Optional.ofNullable(user.getName());
name.ifPresent(n -> System.out.println(n.length()));  // safe
\`\`\`

**Creating Optional:**
\`\`\`java
Optional<String> empty = Optional.empty();          // empty optional
Optional<String> present = Optional.of("Alice");    // non-null value
Optional<String> nullable = Optional.ofNullable(null);  // can be null
\`\`\`

**Using Optional:**
\`\`\`java
Optional<String> opt = Optional.ofNullable("Hello");

opt.isPresent();              // true — has value
opt.isEmpty();                // false (Java 11+)
opt.get();                    // "Hello" — throws if empty
opt.orElse("Default");        // "Hello" (or "Default" if empty)
opt.orElseGet(() -> "Generated");  // lazy default
opt.orElseThrow();            // throw exception if empty

// Transform value
opt.map(String::toUpperCase)  // Optional["HELLO"]
   .filter(s -> s.length() > 3)
   .ifPresent(System.out::println);  // prints "HELLO"
\`\`\``,
    tags: ["Optional", "Java 8", "NullPointerException", "Null Safety"],
  },
  {
    id: 28,
    difficulty: "Hard",
    category: "Multithreading",
    question: "What is deadlock in Java and how do you prevent it?",
    answer: `A **deadlock** occurs when two or more threads are blocked forever, each waiting for a resource held by the other.

**Classic Deadlock Example:**
\`\`\`java
Object lock1 = new Object();
Object lock2 = new Object();

Thread t1 = new Thread(() -> {
    synchronized(lock1) {
        System.out.println("T1 holds lock1, waiting for lock2");
        synchronized(lock2) {  // waiting for lock2
            System.out.println("T1 has both locks");
        }
    }
});

Thread t2 = new Thread(() -> {
    synchronized(lock2) {
        System.out.println("T2 holds lock2, waiting for lock1");
        synchronized(lock1) {  // waiting for lock1 — DEADLOCK!
            System.out.println("T2 has both locks");
        }
    }
});

t1.start(); t2.start();
// t1 waits for lock2 (held by t2)
// t2 waits for lock1 (held by t1) → deadlock!
\`\`\`

**Prevention Strategies:**

1. **Lock ordering** — always acquire locks in the same order
\`\`\`java
// Both threads acquire lock1 first, then lock2 — no deadlock
\`\`\`

2. **Lock timeout** — use \`tryLock()\` with timeout (java.util.concurrent.locks)
\`\`\`java
if (lock.tryLock(500, TimeUnit.MILLISECONDS)) { ... }
\`\`\`

3. **Avoid nested locks** — don't acquire a lock while holding another

4. **Use higher-level concurrency utilities** — \`java.util.concurrent\` classes like \`ConcurrentHashMap\`, \`Semaphore\``,
    tags: ["Deadlock", "Multithreading", "Synchronization", "Lock"],
  },
  {
    id: 29,
    difficulty: "Hard",
    category: "Core Java",
    question: "What is Java reflection API?",
    answer: `**Reflection** is a Java API that allows a program to examine and modify its own structure and behavior at **runtime** — classes, methods, fields can be inspected and invoked dynamically.

**Key Classes in java.lang.reflect:**
- \`Class\` — represents a class or interface
- \`Method\` — represents a method
- \`Field\` — represents a field
- \`Constructor\` — represents a constructor

\`\`\`java
// Get Class object
Class<?> cls = Class.forName("com.example.Student");
// or
Class<?> cls2 = Student.class;
// or
Class<?> cls3 = new Student().getClass();

// Inspect class
System.out.println(cls.getName());       // full class name
System.out.println(cls.getSimpleName()); // "Student"

// Get and invoke methods
Method method = cls.getDeclaredMethod("getName");
method.setAccessible(true);  // access private methods
Object result = method.invoke(studentObject);

// Access private fields
Field field = cls.getDeclaredField("name");
field.setAccessible(true);
field.set(studentObject, "Alice");  // set private field value

// Create instance dynamically
Object obj = cls.getDeclaredConstructor().newInstance();
\`\`\`

**Real-world uses:**
- Frameworks (Spring, Hibernate use reflection extensively)
- Unit testing (JUnit uses reflection to find test methods)
- IDE auto-complete, debuggers
- Serialization/deserialization

**Downsides:** Performance overhead, breaks encapsulation, security concerns.`,
    tags: ["Reflection", "java.lang.reflect", "Advanced Java"],
  },
  {
    id: 30,
    difficulty: "Hard",
    category: "Java 8+",
    question: "What are functional interfaces in Java?",
    answer: `A **functional interface** is an interface that has exactly **one abstract method**. They are the foundation for lambda expressions and method references in Java 8.

\`\`\`java
@FunctionalInterface  // optional annotation, but good practice
interface Greeting {
    void greet(String name);  // single abstract method
}

// Usage with lambda
Greeting g = name -> System.out.println("Hello, " + name);
g.greet("Alice");  // Hello, Alice
\`\`\`

**Built-in Functional Interfaces (java.util.function):**

\`\`\`java
// Predicate<T> — takes T, returns boolean
Predicate<Integer> isEven = n -> n % 2 == 0;
System.out.println(isEven.test(4));  // true

// Function<T, R> — takes T, returns R
Function<String, Integer> strLen = s -> s.length();
System.out.println(strLen.apply("hello"));  // 5

// Consumer<T> — takes T, returns void
Consumer<String> printer = s -> System.out.println(s);
printer.accept("Hi");  // Hi

// Supplier<T> — takes nothing, returns T
Supplier<String> greeting = () -> "Hello World";
System.out.println(greeting.get());  // Hello World

// BiFunction<T, U, R> — takes two inputs, returns R
BiFunction<Integer, Integer, Integer> add = (a, b) -> a + b;
System.out.println(add.apply(3, 4));  // 7
\`\`\`

> **Note**: Functional interfaces can have multiple default/static methods but only ONE abstract method.`,
    tags: ["Functional Interface", "Lambda", "Java 8", "Predicate", "Function"],
  },
  {
    id: 31,
    difficulty: "Hard",
    category: "Core Java",
    question: "What is the difference between deep copy and shallow copy in Java?",
    answer: `**Shallow Copy** copies the object but not the objects it references — both original and copy share the same referenced objects.

**Deep Copy** creates a completely independent copy — all referenced objects are also copied recursively.

\`\`\`java
class Address {
    String city;
    Address(String city) { this.city = city; }
}

class Student {
    String name;
    Address address;
    
    // Shallow copy — address object is shared!
    Student shallowCopy() {
        Student copy = new Student();
        copy.name = this.name;
        copy.address = this.address;  // same reference!
        return copy;
    }
    
    // Deep copy — address object is duplicated
    Student deepCopy() {
        Student copy = new Student();
        copy.name = this.name;
        copy.address = new Address(this.address.city);  // new object!
        return copy;
    }
}

Student s1 = new Student();
s1.name = "Alice";
s1.address = new Address("Delhi");

Student shallow = s1.shallowCopy();
shallow.address.city = "Mumbai";
System.out.println(s1.address.city);  // "Mumbai" — s1 affected!

Student deep = s1.deepCopy();
deep.address.city = "Chennai";
System.out.println(s1.address.city);  // "Mumbai" — s1 NOT affected ✅
\`\`\`

**Deep copy techniques:**
- Manual copy (shown above)
- Serialization/Deserialization
- Copy constructor
- Libraries like Apache Commons, Gson`,
    tags: ["Deep Copy", "Shallow Copy", "Cloning", "OOP"],
  },
  {
    id: 32,
    difficulty: "Hard",
    category: "Core Java",
    question: "What is the Singleton design pattern in Java?",
    answer: `The **Singleton** pattern ensures that only **one instance** of a class is created throughout the application and provides a global access point to it.

**Common implementations:**

**1. Lazy Initialization (not thread-safe):**
\`\`\`java
class Singleton {
    private static Singleton instance;
    
    private Singleton() {}  // private constructor
    
    public static Singleton getInstance() {
        if (instance == null) {
            instance = new Singleton();  // created only when needed
        }
        return instance;
    }
}
\`\`\`

**2. Thread-safe with synchronized:**
\`\`\`java
class Singleton {
    private static Singleton instance;
    private Singleton() {}
    
    public static synchronized Singleton getInstance() {
        if (instance == null) {
            instance = new Singleton();
        }
        return instance;
    }
}
\`\`\`

**3. Double-Checked Locking (Best practice):**
\`\`\`java
class Singleton {
    private static volatile Singleton instance;
    private Singleton() {}
    
    public static Singleton getInstance() {
        if (instance == null) {
            synchronized(Singleton.class) {
                if (instance == null) {  // double check
                    instance = new Singleton();
                }
            }
        }
        return instance;
    }
}
\`\`\`

**4. Enum Singleton (Most recommended in Java):**
\`\`\`java
enum Singleton {
    INSTANCE;
    public void doSomething() { ... }
}
Singleton.INSTANCE.doSomething();
\`\`\``,
    tags: ["Singleton", "Design Pattern", "Thread Safety"],
  },
  {
    id: 33,
    difficulty: "Hard",
    category: "Collections",
    question: "How does HashMap work internally in Java?",
    answer: `**HashMap** internally uses an array of **buckets** (linked list / tree nodes) to store key-value pairs using **hashing**.

**Internal Structure:**
- An array called \`table[]\` of \`Node<K,V>\` objects (default capacity: 16)
- Each node stores: \`key\`, \`value\`, \`hash\`, \`next\` (pointer to next node)
- When buckets are filled (load factor > 0.75), the table is resized (doubled)

**How put(key, value) works:**
1. Calculate hash: \`hash = key.hashCode()\`
2. Calculate index: \`index = hash & (capacity - 1)\`
3. If bucket is empty → store the node directly
4. If bucket is occupied (collision):
   - Check if existing key equals new key → update value
   - Otherwise → add to the chain (linked list)
5. If chain length > 8 → convert to **Red-Black Tree** (Java 8+) for O(log n) search

**How get(key) works:**
1. Compute hash and find bucket index
2. Traverse the chain at that bucket
3. Return value if key matches (using .equals())

\`\`\`java
HashMap<String, Integer> map = new HashMap<>();
map.put("Alice", 90);
// 1. hash("Alice") → some int
// 2. index = hash & 15  (for capacity 16)
// 3. store Node("Alice", 90) at table[index]

map.get("Alice");
// 1. hash("Alice") → same int
// 2. same index
// 3. found "Alice".equals("Alice") → return 90
\`\`\`

**Time Complexity:** O(1) average, O(log n) worst case (after tree conversion)`,
    tags: ["HashMap", "Hashing", "Internal Working", "Collections"],
  },
  {
    id: 34,
    difficulty: "Hard",
    category: "Java 8+",
    question: "What are default and static methods in interfaces (Java 8)?",
    answer: `Java 8 introduced **default** and **static** methods in interfaces to enable backward compatibility and utility methods without breaking existing implementations.

**Default Methods:**
- Methods with an implementation inside an interface
- Implementing classes inherit them automatically
- Can be overridden by implementing classes
- Solves the "diamond problem" with explicit override

\`\`\`java
interface Vehicle {
    void start();  // abstract — must implement
    
    default void fuelInfo() {  // default — optional to override
        System.out.println("Uses fuel");
    }
}

class Car implements Vehicle {
    public void start() { System.out.println("Car starting"); }
    // fuelInfo() inherited automatically
}

class ElectricCar implements Vehicle {
    public void start() { System.out.println("Electric car starting"); }
    
    @Override
    public void fuelInfo() {  // override default
        System.out.println("Uses electricity");
    }
}
\`\`\`

**Static Methods:**
- Utility methods that belong to the interface itself
- Cannot be inherited by implementing classes
- Called via interface name

\`\`\`java
interface MathUtils {
    static int add(int a, int b) { return a + b; }
}

int result = MathUtils.add(3, 4);  // called on interface name
\`\`\`

> **Why added?** To evolve interfaces without breaking existing code (backward compatibility). For example, Java's \`List\` interface got \`sort()\` as a default method.`,
    tags: ["Default Methods", "Static Methods", "Interface", "Java 8"],
  },
  {
    id: 35,
    difficulty: "Hard",
    category: "Core Java",
    question: "What is the difference between Comparable and Comparator in Java?",
    answer: `Both are used for sorting objects in Java, but they differ in where the comparison logic is placed:

**Comparable (natural ordering):**
- Interface in \`java.lang\`
- Defines the **default/natural sorting order** of a class
- Class itself implements \`compareTo()\` method
- Can sort using \`Collections.sort(list)\` directly

\`\`\`java
class Student implements Comparable<Student> {
    String name;
    int age;
    
    public int compareTo(Student other) {
        return this.age - other.age;  // sort by age (natural order)
    }
}

List<Student> students = new ArrayList<>();
Collections.sort(students);  // uses compareTo()
\`\`\`

**Comparator (custom ordering):**
- Interface in \`java.util\`
- Defines **external/custom sorting** logic separate from the class
- Implemented as a separate class or lambda
- Can have multiple different comparators for the same class

\`\`\`java
// Sort by name
Comparator<Student> byName = (s1, s2) -> s1.name.compareTo(s2.name);

// Sort by age descending
Comparator<Student> byAgeDesc = (s1, s2) -> s2.age - s1.age;

Collections.sort(students, byName);
students.sort(byAgeDesc);  // List.sort()
\`\`\`

| Feature | Comparable | Comparator |
|---------|-----------|------------|
| Package | java.lang | java.util |
| Method | compareTo() | compare() |
| Location | Inside class | Outside class |
| Sort calls | sort(list) | sort(list, comparator) |
| Multiple sorts | One only | Multiple |`,
    tags: ["Comparable", "Comparator", "Sorting", "Collections"],
  },
  {
    id: 36,
    difficulty: "Hard",
    category: "Multithreading",
    question: "What is the volatile keyword in Java?",
    answer: `The \`volatile\` keyword in Java ensures that a variable is always read from and written to **main memory**, not from a thread's local CPU cache — providing **visibility guarantee** across threads.

**The Problem without volatile:**
\`\`\`java
class Task implements Runnable {
    boolean running = true;  // cached in each thread's CPU cache
    
    public void run() {
        while (running) {  // may never see updated value!
            // do work
        }
    }
}
Task t = new Task();
new Thread(t).start();
t.running = false;  // another thread sets false, but worker may not see it!
\`\`\`

**Solution with volatile:**
\`\`\`java
class Task implements Runnable {
    volatile boolean running = true;  // always read from main memory
    
    public void run() {
        while (running) {  // sees latest value immediately ✅
            // do work
        }
    }
}
\`\`\`

**What volatile guarantees:**
- **Visibility** — changes made by one thread are immediately visible to all other threads
- **No caching** — reads/writes bypass CPU cache, go directly to main memory

**What volatile does NOT guarantee:**
- **Atomicity** — \`volatile int count++\` is NOT atomic (still three operations: read, increment, write)
- Use \`synchronized\` or \`AtomicInteger\` for atomic compound operations

**Common use:** flags, stop conditions, double-checked locking (\`volatile\` + \`synchronized\`).`,
    tags: ["volatile", "Multithreading", "Memory Visibility", "Thread Safety"],
  },
  {
    id: 37,
    difficulty: "Hard",
    category: "Collections",
    question: "What is the difference between Iterator and ListIterator in Java?",
    answer: `Both are used to traverse collections, but they have different capabilities:

**Iterator:**
- Works with any \`Collection\` (List, Set, Map values, etc.)
- Can traverse in **forward direction only**
- Methods: \`hasNext()\`, \`next()\`, \`remove()\`

\`\`\`java
List<String> list = Arrays.asList("A", "B", "C");
Iterator<String> it = list.iterator();
while (it.hasNext()) {
    String s = it.next();
    System.out.println(s);
    // it.remove();  // can remove current element
}
\`\`\`

**ListIterator:**
- Works only with \`List\` implementations (ArrayList, LinkedList)
- Can traverse in **both forward and backward** directions
- Methods: \`hasNext()\`, \`next()\`, \`hasPrevious()\`, \`previous()\`, \`remove()\`, \`add()\`, \`set()\`, \`nextIndex()\`, \`previousIndex()\`

\`\`\`java
List<String> list = new ArrayList<>(Arrays.asList("A", "B", "C"));
ListIterator<String> lit = list.listIterator();

// Forward
while (lit.hasNext()) {
    System.out.println(lit.next());  // A, B, C
}

// Backward
while (lit.hasPrevious()) {
    System.out.println(lit.previous());  // C, B, A
}

// Modify during iteration
ListIterator<String> lit2 = list.listIterator();
while (lit2.hasNext()) {
    String s = lit2.next();
    lit2.set(s.toLowerCase());  // replace element
}
\`\`\`

| Feature | Iterator | ListIterator |
|---------|----------|--------------|
| Direction | Forward | Both |
| Works with | Any Collection | List only |
| Add elements | No | Yes (add()) |
| Modify elements | No | Yes (set()) |`,
    tags: ["Iterator", "ListIterator", "Collections", "Traversal"],
  },
  {
    id: 38,
    difficulty: "Hard",
    category: "Core Java",
    question: "What is the difference between throw and throws in Java?",
    answer: `Both are related to exception handling but serve different purposes:

**throw (statement):**
- Used to **explicitly throw** an exception inside a method
- Can throw any \`Throwable\` object (checked or unchecked)
- Only one exception can be thrown at a time
- Followed by an exception instance

\`\`\`java
class AgeValidator {
    void validateAge(int age) {
        if (age < 18) {
            throw new IllegalArgumentException("Age must be 18+");  // explicit throw
        }
        System.out.println("Valid age: " + age);
    }
}
\`\`\`

**throws (declaration):**
- Used in **method signature** to declare that a method might throw an exception
- Required for checked exceptions (compiler enforces it)
- Caller must handle or re-declare the exception
- Can declare multiple exceptions

\`\`\`java
import java.io.*;

// 'throws' declares what this method might throw
public void readFile(String path) throws IOException, FileNotFoundException {
    FileReader fr = new FileReader(path);  // may throw FileNotFoundException
    BufferedReader br = new BufferedReader(fr);
    br.readLine();  // may throw IOException
}

// Caller must handle it
try {
    readFile("data.txt");
} catch (IOException e) {
    e.printStackTrace();
}
\`\`\`

| Feature | throw | throws |
|---------|-------|--------|
| What it does | Throws an exception | Declares possible exceptions |
| Location | Inside method body | Method signature |
| Exception instance | Required (new Exception()) | Only type name |
| Multiple | One at a time | Multiple with comma |`,
    tags: ["throw", "throws", "Exception Handling"],
  },
  {
    id: 39,
    difficulty: "Intermediate",
    category: "Core Java",
    question: "What is autoboxing and unboxing in Java?",
    answer: `**Autoboxing** and **Unboxing** are automatic conversions between primitive types and their corresponding wrapper classes, introduced in Java 5.

**Autoboxing:** Automatic conversion of primitive → wrapper class
\`\`\`java
int primitive = 42;
Integer wrapper = primitive;  // autoboxing: int → Integer (no explicit cast)

// Compiler converts this to:
Integer wrapper = Integer.valueOf(primitive);
\`\`\`

**Unboxing:** Automatic conversion of wrapper class → primitive
\`\`\`java
Integer wrapper = Integer.valueOf(100);
int primitive = wrapper;  // unboxing: Integer → int

// Compiler converts this to:
int primitive = wrapper.intValue();
\`\`\`

**Real-world examples:**
\`\`\`java
// Collections need objects, autoboxing handles the conversion
List<Integer> list = new ArrayList<>();
list.add(5);     // autoboxing: int 5 → Integer
int val = list.get(0);  // unboxing: Integer → int

// Arithmetic with wrapper types
Integer a = 10;
Integer b = 20;
int sum = a + b;  // both unboxed to int for arithmetic

// Watch out: null unboxing causes NullPointerException!
Integer x = null;
int y = x;  // NullPointerException at runtime!
\`\`\`

**Performance note:** Autoboxing in tight loops creates many wrapper objects — use primitives in performance-critical code.`,
    tags: ["Autoboxing", "Unboxing", "Wrapper Class", "Java 5"],
  },
  {
    id: 40,
    difficulty: "Intermediate",
    category: "Core Java",
    question: "What is a Java enum and when should you use it?",
    answer: `**Enum** (Enumeration) is a special Java type used to define a set of named constants. It's a class type, so it can have fields, methods, and constructors.

**Basic Enum:**
\`\`\`java
enum Day {
    MONDAY, TUESDAY, WEDNESDAY, THURSDAY, FRIDAY, SATURDAY, SUNDAY
}

Day today = Day.MONDAY;
System.out.println(today);          // MONDAY
System.out.println(today.ordinal()); // 0 (index)
System.out.println(today.name());   // "MONDAY"
\`\`\`

**Enum with fields and methods:**
\`\`\`java
enum Planet {
    EARTH(5.972e24, 6.371e6),
    MARS(6.39e23, 3.389e6);
    
    private final double mass;    // field
    private final double radius;
    
    Planet(double mass, double radius) {  // constructor
        this.mass = mass;
        this.radius = radius;
    }
    
    double surfaceGravity() {
        final double G = 6.67300E-11;
        return G * mass / (radius * radius);
    }
}

System.out.println(Planet.EARTH.surfaceGravity());  // 9.80...
\`\`\`

**Using enum in switch:**
\`\`\`java
Day day = Day.SATURDAY;
switch (day) {
    case SATURDAY: case SUNDAY:
        System.out.println("Weekend!"); break;
    default:
        System.out.println("Weekday");
}
\`\`\`

**When to use:** Replace magic constants (\`int STATUS = 1\`), represent fixed sets (directions, seasons, status codes), and for type-safe comparisons.`,
    tags: ["Enum", "Constants", "Type Safety"],
  },
  {
    id: 41,
    difficulty: "Hard",
    category: "Core Java",
    question: "What is Java serialization and deserialization?",
    answer: `**Serialization** is the process of converting a Java object into a **byte stream** (to save to file, send over network, cache, etc.). **Deserialization** is the reverse — converting byte stream back to an object.

**Requirements:**
- The class must implement \`java.io.Serializable\` interface (marker interface — no methods)
- All fields must be serializable (or marked \`transient\` to skip them)

**Serialization:**
\`\`\`java
import java.io.*;

class Student implements Serializable {
    String name;
    int age;
    transient String password;  // will NOT be serialized
    
    Student(String name, int age, String password) {
        this.name = name;
        this.age = age;
        this.password = password;
    }
}

// Serialize
Student s = new Student("Alice", 20, "secret123");

try (ObjectOutputStream oos = new ObjectOutputStream(new FileOutputStream("student.ser"))) {
    oos.writeObject(s);  // converts to bytes and saves
}
\`\`\`

**Deserialization:**
\`\`\`java
// Deserialize
try (ObjectInputStream ois = new ObjectInputStream(new FileInputStream("student.ser"))) {
    Student loaded = (Student) ois.readObject();
    System.out.println(loaded.name);      // "Alice"
    System.out.println(loaded.age);       // 20
    System.out.println(loaded.password);  // null (transient!)
}
\`\`\`

**serialVersionUID:** A unique ID to verify class compatibility during deserialization. Always declare it explicitly to avoid \`InvalidClassException\`.

\`\`\`java
private static final long serialVersionUID = 1L;
\`\`\``,
    tags: ["Serialization", "Deserialization", "Serializable", "transient"],
  },
  {
    id: 42,
    difficulty: "Hard",
    category: "Core Java",
    question: "What is the difference between an inner class and a static nested class in Java?",
    answer: `Java allows defining classes inside other classes. There are important differences based on how they relate to the outer class:

**Inner Class (non-static):**
- Tied to an **instance** of the outer class
- Can directly access all outer class members (including private)
- Requires an outer class instance to be created

\`\`\`java
class Outer {
    int x = 10;
    
    class Inner {  // non-static inner class
        void display() {
            System.out.println("x = " + x);  // direct access to outer x
        }
    }
}

Outer outer = new Outer();
Outer.Inner inner = outer.new Inner();  // needs outer instance
inner.display();  // x = 10
\`\`\`

**Static Nested Class:**
- Belongs to the **class** (not an instance)
- Can only access outer class's **static** members directly
- Does NOT require outer class instance

\`\`\`java
class Outer {
    static int y = 20;
    int z = 30;
    
    static class Nested {  // static nested class
        void display() {
            System.out.println("y = " + y);  // can access static y ✅
            // System.out.println(z);         // cannot access non-static z ❌
        }
    }
}

Outer.Nested nested = new Outer.Nested();  // no outer instance needed
nested.display();  // y = 20
\`\`\`

| Feature | Inner Class | Static Nested Class |
|---------|-------------|---------------------|
| Access to outer members | All (instance + static) | Static only |
| Outer instance needed | Yes | No |
| Memory | Holds outer reference | Independent |`,
    tags: ["Inner Class", "Static Nested Class", "OOP", "Nested Classes"],
  },
  {
    id: 43,
    difficulty: "Hard",
    category: "Java 8+",
    question: "What are method references in Java 8?",
    answer: `**Method references** are a shorthand notation for lambda expressions that call an existing method. They make code cleaner and more readable.

**Syntax:** \`ClassName::methodName\` or \`object::methodName\`

**4 Types of Method References:**

**1. Static method reference:**
\`\`\`java
// Lambda
Function<String, Integer> f1 = s -> Integer.parseInt(s);

// Method reference
Function<String, Integer> f2 = Integer::parseInt;

System.out.println(f2.apply("123"));  // 123
\`\`\`

**2. Instance method reference (on a specific object):**
\`\`\`java
String prefix = "Hello";
Predicate<String> startsWithHello = prefix::startsWith;
System.out.println(startsWithHello.test("Hello World"));  // true
\`\`\`

**3. Instance method reference (on an arbitrary object of a type):**
\`\`\`java
// Lambda
Function<String, String> toUpper1 = s -> s.toUpperCase();

// Method reference
Function<String, String> toUpper2 = String::toUpperCase;

System.out.println(toUpper2.apply("hello"));  // HELLO

List<String> names = Arrays.asList("charlie", "alice", "bob");
names.stream().map(String::toUpperCase).forEach(System.out::println);
\`\`\`

**4. Constructor reference:**
\`\`\`java
// Lambda
Supplier<ArrayList> listFactory1 = () -> new ArrayList();

// Constructor reference
Supplier<ArrayList> listFactory2 = ArrayList::new;

ArrayList list = listFactory2.get();  // creates new ArrayList
\`\`\``,
    tags: ["Method References", "Lambda", "Java 8", "Functional Interface"],
  },
  {
    id: 44,
    difficulty: "Hard",
    category: "Core Java",
    question: "What is the difference between composition and inheritance in Java?",
    answer: `Both are ways to reuse code, but they represent different relationships:

**Inheritance (IS-A relationship):**
- Child class extends parent class to inherit its behavior
- Tight coupling — changes in parent affect child
- Use when "B IS A type of A" (Dog IS AN Animal)

\`\`\`java
class Animal { void breathe() { System.out.println("breathing"); } }
class Dog extends Animal {
    void bark() { System.out.println("barking"); }
}
// Dog IS AN Animal ✅
\`\`\`

**Composition (HAS-A relationship):**
- A class contains an instance of another class as a field
- Loose coupling — more flexible, easier to change
- Use when "B HAS A" (Car HAS AN Engine)

\`\`\`java
class Engine {
    void start() { System.out.println("Engine starting"); }
}

class Car {
    private Engine engine;  // HAS-A relationship
    
    Car() { this.engine = new Engine(); }
    
    void startCar() {
        engine.start();  // delegates to Engine
        System.out.println("Car started");
    }
}
\`\`\`

**Why "Prefer Composition over Inheritance"?**
- More flexible — can change the composed object at runtime
- Avoids fragile base class problem
- Better encapsulation — internal implementation is hidden
- Supports programming to interfaces

\`\`\`java
// Even better — program to an interface
interface Driveable { void drive(); }

class Car {
    private Driveable engine;  // can inject any Driveable implementation
    Car(Driveable e) { this.engine = e; }
}
\`\`\``,
    tags: ["Composition", "Inheritance", "Design", "OOP", "HAS-A", "IS-A"],
  },
  {
    id: 45,
    difficulty: "Hard",
    category: "Core Java",
    question: "What is the Java Memory Model (JMM)?",
    answer: `The **Java Memory Model (JMM)** defines how threads interact through memory — it specifies rules about when changes made by one thread become visible to other threads.

**Memory Areas in JVM:**

1. **Heap** — shared memory for all objects (managed by GC)
2. **Stack** — per-thread memory for local variables and method calls
3. **Method Area** — class metadata, static variables, method bytecode
4. **PC Register** — per-thread program counter (current instruction)
5. **Native Method Stack** — for native (non-Java) method calls

**The Core Problem JMM Solves:**
Modern CPUs have multiple levels of cache. Without rules, threads may see stale data from their CPU cache instead of the latest value in main memory.

\`\`\`
Thread 1 (CPU 1 cache): count = 5
Thread 2 (CPU 2 cache): count = 0   ← stale!
Main Memory:            count = 5
\`\`\`

**JMM guarantees through happens-before rules:**
- \`synchronized\` — actions before unlock are visible after lock
- \`volatile\` — write to volatile is visible to all subsequent reads
- Thread start — actions before \`t.start()\` are visible to the new thread
- Thread join — all actions in a thread are visible after \`t.join()\`

**Practical implications:**
\`\`\`java
// Without synchronization: may see stale value
int sharedVar = 0;

// With volatile: guaranteed visibility
volatile int sharedVar = 0;

// With synchronized: guaranteed visibility + atomicity
synchronized void update() { sharedVar++; }
\`\`\``,
    tags: ["JMM", "Java Memory Model", "JVM", "Thread Safety"],
  },
  {
    id: 46,
    difficulty: "Hard",
    category: "Java 8+",
    question: "What are the new features introduced in Java 8?",
    answer: `Java 8 (released March 2014) was a major release with many significant features:

**1. Lambda Expressions**
\`\`\`java
list.forEach(s -> System.out.println(s));
\`\`\`

**2. Functional Interfaces** (\`java.util.function\`)
- \`Predicate\`, \`Function\`, \`Consumer\`, \`Supplier\`, \`BiFunction\`, etc.

**3. Stream API** — functional data processing
\`\`\`java
list.stream().filter(s -> s.length() > 3).collect(Collectors.toList());
\`\`\`

**4. Default and Static Methods in Interfaces**
\`\`\`java
interface Greeting { default void hello() { System.out.println("Hi"); } }
\`\`\`

**5. Optional<T>** — null-safe container
\`\`\`java
Optional<String> opt = Optional.ofNullable(value);
\`\`\`

**6. New Date and Time API** (\`java.time\`) — replaces old buggy \`Date\` and \`Calendar\`
\`\`\`java
LocalDate today = LocalDate.now();
LocalDateTime now = LocalDateTime.now();
ZonedDateTime zdt = ZonedDateTime.now(ZoneId.of("Asia/Kolkata"));
\`\`\`

**7. Method References**
\`\`\`java
list.forEach(System.out::println);
\`\`\`

**8. Nashorn JavaScript Engine** — run JS inside Java (later deprecated)

**9. CompletableFuture** — asynchronous programming API
\`\`\`java
CompletableFuture.supplyAsync(() -> fetchData())
                 .thenApply(data -> process(data))
                 .thenAccept(System.out::println);
\`\`\`

**10. StringJoiner and String.join()**
\`\`\`java
String.join(", ", "Alice", "Bob", "Charlie");  // "Alice, Bob, Charlie"
\`\`\``,
    tags: ["Java 8", "Lambda", "Stream", "Optional", "New Features"],
  },
  {
    id: 47,
    difficulty: "Hard",
    category: "Collections",
    question: "What is the ConcurrentHashMap in Java and why is it better than HashTable?",
    answer: `**ConcurrentHashMap** is a thread-safe Map implementation designed for high-concurrency scenarios, introduced in Java 5 (java.util.concurrent).

**Why better than HashTable?**

**HashTable:**
- Synchronizes the **entire map** with a single lock
- Only one thread can read/write at a time — very slow under high concurrency
- Legacy class, not recommended

**ConcurrentHashMap:**
- Uses **segment-level locking** (Java 7: 16 segments) / **bucket-level CAS** (Java 8+)
- Multiple threads can read/write concurrently to different parts
- Much higher throughput under concurrency

\`\`\`java
// HashTable — entire map locked
Hashtable<String, Integer> table = new Hashtable<>();
// all operations synchronized on one lock — slow!

// ConcurrentHashMap — fine-grained locking
ConcurrentHashMap<String, Integer> cmap = new ConcurrentHashMap<>();
cmap.put("Alice", 90);
cmap.put("Bob", 85);
int val = cmap.get("Alice");  // 90

// Atomic operations
cmap.putIfAbsent("Charlie", 0);    // only insert if key absent
cmap.computeIfPresent("Alice", (k, v) -> v + 10);  // update atomically
cmap.merge("Alice", 5, Integer::sum);  // add 5 to existing value
\`\`\`

| Feature | HashTable | ConcurrentHashMap |
|---------|-----------|-------------------|
| Null keys/values | No | No |
| Synchronization | Whole map | Per bucket (Java 8) |
| Performance | Low | High |
| Recommended | No (legacy) | Yes |

> **When to use:** Use ConcurrentHashMap whenever you need a thread-safe Map in production code.`,
    tags: ["ConcurrentHashMap", "Thread Safety", "Concurrency", "Collections"],
  },
  {
    id: 48,
    difficulty: "Hard",
    category: "Core Java",
    question: "What is the difference between a checked exception and an Error in Java?",
    answer: `Both extend \`Throwable\`, but they represent completely different situations:

**Checked Exception:**
- Extends \`Exception\` (but NOT \`RuntimeException\`)
- Represents **recoverable** conditions — problems the program can anticipate and handle
- Compiler forces you to handle them (try-catch or throws)
- Examples: \`IOException\`, \`SQLException\`, \`ClassNotFoundException\`

\`\`\`java
// Checked — you MUST handle this
try {
    Connection conn = DriverManager.getConnection(url);  // SQLException
    FileReader fr = new FileReader("file.txt");          // FileNotFoundException
} catch (SQLException | IOException e) {
    // recover: retry, log, show user message
    System.out.println("Resource issue: " + e.getMessage());
}
\`\`\`

**Error:**
- Extends \`Error\` class (separate from Exception hierarchy)
- Represents **unrecoverable** JVM-level problems — not caused by the application
- Compiler does NOT force handling
- Should generally NOT be caught
- Examples: \`OutOfMemoryError\`, \`StackOverflowError\`, \`VirtualMachineError\`

\`\`\`java
// Error — do NOT try to recover normally
// StackOverflowError from infinite recursion:
void infinite() { infinite(); }  // → StackOverflowError

// OutOfMemoryError from filling heap:
List<byte[]> list = new ArrayList<>();
while(true) list.add(new byte[1024*1024]);  // → OutOfMemoryError
\`\`\`

**Exception Hierarchy:**
\`\`\`
Throwable
├── Exception
│   ├── Checked Exceptions (IOException, SQLException...)
│   └── RuntimeException (NullPointerException, ArrayIndexOutOfBoundsException...)
└── Error (OutOfMemoryError, StackOverflowError...) ← don't catch!
\`\`\``,
    tags: ["Error", "Exception", "Checked Exception", "Throwable"],
  },
  {
    id: 49,
    difficulty: "Hard",
    category: "Core Java",
    question: "What is a generic class in Java?",
    answer: `**Generics** (Java 5) allow classes, interfaces, and methods to operate on objects of various types while providing **compile-time type safety**.

**Without Generics (old way — unsafe):**
\`\`\`java
// Raw type — no type safety, casting required
List list = new ArrayList();
list.add("hello");
list.add(42);  // no error — mixes types!
String s = (String) list.get(1);  // ClassCastException at runtime!
\`\`\`

**With Generics (type-safe):**
\`\`\`java
List<String> list = new ArrayList<>();
list.add("hello");
// list.add(42);  // Compile error — caught early! ✅
String s = list.get(0);  // no cast needed
\`\`\`

**Generic Class:**
\`\`\`java
class Box<T> {  // T is type parameter
    private T value;
    
    Box(T value) { this.value = value; }
    
    T getValue() { return value; }
}

Box<String> strBox = new Box<>("Hello");
Box<Integer> intBox = new Box<>(42);
System.out.println(strBox.getValue());  // "Hello"
\`\`\`

**Generic Method:**
\`\`\`java
static <T extends Comparable<T>> T max(T a, T b) {
    return a.compareTo(b) >= 0 ? a : b;
}
System.out.println(max(3, 7));       // 7
System.out.println(max("a", "z"));   // z
\`\`\`

**Wildcards:**
\`\`\`java
void printList(List<?> list) { ... }         // any type
void addNumbers(List<? extends Number> l) {} // Number or subtype
void addObjects(List<? super Integer> l) {}  // Integer or supertype
\`\`\``,
    tags: ["Generics", "Type Safety", "Generic Class", "Wildcards"],
  },
  {
    id: 50,
    difficulty: "Hard",
    category: "Core Java",
    question: "What is the difference between fail-fast and fail-safe iterators in Java?",
    answer: `This is about how iterators behave when the collection is modified during iteration:

**Fail-Fast Iterator:**
- **Immediately throws \`ConcurrentModificationException\`** if the collection is structurally modified while iterating
- Works on the **original collection** (no copy)
- Uses an internal modification count (\`modCount\`) to detect changes
- Examples: \`ArrayList\`, \`HashMap\`, \`HashSet\` iterators

\`\`\`java
List<String> list = new ArrayList<>(Arrays.asList("A", "B", "C"));
Iterator<String> it = list.iterator();
while (it.hasNext()) {
    String s = it.next();
    list.add("D");  // modifying collection during iteration!
    // throws ConcurrentModificationException ❌
}

// Safe way to remove during iteration — use iterator's remove()
while (it.hasNext()) {
    if (it.next().equals("B")) {
        it.remove();  // ✅ safe
    }
}
\`\`\`

**Fail-Safe Iterator:**
- **Does NOT throw exception** if collection is modified during iteration
- Works on a **snapshot/copy** of the collection
- Changes made after iterator is created are NOT visible in iteration
- Examples: \`ConcurrentHashMap\`, \`CopyOnWriteArrayList\` iterators

\`\`\`java
CopyOnWriteArrayList<String> list = new CopyOnWriteArrayList<>(Arrays.asList("A", "B", "C"));
Iterator<String> it = list.iterator();
while (it.hasNext()) {
    list.add("D");  // modifying — NO exception! ✅
    System.out.println(it.next());  // prints A, B, C (not D — snapshot)
}
\`\`\`

| Feature | Fail-Fast | Fail-Safe |
|---------|-----------|-----------|
| Exception | Yes (CME) | No |
| Works on | Original | Snapshot |
| Memory | Less | More |
| Examples | ArrayList, HashMap | ConcurrentHashMap, CopyOnWriteArrayList |`,
    tags: ["Fail-Fast", "Fail-Safe", "Iterator", "ConcurrentModificationException"],
  },

  {
    id: 51,
    difficulty: "Easy",
    category: "Core Java",
    question: "What is the difference between == and .equals() in Java?",
    answer: `In Java, **==** and **.equals()** are two different ways to compare objects, and understanding the difference is very important.

**== Operator:**
- Compares **references** (memory addresses), not content
- Checks if both variables point to the **same object in memory**
- For primitive types (int, char, etc.), compares **actual values**

**\`.equals()\` Method:**
- Compares **content/values** of objects
- Defined in \`Object\` class, can be **overridden** in custom classes
- \`String\`, \`Integer\`, etc. override it to compare actual content

\`\`\`java
String s1 = new String("Hello");
String s2 = new String("Hello");

System.out.println(s1 == s2);       // false (different objects)
System.out.println(s1.equals(s2));  // true (same content)

// String literals (String Pool)
String s3 = "Hello";
String s4 = "Hello";
System.out.println(s3 == s4);       // true (same pool reference)
\`\`\`

**Summary Table:**
| Comparison | == | .equals() |
|---|---|---|
| Compares | References | Content |
| Primitives | Values | N/A |
| Overridable | No | Yes |
| Null safe | Yes | No (NullPointerException) |`,
    tags: ["equals", "==", "String", "Core Java"],
  },
  {
    id: 52,
    difficulty: "Easy",
    category: "OOP",
    question: "What is inheritance in Java? Explain with example.",
    answer: `**Inheritance** is an OOP concept where a child class (subclass) acquires the properties and behaviors of a parent class (superclass).

**Why use Inheritance?**
- Code **reusability** — don't rewrite same code
- Establishes **IS-A relationship** (Dog IS-A Animal)
- Supports **method overriding** for polymorphism

**Types of Inheritance in Java:**
1. **Single** — one parent, one child
2. **Multilevel** — A → B → C
3. **Hierarchical** — one parent, multiple children
4. ❌ **Multiple** — NOT supported in Java via classes (but possible via interfaces)

\`\`\`java
// Parent class
class Animal {
    String name;
    void eat() {
        System.out.println(name + " is eating");
    }
}

// Child class inherits Animal
class Dog extends Animal {
    void bark() {
        System.out.println(name + " is barking");
    }
}

// Usage
Dog dog = new Dog();
dog.name = "Buddy";
dog.eat();   // inherited from Animal
dog.bark();  // Dog's own method
\`\`\`

**Key keyword:** \`extends\` is used for class inheritance, \`implements\` for interfaces.`,
    tags: ["Inheritance", "OOP", "extends", "Subclass"],
  },
  {
    id: 53,
    difficulty: "Easy",
    category: "OOP",
    question: "What is polymorphism in Java?",
    answer: `**Polymorphism** means "many forms." In Java, it allows one interface/method to work in different ways depending on the object.

**Two types:**

**1. Compile-time Polymorphism (Method Overloading):**
- Same method name, different parameters
- Resolved at **compile time**

\`\`\`java
class Calculator {
    int add(int a, int b) { return a + b; }
    double add(double a, double b) { return a + b; }  // overloaded
    int add(int a, int b, int c) { return a + b + c; } // overloaded
}
\`\`\`

**2. Runtime Polymorphism (Method Overriding):**
- Child class provides its own implementation of parent's method
- Resolved at **runtime** via dynamic dispatch

\`\`\`java
class Shape {
    void draw() { System.out.println("Drawing shape"); }
}
class Circle extends Shape {
    @Override
    void draw() { System.out.println("Drawing circle"); }
}
class Square extends Shape {
    @Override
    void draw() { System.out.println("Drawing square"); }
}

Shape s = new Circle();
s.draw();  // Output: Drawing circle (runtime decision)
\`\`\`

**Benefits:** Flexibility, extensibility, cleaner code.`,
    tags: ["Polymorphism", "OOP", "Overloading", "Overriding"],
  },
  {
    id: 54,
    difficulty: "Easy",
    category: "OOP",
    question: "What is encapsulation in Java?",
    answer: `**Encapsulation** is the OOP principle of **wrapping data (variables) and methods together** in a class, and **hiding internal details** from outside using access modifiers.

**How to achieve encapsulation:**
1. Declare fields as **\`private\`**
2. Provide **public getter and setter** methods to access/modify

\`\`\`java
class BankAccount {
    private double balance;  // hidden from outside

    // Getter
    public double getBalance() {
        return balance;
    }

    // Setter with validation
    public void deposit(double amount) {
        if (amount > 0) {
            balance += amount;
        } else {
            System.out.println("Invalid amount!");
        }
    }
}

BankAccount acc = new BankAccount();
acc.deposit(1000);
System.out.println(acc.getBalance());  // 1000.0
// acc.balance = -5000;  // ❌ Not allowed — private!
\`\`\`

**Benefits of Encapsulation:**
- 🔒 **Data hiding** — prevents unauthorized access
- ✅ **Validation** — control what values are set
- 🔧 **Flexibility** — internal implementation can change without affecting outside code
- 🧪 **Testability** — easier to unit test`,
    tags: ["Encapsulation", "OOP", "Private", "Getter", "Setter"],
  },
  {
    id: 55,
    difficulty: "Easy",
    category: "OOP",
    question: "What is abstraction in Java?",
    answer: `**Abstraction** means **hiding implementation details** and showing only the **essential features** to the user.

**Real-life example:** When you drive a car, you only know the steering wheel and pedals — you don't need to know how the engine works internally.

**Two ways to achieve abstraction in Java:**

**1. Abstract Classes (partial abstraction):**
\`\`\`java
abstract class Vehicle {
    abstract void start();  // no implementation — abstract method

    void stop() {           // concrete method
        System.out.println("Vehicle stopped");
    }
}

class Car extends Vehicle {
    @Override
    void start() {
        System.out.println("Car engine started with key");
    }
}
\`\`\`

**2. Interfaces (100% abstraction):**
\`\`\`java
interface Payment {
    void pay(double amount);
}

class CreditCard implements Payment {
    public void pay(double amount) {
        System.out.println("Paid " + amount + " via Credit Card");
    }
}
\`\`\`

**Key Points:**
- Abstract class: 0–100% abstraction, can have constructors
- Interface: 100% abstraction (before Java 8), can have default methods (Java 8+)`,
    tags: ["Abstraction", "OOP", "Abstract Class", "Interface"],
  },
  {
    id: 56,
    difficulty: "Medium",
    category: "Core Java",
    question: "What is the difference between String, StringBuilder, and StringBuffer?",
    answer: `All three deal with strings in Java but have key differences:

**String:**
- **Immutable** — once created, cannot be changed
- Each modification creates a **new object** in memory
- Stored in **String Pool**
- Thread-safe (immutable by nature)
- Use when string **doesn't change** frequently

**StringBuilder:**
- **Mutable** — can be modified without creating new objects
- **NOT thread-safe** (no synchronization)
- **Faster** than StringBuffer
- Use in **single-threaded** environments with frequent modifications

**StringBuffer:**
- **Mutable** — like StringBuilder
- **Thread-safe** (synchronized methods)
- **Slower** than StringBuilder due to synchronization overhead
- Use in **multi-threaded** environments

\`\`\`java
// String — new object each time
String s = "Hello";
s = s + " World";  // new object created

// StringBuilder — modifies same object
StringBuilder sb = new StringBuilder("Hello");
sb.append(" World");  // same object modified
sb.insert(5, ",");
sb.reverse();

// StringBuffer — thread-safe
StringBuffer sbf = new StringBuffer("Hello");
sbf.append(" World");
\`\`\`

| Feature | String | StringBuilder | StringBuffer |
|---|---|---|---|
| Mutable | No | Yes | Yes |
| Thread-safe | Yes | No | Yes |
| Performance | Slow | Fast | Medium |`,
    tags: ["String", "StringBuilder", "StringBuffer", "Immutable"],
  },
  {
    id: 57,
    difficulty: "Medium",
    category: "Core Java",
    question: "What are access modifiers in Java? Explain all four.",
    answer: `**Access modifiers** control the visibility/accessibility of classes, methods, and variables.

**4 Access Modifiers:**

**1. \`public\`:**
- Accessible from **everywhere** (any class, any package)
- Most open access level

**2. \`protected\`:**
- Accessible within **same package** + **subclasses** (even in different packages)

**3. \`default\`** (no keyword, package-private):
- Accessible only within the **same package**
- When no modifier is written

**4. \`private\`:**
- Accessible only within the **same class**
- Most restrictive

\`\`\`java
class Example {
    public int a = 1;       // anywhere
    protected int b = 2;    // same package + subclasses
    int c = 3;              // same package only (default)
    private int d = 4;      // same class only
}
\`\`\`

**Summary Table:**

| Modifier | Same Class | Same Package | Subclass | Other Packages |
|---|---|---|---|---|
| public | ✅ | ✅ | ✅ | ✅ |
| protected | ✅ | ✅ | ✅ | ❌ |
| default | ✅ | ✅ | ❌ | ❌ |
| private | ✅ | ❌ | ❌ | ❌ |

**Best Practice:** Use the **most restrictive** modifier needed — prefer \`private\`, then \`protected\`, then \`public\`.`,
    tags: ["Access Modifiers", "public", "private", "protected"],
  },
  {
    id: 58,
    difficulty: "Medium",
    category: "Core Java",
    question: "What is a constructor in Java? What are its types?",
    answer: `A **constructor** is a special method that is called **automatically** when an object is created. It initializes the object's state.

**Key Properties:**
- Same name as the class
- No return type (not even \`void\`)
- Called automatically with \`new\` keyword

**Types of Constructors:**

**1. Default Constructor** (no parameters):
\`\`\`java
class Student {
    String name;
    int age;

    // Default constructor
    Student() {
        name = "Unknown";
        age = 0;
    }
}
\`\`\`

**2. Parameterized Constructor:**
\`\`\`java
class Student {
    String name;
    int age;

    Student(String n, int a) {
        name = n;
        age = a;
    }
}
Student s = new Student("Rahul", 20);
\`\`\`

**3. Copy Constructor:**
\`\`\`java
class Student {
    String name;

    // Copy constructor
    Student(Student other) {
        this.name = other.name;
    }
}
\`\`\`

**Constructor Chaining:** Calling one constructor from another using \`this()\` or \`super()\`.

\`\`\`java
class Box {
    int l, w, h;
    Box() { this(1, 1, 1); }  // calls parameterized
    Box(int l, int w, int h) {
        this.l = l; this.w = w; this.h = h;
    }
}
\`\`\``,
    tags: ["Constructor", "Default Constructor", "Parameterized", "this"],
  },
  {
    id: 59,
    difficulty: "Medium",
    category: "Core Java",
    question: "What is the 'static' keyword in Java?",
    answer: `The **\`static\`** keyword means that a member belongs to the **class itself**, not to any specific object/instance.

**Where static can be used:**
1. Static variables
2. Static methods
3. Static blocks
4. Static nested classes

**1. Static Variables (Class Variables):**
- Shared among **all objects** of the class
- Only **one copy** in memory
\`\`\`java
class Counter {
    static int count = 0;  // shared
    Counter() { count++; }
}
Counter c1 = new Counter();
Counter c2 = new Counter();
System.out.println(Counter.count);  // 2
\`\`\`

**2. Static Methods:**
- Can be called **without creating object**: \`ClassName.method()\`
- Cannot access **non-static** members directly
\`\`\`java
class MathUtils {
    static int square(int n) { return n * n; }
}
System.out.println(MathUtils.square(5));  // 25
\`\`\`

**3. Static Block:**
- Runs once when class is **loaded into memory**
- Used for static initialization
\`\`\`java
class Config {
    static String db;
    static {
        db = "MySQL";  // runs when class loads
        System.out.println("Config loaded");
    }
}
\`\`\`

**Key Rule:** Static methods can only call other static methods and access static variables directly.`,
    tags: ["static", "Static Method", "Static Variable", "Class Level"],
  },
  {
    id: 60,
    difficulty: "Medium",
    category: "Core Java",
    question: "What is the difference between final, finally, and finalize in Java?",
    answer: `These three are often confused but are completely different concepts:

**1. \`final\` (keyword):**
- **Variable** → value cannot be changed (constant)
- **Method** → cannot be overridden in subclass
- **Class** → cannot be inherited (e.g., \`String\` class is final)

\`\`\`java
final int MAX = 100;
// MAX = 200;  // ❌ compilation error

final class ImmutableClass { }
// class Child extends ImmutableClass { }  // ❌ error

class Parent {
    final void show() { System.out.println("Parent"); }
}
// class Child extends Parent {
//     void show() { }  // ❌ Cannot override final method
// }
\`\`\`

**2. \`finally\` (block):**
- Used with try-catch
- **Always executes** whether exception occurs or not
- Used for cleanup (closing files, DB connections)

\`\`\`java
try {
    int result = 10 / 0;
} catch (Exception e) {
    System.out.println("Exception: " + e.getMessage());
} finally {
    System.out.println("This always runs!");  // ✅ always
}
\`\`\`

**3. \`finalize()\` (method):**
- Method in \`Object\` class
- Called by **Garbage Collector** before destroying an object
- Deprecated in Java 9+, not reliable

\`\`\`java
@Override
protected void finalize() throws Throwable {
    System.out.println("Object being garbage collected");
}
\`\`\`

| | final | finally | finalize |
|---|---|---|---|
| Type | Keyword | Block | Method |
| Purpose | Restrict change | Cleanup code | Pre-GC action |`,
    tags: ["final", "finally", "finalize", "Keywords"],
  },
  {
    id: 61,
    difficulty: "Medium",
    category: "Exception Handling",
    question: "What is exception handling in Java? Explain try-catch-finally.",
    answer: `**Exception handling** is a mechanism to handle **runtime errors** gracefully without crashing the program.

**Exception Hierarchy:**
\`\`\`
Throwable
├── Error (JVM errors — don't catch these)
│   └── OutOfMemoryError, StackOverflowError
└── Exception
    ├── Checked Exceptions (compile-time)
    │   └── IOException, SQLException
    └── Unchecked Exceptions (runtime)
        └── NullPointerException, ArrayIndexOutOfBoundsException
\`\`\`

**try-catch-finally:**
\`\`\`java
try {
    // risky code
    int[] arr = new int[5];
    arr[10] = 50;  // throws ArrayIndexOutOfBoundsException
} catch (ArrayIndexOutOfBoundsException e) {
    System.out.println("Array error: " + e.getMessage());
} catch (Exception e) {
    System.out.println("General error: " + e.getMessage());
} finally {
    System.out.println("Always runs — cleanup here");
}
\`\`\`

**Checked vs Unchecked:**
- **Checked** → must handle with try-catch or declare with \`throws\`
- **Unchecked** → optional to handle (RuntimeException subclasses)

**throw vs throws:**
\`\`\`java
// throw — manually throw an exception
throw new IllegalArgumentException("Invalid input");

// throws — declare method may throw exception
public void readFile() throws IOException { ... }
\`\`\`

**Custom Exception:**
\`\`\`java
class AgeException extends Exception {
    AgeException(String msg) { super(msg); }
}
\`\`\``,
    tags: ["Exception Handling", "try-catch", "throw", "throws", "Checked", "Unchecked"],
  },
  {
    id: 62,
    difficulty: "Medium",
    category: "Collections",
    question: "What is the difference between ArrayList and LinkedList?",
    answer: `Both implement the \`List\` interface but have different internal structures and performance characteristics.

**ArrayList:**
- Backed by a **dynamic array**
- Fast **random access** — O(1) for get by index
- Slow **insertion/deletion** in middle — O(n) due to shifting
- Better for **read-heavy** operations

**LinkedList:**
- Backed by a **doubly linked list**
- Slow **random access** — O(n) for get by index
- Fast **insertion/deletion** at head/tail — O(1)
- Also implements **Deque** interface (can be used as queue/stack)
- Uses more memory (stores prev + next pointers)

\`\`\`java
// ArrayList
ArrayList<String> al = new ArrayList<>();
al.add("A");
al.add("B");
al.get(0);   // O(1) — fast

// LinkedList
LinkedList<String> ll = new LinkedList<>();
ll.add("A");
ll.addFirst("Z");   // O(1)
ll.addLast("M");    // O(1)
ll.get(1);          // O(n) — traversal needed
\`\`\`

| Feature | ArrayList | LinkedList |
|---|---|---|
| Internal | Dynamic array | Doubly linked list |
| get(index) | O(1) | O(n) |
| add/remove middle | O(n) | O(1) |
| Memory | Less | More |
| Use case | Read operations | Insert/Delete operations |

**Rule of thumb:** Use **ArrayList** unless you need frequent insertions/deletions in the middle.`,
    tags: ["ArrayList", "LinkedList", "Collections", "List"],
  },
  {
    id: 63,
    difficulty: "Medium",
    category: "Collections",
    question: "What is the difference between HashMap and Hashtable?",
    answer: `Both implement the \`Map\` interface and store key-value pairs, but have important differences:

**HashMap:**
- **Not synchronized** (not thread-safe)
- Allows **one null key** and **multiple null values**
- **Faster** (no synchronization overhead)
- Introduced in **Java 1.2**
- Part of Java Collections Framework

**Hashtable:**
- **Synchronized** (thread-safe)
- **Does NOT allow** null keys or null values
- **Slower** due to synchronization
- Introduced in **Java 1.0** (legacy class)
- Not part of Collections Framework originally

\`\`\`java
// HashMap
HashMap<String, Integer> map = new HashMap<>();
map.put(null, 1);      // ✅ null key allowed
map.put("A", null);    // ✅ null value allowed
map.put("B", 2);

// Hashtable
Hashtable<String, Integer> ht = new Hashtable<>();
// ht.put(null, 1);    // ❌ NullPointerException
// ht.put("A", null);  // ❌ NullPointerException
ht.put("A", 1);        // ✅
\`\`\`

| Feature | HashMap | Hashtable |
|---|---|---|
| Thread-safe | No | Yes |
| Null keys | 1 allowed | Not allowed |
| Performance | Fast | Slow |
| Legacy | No | Yes |

**Modern alternative:** For thread-safe map, use **\`ConcurrentHashMap\`** instead of Hashtable — it's faster and more scalable.`,
    tags: ["HashMap", "Hashtable", "Collections", "Thread-safe"],
  },
  {
    id: 64,
    difficulty: "Medium",
    category: "Core Java",
    question: "What is autoboxing and unboxing in Java?",
    answer: `**Autoboxing** is the **automatic conversion** of a primitive type to its corresponding **wrapper class** object.

**Unboxing** is the reverse — **automatic conversion** of a wrapper class object to its **primitive type**.

**Primitive → Wrapper Class Mapping:**
| Primitive | Wrapper |
|---|---|
| int | Integer |
| double | Double |
| boolean | Boolean |
| char | Character |
| long | Long |
| float | Float |

\`\`\`java
// Autoboxing — primitive to wrapper
int num = 42;
Integer obj = num;  // autoboxing (auto: Integer.valueOf(42))

// Unboxing — wrapper to primitive
Integer obj2 = new Integer(100);
int n = obj2;       // unboxing (auto: obj2.intValue())

// In collections — autoboxing happens automatically
List<Integer> list = new ArrayList<>();
list.add(5);     // autoboxing: int → Integer
int x = list.get(0);  // unboxing: Integer → int
\`\`\`

**Tricky interview example:**
\`\`\`java
Integer a = 127;
Integer b = 127;
System.out.println(a == b);  // true (Integer cache: -128 to 127)

Integer c = 200;
Integer d = 200;
System.out.println(c == d);  // false (outside cache range!)
System.out.println(c.equals(d));  // true ✅
\`\`\`

**Performance Note:** Avoid autoboxing in loops — creates many objects and slows performance.`,
    tags: ["Autoboxing", "Unboxing", "Wrapper Class", "Primitives"],
  },
  {
    id: 65,
    difficulty: "Medium",
    category: "Core Java",
    question: "What are Java 8 features? Explain the most important ones.",
    answer: `**Java 8** (released 2014) was a major release with many new features that changed how Java code is written.

**Key Java 8 Features:**

**1. Lambda Expressions:**
- Anonymous functions — concise way to pass behavior
\`\`\`java
// Before Java 8
Runnable r = new Runnable() {
    public void run() { System.out.println("Running"); }
};

// Java 8 Lambda
Runnable r = () -> System.out.println("Running");
\`\`\`

**2. Functional Interfaces:**
- Interface with exactly **one abstract method**
- \`@FunctionalInterface\` annotation
- Examples: \`Runnable\`, \`Comparator\`, \`Predicate\`, \`Function\`, \`Consumer\`

**3. Stream API:**
\`\`\`java
List<Integer> nums = Arrays.asList(1, 2, 3, 4, 5);
int sum = nums.stream()
              .filter(n -> n % 2 == 0)   // [2, 4]
              .mapToInt(Integer::intValue)
              .sum();  // 6
\`\`\`

**4. Default Methods in Interfaces:**
- Interfaces can now have method bodies
\`\`\`java
interface Greeting {
    default void greet() { System.out.println("Hello!"); }
}
\`\`\`

**5. Optional Class:**
- Avoids NullPointerException
\`\`\`java
Optional<String> name = Optional.ofNullable(getName());
name.ifPresent(n -> System.out.println(n));
\`\`\`

**6. New Date/Time API (\`java.time\`):**
- \`LocalDate\`, \`LocalTime\`, \`LocalDateTime\`, \`ZonedDateTime\`

**7. Method References (\`::\`):**
\`\`\`java
List<String> names = Arrays.asList("Alice", "Bob");
names.forEach(System.out::println);
\`\`\``,
    tags: ["Java 8", "Lambda", "Stream API", "Optional", "Default Methods"],
  },
  {
    id: 66,
    difficulty: "Medium",
    category: "Multithreading",
    question: "What is multithreading in Java? How to create a thread?",
    answer: `**Multithreading** allows a Java program to execute **multiple threads simultaneously**, enabling better CPU utilization and faster performance.

**Thread vs Process:**
- **Process** = separate program with its own memory
- **Thread** = lightweight unit within a process, shares memory

**Two ways to create threads:**

**1. Extend \`Thread\` class:**
\`\`\`java
class MyThread extends Thread {
    public void run() {
        System.out.println("Thread running: " + Thread.currentThread().getName());
    }
}

MyThread t1 = new MyThread();
t1.start();  // starts thread (calls run() internally)
\`\`\`

**2. Implement \`Runnable\` interface (preferred):**
\`\`\`java
class MyRunnable implements Runnable {
    public void run() {
        System.out.println("Runnable running");
    }
}

Thread t = new Thread(new MyRunnable());
t.start();

// Lambda shortcut (Java 8)
Thread t2 = new Thread(() -> System.out.println("Lambda thread"));
t2.start();
\`\`\`

**Thread Lifecycle:**
\`\`\`
New → Runnable → Running → Blocked/Waiting → Terminated
\`\`\`

**Important Methods:**
- \`start()\` — starts the thread
- \`run()\` — contains thread logic
- \`sleep(ms)\` — pauses thread
- \`join()\` — waits for thread to finish
- \`interrupt()\` — interrupts a thread

**Why Runnable over Thread?**
Java doesn't support multiple inheritance, so implementing Runnable allows your class to also extend another class.`,
    tags: ["Multithreading", "Thread", "Runnable", "Concurrency"],
  },
  {
    id: 67,
    difficulty: "Hard",
    category: "Multithreading",
    question: "What is synchronization in Java? When and why is it needed?",
    answer: `**Synchronization** is the mechanism that ensures **only one thread** can access a shared resource at a time, preventing **race conditions** and **data inconsistency**.

**Problem without synchronization (Race Condition):**
\`\`\`java
class Counter {
    int count = 0;
    void increment() { count++; }  // NOT atomic! (read-modify-write)
}

Counter c = new Counter();
// Two threads calling increment() simultaneously
// Expected: 2000 | Actual: may be less (race condition!)
\`\`\`

**Fixing with synchronized:**

**1. Synchronized Method:**
\`\`\`java
class Counter {
    int count = 0;
    synchronized void increment() { count++; }  // thread-safe ✅
}
\`\`\`

**2. Synchronized Block (more granular, better performance):**
\`\`\`java
class Counter {
    int count = 0;
    Object lock = new Object();

    void increment() {
        synchronized(lock) {  // only this block is locked
            count++;
        }
        // other code runs without lock
    }
}
\`\`\`

**How it works:**
- Each object has an intrinsic lock (monitor)
- \`synchronized\` makes thread **acquire the lock**
- Other threads **wait** until lock is released

**Problems with synchronization:**
- **Deadlock** — two threads wait for each other's lock forever
- **Performance** — lock acquisition has overhead

**Modern alternatives:**
- \`ReentrantLock\` (from java.util.concurrent.locks)
- \`AtomicInteger\`, \`AtomicLong\` for simple counters
- \`ConcurrentHashMap\` for maps`,
    tags: ["Synchronization", "Thread Safety", "Race Condition", "Deadlock"],
  },
  {
    id: 68,
    difficulty: "Hard",
    category: "Core Java",
    question: "What is the Java Memory Model? Explain heap and stack memory.",
    answer: `Java Memory is divided into different areas, each serving a specific purpose.

**Stack Memory:**
- Stores **method call frames**, local variables, and references
- Each thread has its **own stack**
- Memory is automatically freed when method returns (LIFO)
- Fast access
- Limited in size → **StackOverflowError** if exceeded (e.g., infinite recursion)

**Heap Memory:**
- Stores all **objects** and their instance variables
- **Shared across all threads**
- Managed by **Garbage Collector**
- Larger than stack
- \`new\` keyword allocates on heap
- **OutOfMemoryError** if heap is full

\`\`\`java
void method() {
    int x = 10;           // Stack: local primitive
    String s = "Hello";   // Stack: reference, Heap: "Hello" object
    Student st = new Student();  // Stack: reference, Heap: Student object
}
// When method returns: x, s, st references removed from stack
// Heap objects eligible for GC if no references
\`\`\`

**String Pool (part of Heap):**
\`\`\`java
String s1 = "Hello";  // stored in String Pool
String s2 = "Hello";  // reuses same Pool object
String s3 = new String("Hello");  // new object on Heap (outside pool)
\`\`\`

**Method Area / Metaspace:**
- Stores class metadata, static variables, method bytecode
- Shared across threads

**Key Points:**
- Local variables → Stack
- Objects → Heap
- Static variables → Metaspace
- Thread-local → each thread's own stack`,
    tags: ["Memory Model", "Heap", "Stack", "JVM", "Garbage Collection"],
  },
  {
    id: 69,
    difficulty: "Medium",
    category: "Collections",
    question: "What is the difference between List, Set, and Map in Java?",
    answer: `These are the three main interfaces in the Java Collections Framework:

**List:**
- **Ordered** collection (maintains insertion order)
- Allows **duplicate** elements
- Access by **index**
- Implementations: \`ArrayList\`, \`LinkedList\`, \`Vector\`
\`\`\`java
List<String> list = new ArrayList<>();
list.add("A"); list.add("B"); list.add("A");
// [A, B, A] — duplicates allowed, ordered
\`\`\`

**Set:**
- **No duplicates** allowed
- May or may not maintain order (depends on implementation)
- No index-based access
- Implementations: \`HashSet\` (unordered), \`LinkedHashSet\` (insertion order), \`TreeSet\` (sorted)
\`\`\`java
Set<String> set = new HashSet<>();
set.add("A"); set.add("B"); set.add("A");
// {A, B} — duplicate "A" ignored
\`\`\`

**Map:**
- Stores **key-value pairs**
- Keys must be **unique**, values can repeat
- Not a Collection (separate interface)
- Implementations: \`HashMap\`, \`LinkedHashMap\`, \`TreeMap\`, \`Hashtable\`
\`\`\`java
Map<String, Integer> map = new HashMap<>();
map.put("Alice", 90);
map.put("Bob", 85);
map.put("Alice", 95);  // updates existing key
// {Alice=95, Bob=85}
\`\`\`

| Feature | List | Set | Map |
|---|---|---|---|
| Duplicates | Yes | No | Keys: No, Values: Yes |
| Order | Insertion | Varies | Varies |
| Access | Index | Iterator | Key |
| Null | Multiple | One (HashSet) | One null key (HashMap) |`,
    tags: ["List", "Set", "Map", "Collections Framework"],
  },
  {
    id: 70,
    difficulty: "Medium",
    category: "Core Java",
    question: "What is the difference between abstract class and interface in Java?",
    answer: `Both are used for abstraction, but they differ in several ways:

**Abstract Class:**
- Can have **abstract and concrete methods**
- Can have **constructor**
- Can have **instance variables** (any access modifier)
- Supports **single inheritance** (\`extends\`)
- Can have \`static\`, \`final\`, \`private\` members
- Use when classes share **common base behavior**

**Interface:**
- All methods are **public abstract** by default (before Java 8)
- **No constructor**
- Variables are **public static final** (constants) by default
- Supports **multiple implementation** (\`implements\`)
- Java 8+: \`default\` and \`static\` methods allowed
- Java 9+: \`private\` methods allowed
- Use to define a **contract/capability**

\`\`\`java
// Abstract class
abstract class Animal {
    String name;
    Animal(String name) { this.name = name; }
    abstract void sound();        // must override
    void breathe() { System.out.println("Breathing"); }  // concrete
}

// Interface
interface Swimmable {
    void swim();  // abstract by default
    default void float_() { System.out.println("Floating"); }  // Java 8
}

class Duck extends Animal implements Swimmable {
    Duck(String name) { super(name); }
    public void sound() { System.out.println("Quack"); }
    public void swim() { System.out.println(name + " swimming"); }
}
\`\`\`

| Feature | Abstract Class | Interface |
|---|---|---|
| Methods | abstract + concrete | abstract (+ default Java 8) |
| Variables | any type | public static final |
| Constructor | Yes | No |
| Inheritance | single | multiple |
| When to use | IS-A with shared code | CAN-DO contract |`,
    tags: ["Abstract Class", "Interface", "OOP", "Abstraction"],
  },
  {
    id: 71,
    difficulty: "Easy",
    category: "Core Java",
    question: "What is method overloading vs method overriding in Java?",
    answer: `**Method Overloading (Compile-time Polymorphism):**
- Same method name, **different parameters** (number/type/order)
- Happens within the **same class**
- Resolved at **compile time**
- Return type can be same or different (but can't overload on return type alone)

\`\`\`java
class MathOps {
    int add(int a, int b) { return a + b; }
    double add(double a, double b) { return a + b; }  // different param types
    int add(int a, int b, int c) { return a + b + c; }  // different count
}
\`\`\`

**Method Overriding (Runtime Polymorphism):**
- Child class provides **own implementation** of parent's method
- Same method name, **same parameters**
- Resolved at **runtime**
- Use \`@Override\` annotation (good practice)
- Cannot override \`private\`, \`static\`, or \`final\` methods

\`\`\`java
class Vehicle {
    void start() { System.out.println("Vehicle starting"); }
}

class Bike extends Vehicle {
    @Override
    void start() { System.out.println("Bike starting with kick"); }
}

Vehicle v = new Bike();
v.start();  // "Bike starting with kick" — runtime decision
\`\`\`

| Feature | Overloading | Overriding |
|---|---|---|
| Where | Same class | Parent-Child |
| Parameters | Different | Same |
| Resolution | Compile time | Runtime |
| Return type | Can differ | Must be same (or covariant) |
| Polymorphism | Compile-time | Runtime |`,
    tags: ["Overloading", "Overriding", "Polymorphism", "OOP"],
  },
  {
    id: 72,
    difficulty: "Medium",
    category: "Core Java",
    question: "What is the 'this' and 'super' keyword in Java?",
    answer: `**\`this\` keyword:**
- Refers to the **current class instance/object**
- Used to distinguish instance variables from local variables
- Can call current class constructor: \`this()\`
- Can be passed as argument

\`\`\`java
class Student {
    String name;
    int age;

    Student(String name, int age) {
        this.name = name;  // this.name = instance var, name = param
        this.age = age;
    }

    void display() {
        System.out.println(this.name);  // refers to current object
    }
}
\`\`\`

**\`super\` keyword:**
- Refers to the **parent class**
- Access parent class variables/methods
- Call parent class constructor: \`super()\` (must be first statement)

\`\`\`java
class Animal {
    String type = "Animal";
    void sound() { System.out.println("Some sound"); }
}

class Dog extends Animal {
    String type = "Dog";

    Dog() {
        super();  // calls Animal's constructor
    }

    void display() {
        System.out.println(type);       // Dog
        System.out.println(super.type); // Animal
    }

    void sound() {
        super.sound();  // calls Animal's sound()
        System.out.println("Woof!");
    }
}
\`\`\`

**Key Difference:**
| | this | super |
|---|---|---|
| Refers to | Current class | Parent class |
| Constructor call | \`this()\` | \`super()\` |
| Position | Anywhere | First statement |`,
    tags: ["this", "super", "Keywords", "Inheritance"],
  },
  {
    id: 73,
    difficulty: "Hard",
    category: "Collections",
    question: "How does HashMap work internally in Java?",
    answer: `Understanding HashMap internals is a very common interview question!

**Internal Structure:**
- HashMap uses an **array of buckets** (called the table)
- Each bucket can hold a **linked list** (or tree for Java 8+) of entries
- Default initial capacity: **16**, load factor: **0.75**

**How \`put(key, value)\` works:**
1. Compute **hashCode()** of key
2. Apply **hash function** to get bucket index: \`index = hash & (capacity-1)\`
3. If bucket is empty → store entry there
4. If bucket has entries → **check for key equality using .equals()**
   - Key found → **update** value
   - Key not found → **add** to chain (linked list)

\`\`\`java
HashMap<String, Integer> map = new HashMap<>();
map.put("Alice", 90);
// 1. "Alice".hashCode() = some hash
// 2. index = hash % 16 = e.g. 5
// 3. Store Entry{key="Alice", value=90} in bucket[5]

map.put("Bob", 85);
// Stored in different bucket (different hash)

map.put("Alice", 95);
// Same hash → same bucket → .equals() finds "Alice" → update to 95
\`\`\`

**Handling Collisions:**
- **Java 7**: Linked list in each bucket (chaining)
- **Java 8**: When bucket has > 8 entries → convert to **Red-Black Tree** (O(log n) instead of O(n))

**Rehashing:**
- When size > capacity × load factor (e.g., 16 × 0.75 = 12)
- HashMap **doubles capacity** and rehashes all entries

**Why override hashCode() and equals() together?**
\`\`\`java
// If two objects are equal (.equals() = true)
// they MUST have the same hashCode()
// Otherwise HashMap won't find them correctly!
\`\`\`

**Time Complexity:**
- get/put: **O(1)** average, **O(n)** worst (all in one bucket), **O(log n)** after Java 8 treeification`,
    tags: ["HashMap", "Internal Working", "hashCode", "equals", "Bucket"],
  },
  {
    id: 74,
    difficulty: "Easy",
    category: "Core Java",
    question: "What is a wrapper class in Java?",
    answer: `**Wrapper classes** are classes that **wrap a primitive data type** into an object so that primitives can be used where objects are required (e.g., in Collections).

**Primitive → Wrapper Class:**
| Primitive | Wrapper Class |
|---|---|
| byte | Byte |
| short | Short |
| int | **Integer** |
| long | Long |
| float | Float |
| double | **Double** |
| boolean | **Boolean** |
| char | **Character** |

**Why are wrapper classes needed?**
- Collections only work with objects (not primitives)
- Utility methods for conversion, parsing
- Null values possible (unlike primitives)

\`\`\`java
// Parsing
int num = Integer.parseInt("42");     // String → int
double d = Double.parseDouble("3.14");

// Converting
String s = Integer.toString(100);    // int → String
String s2 = String.valueOf(100);     // another way

// Using in collections
List<Integer> list = new ArrayList<>();
list.add(5);  // autoboxing: int → Integer
int x = list.get(0);  // unboxing

// Useful constants
System.out.println(Integer.MAX_VALUE);  // 2147483647
System.out.println(Integer.MIN_VALUE);  // -2147483648
System.out.println(Integer.toBinaryString(10));  // 1010
\`\`\`

**Integer Cache:**
Java caches Integer objects in range **-128 to 127** for performance (Integer Pool).`,
    tags: ["Wrapper Class", "Integer", "Autoboxing", "Primitives"],
  },
  {
    id: 75,
    difficulty: "Medium",
    category: "Core Java",
    question: "What is the difference between checked and unchecked exceptions?",
    answer: `**Checked Exceptions:**
- Checked at **compile time** by the compiler
- **Must be handled** — either with try-catch or declared with \`throws\`
- Usually represent **recoverable** conditions
- Are subclasses of \`Exception\` (but NOT \`RuntimeException\`)

\`\`\`java
// Compile error if not handled!
public void readFile() throws IOException {
    FileReader fr = new FileReader("file.txt");  // IOException — checked
}

// Or handle it:
try {
    FileReader fr = new FileReader("file.txt");
} catch (IOException e) {
    System.out.println("File not found: " + e.getMessage());
}
\`\`\`

**Common Checked Exceptions:**
- \`IOException\`
- \`SQLException\`
- \`ClassNotFoundException\`
- \`ParseException\`

**Unchecked Exceptions (RuntimeException):**
- Checked at **runtime** — compiler doesn't force handling
- Represent **programming bugs** (usually avoidable)
- Subclasses of \`RuntimeException\`

\`\`\`java
// These compile fine but may crash at runtime:
int[] arr = new int[3];
arr[10] = 5;  // ArrayIndexOutOfBoundsException

String s = null;
s.length();   // NullPointerException

int x = 10 / 0;  // ArithmeticException
\`\`\`

**Common Unchecked Exceptions:**
- \`NullPointerException\`
- \`ArrayIndexOutOfBoundsException\`
- \`ClassCastException\`
- \`IllegalArgumentException\`
- \`NumberFormatException\`

| Feature | Checked | Unchecked |
|---|---|---|
| Checked at | Compile time | Runtime |
| Must handle | Yes | No |
| Superclass | Exception | RuntimeException |
| Cause | External issues | Programming bugs |`,
    tags: ["Checked Exception", "Unchecked Exception", "RuntimeException", "IOException"],
  },
  {
    id: 76,
    difficulty: "Medium",
    category: "Core Java",
    question: "What is the Comparable and Comparator interface in Java?",
    answer: `Both are used for **sorting objects**, but they differ in how and where they're used.

**Comparable interface:**
- In \`java.lang\` package
- Defines **natural ordering** of the class
- Implement in the class itself: \`compareTo()\` method
- Only **one sort order** possible per class

\`\`\`java
class Student implements Comparable<Student> {
    String name;
    int marks;

    @Override
    public int compareTo(Student other) {
        return this.marks - other.marks;  // sort by marks ascending
        // return other.marks - this.marks;  // descending
    }
}

List<Student> students = new ArrayList<>();
Collections.sort(students);  // uses compareTo()
\`\`\`

**Comparator interface:**
- In \`java.util\` package
- Defines **external/custom ordering** outside the class
- \`compare()\` method
- **Multiple sort orders** possible

\`\`\`java
// Sort by name
Comparator<Student> byName = (s1, s2) -> s1.name.compareTo(s2.name);

// Sort by marks descending
Comparator<Student> byMarksDesc = (s1, s2) -> s2.marks - s1.marks;

Collections.sort(students, byName);
Collections.sort(students, byMarksDesc);

// Java 8 way — method reference
students.sort(Comparator.comparing(s -> s.name));
students.sort(Comparator.comparingInt((Student s) -> s.marks).reversed());
\`\`\`

| Feature | Comparable | Comparator |
|---|---|---|
| Package | java.lang | java.util |
| Method | compareTo() | compare() |
| Class modified | Yes | No |
| Sort orders | One | Multiple |
| Use case | Natural order | Custom/external order |`,
    tags: ["Comparable", "Comparator", "Sorting", "Collections"],
  },
  {
    id: 77,
    difficulty: "Medium",
    category: "Core Java",
    question: "What is a functional interface and how are lambda expressions related to it?",
    answer: `**Functional Interface:**
- An interface with exactly **one abstract method** (SAM — Single Abstract Method)
- Can have multiple default/static methods
- Annotated with \`@FunctionalInterface\` (optional but good practice)
- Foundation for **lambda expressions** in Java 8

\`\`\`java
@FunctionalInterface
interface Greeting {
    void greet(String name);  // only one abstract method
}
\`\`\`

**Lambda Expression:**
- A concise way to implement a functional interface
- Syntax: \`(parameters) -> body\`
- Lambda provides the implementation of the **single abstract method**

\`\`\`java
// Anonymous class (old way)
Greeting g1 = new Greeting() {
    public void greet(String name) {
        System.out.println("Hello, " + name);
    }
};

// Lambda (new way — same thing!)
Greeting g2 = name -> System.out.println("Hello, " + name);

g1.greet("Alice");
g2.greet("Bob");
\`\`\`

**Built-in Functional Interfaces (java.util.function):**

\`\`\`java
// Predicate<T> — takes T, returns boolean
Predicate<Integer> isEven = n -> n % 2 == 0;
System.out.println(isEven.test(4));  // true

// Function<T,R> — takes T, returns R
Function<String, Integer> length = s -> s.length();
System.out.println(length.apply("Hello"));  // 5

// Consumer<T> — takes T, returns void
Consumer<String> printer = s -> System.out.println(s);
printer.accept("Hi!");

// Supplier<T> — takes nothing, returns T
Supplier<String> greeting = () -> "Hello World";
System.out.println(greeting.get());
\`\`\``,
    tags: ["Functional Interface", "Lambda", "Java 8", "SAM", "Predicate"],
  },
  {
    id: 78,
    difficulty: "Medium",
    category: "Core Java",
    question: "What is Stream API in Java 8? Explain with examples.",
    answer: `**Stream API** (java.util.stream) provides a **functional way to process collections** of data — filter, map, reduce, etc. — without explicit loops.

**Stream is NOT a data structure** — it's a pipeline that processes data from a source (Collection, array, etc.)

**Creating Streams:**
\`\`\`java
List<Integer> nums = Arrays.asList(1, 2, 3, 4, 5);
Stream<Integer> stream = nums.stream();

// From array
int[] arr = {1, 2, 3};
IntStream s = Arrays.stream(arr);

// From values
Stream<String> s2 = Stream.of("A", "B", "C");
\`\`\`

**Intermediate Operations** (lazy — return stream):
\`\`\`java
List<String> names = Arrays.asList("Alice", "Bob", "Charlie", "Anna");

// filter — keep matching elements
List<String> aNames = names.stream()
    .filter(n -> n.startsWith("A"))
    .collect(Collectors.toList());  // [Alice, Anna]

// map — transform elements
List<Integer> lengths = names.stream()
    .map(String::length)
    .collect(Collectors.toList());  // [5, 3, 7, 4]

// sorted, distinct, limit, skip
\`\`\`

**Terminal Operations** (trigger processing — return result):
\`\`\`java
// collect
List<String> result = stream.collect(Collectors.toList());

// count
long count = names.stream().filter(n -> n.length() > 3).count();

// reduce
int sum = nums.stream().reduce(0, Integer::sum);  // 15

// forEach
names.stream().forEach(System.out::println);

// findFirst, anyMatch, allMatch, noneMatch
boolean anyA = names.stream().anyMatch(n -> n.startsWith("A"));  // true
\`\`\`

**Method Chaining Example:**
\`\`\`java
List<Integer> evenSquares = IntStream.rangeClosed(1, 10)
    .filter(n -> n % 2 == 0)
    .map(n -> n * n)
    .boxed()
    .collect(Collectors.toList());
// [4, 16, 36, 64, 100]
\`\`\``,
    tags: ["Stream API", "Java 8", "filter", "map", "collect", "Lambda"],
  },
  {
    id: 79,
    difficulty: "Medium",
    category: "Core Java",
    question: "What is Optional in Java 8? Why is it used?",
    answer: `**Optional<T>** is a container object that **may or may not contain a non-null value**. It was introduced in Java 8 to avoid \`NullPointerException\` and write cleaner null-safe code.

**Problem Optional solves:**
\`\`\`java
// Old way — NullPointerException risk!
String name = getUserName();
System.out.println(name.toUpperCase());  // NPE if name is null!
\`\`\`

**Creating Optional:**
\`\`\`java
// Empty Optional
Optional<String> empty = Optional.empty();

// Non-null value
Optional<String> opt1 = Optional.of("Hello");
// Optional.of(null) throws NullPointerException!

// May or may not be null
Optional<String> opt2 = Optional.ofNullable(getName());  // safe
\`\`\`

**Using Optional:**
\`\`\`java
Optional<String> opt = Optional.ofNullable(getUserName());

// isPresent / isEmpty
if (opt.isPresent()) {
    System.out.println(opt.get());
}

// ifPresent — cleaner
opt.ifPresent(name -> System.out.println(name.toUpperCase()));

// orElse — default value if empty
String name = opt.orElse("Guest");

// orElseGet — lazy evaluation
String name2 = opt.orElseGet(() -> "Default_" + System.currentTimeMillis());

// orElseThrow
String name3 = opt.orElseThrow(() -> new RuntimeException("User not found"));

// map — transform value if present
Optional<Integer> len = opt.map(String::length);

// filter
Optional<String> longName = opt.filter(n -> n.length() > 5);
\`\`\`

**Best Practice:**
- Use Optional as **return type** from methods that may return null
- Do NOT use Optional as method parameters or fields
- Do NOT use \`Optional.get()\` without checking \`isPresent()\``,
    tags: ["Optional", "Java 8", "NullPointerException", "Null Safety"],
  },
  {
    id: 80,
    difficulty: "Easy",
    category: "Core Java",
    question: "What is the difference between int and Integer in Java?",
    answer: `**\`int\`** is a **primitive type** while **\`Integer\`** is a **wrapper class** (object).

**\`int\` (primitive):**
- Stored on the **stack**
- Holds the actual numeric value directly
- Cannot be null
- Less memory, faster
- Cannot be used in Collections

\`\`\`java
int x = 5;     // primitive
int y = 0;     // default value
// int z = null;  // ❌ compilation error
\`\`\`

**\`Integer\` (wrapper class):**
- Stored on the **heap** (as an object)
- Can be **null**
- Required for Collections (List, Map, etc.)
- Has useful **utility methods**

\`\`\`java
Integer a = 5;        // autoboxing
Integer b = null;     // ✅ can be null

// Utility methods
Integer.parseInt("42");     // String to int
Integer.toString(42);       // int to String
Integer.MAX_VALUE;          // 2147483647
Integer.MIN_VALUE;          // -2147483648
Integer.toBinaryString(10); // "1010"
Integer.compare(5, 10);     // -1 (5 < 10)
\`\`\`

**Autoboxing/Unboxing (automatic conversion):**
\`\`\`java
Integer obj = 10;   // autoboxing: int → Integer
int val = obj;      // unboxing: Integer → int
\`\`\`

**Memory consideration:**
- \`int\`: 4 bytes on stack, very fast
- \`Integer\`: object on heap + overhead, slower

**Use \`int\` when**: performance matters, no null needed
**Use \`Integer\` when**: Collections, nullable values, utility methods needed`,
    tags: ["int", "Integer", "Wrapper", "Primitive", "Autoboxing"],
  },
  {
    id: 81,
    difficulty: "Medium",
    category: "Core Java",
    question: "What is a design pattern? Explain Singleton pattern in Java.",
    answer: `**Design Patterns** are reusable solutions to commonly occurring problems in software design.

**3 Categories:**
1. **Creational** — object creation (Singleton, Factory, Builder)
2. **Structural** — class structure (Adapter, Decorator, Proxy)
3. **Behavioral** — communication between objects (Observer, Strategy, Iterator)

**Singleton Pattern:**
- Ensures a class has **only one instance**
- Provides a **global access point** to that instance
- Used for: Database connections, Config managers, Logger, Thread pools

**Implementation:**

**1. Eager Initialization:**
\`\`\`java
class Singleton {
    private static final Singleton INSTANCE = new Singleton();  // created at class load
    private Singleton() {}  // private constructor
    public static Singleton getInstance() { return INSTANCE; }
}
\`\`\`

**2. Lazy Initialization (Thread-safe with DCL):**
\`\`\`java
class Singleton {
    private static volatile Singleton instance;  // volatile for visibility

    private Singleton() {}

    public static Singleton getInstance() {
        if (instance == null) {
            synchronized (Singleton.class) {
                if (instance == null) {  // double-check
                    instance = new Singleton();
                }
            }
        }
        return instance;
    }
}
\`\`\`

**3. Enum Singleton (Best practice):**
\`\`\`java
enum Singleton {
    INSTANCE;
    public void doSomething() { ... }
}
Singleton.INSTANCE.doSomething();
\`\`\`

**Usage example:**
\`\`\`java
Singleton s1 = Singleton.getInstance();
Singleton s2 = Singleton.getInstance();
System.out.println(s1 == s2);  // true — same object!
\`\`\``,
    tags: ["Design Pattern", "Singleton", "Creational", "Thread-safe"],
  },
  {
    id: 82,
    difficulty: "Medium",
    category: "Core Java",
    question: "What is the difference between shallow copy and deep copy in Java?",
    answer: `**Shallow Copy:**
- Creates a new object but **copies references** to the same objects inside
- Changes to nested objects affect **both copies**
- Fast and less memory

\`\`\`java
class Address {
    String city;
    Address(String city) { this.city = city; }
}

class Person implements Cloneable {
    String name;
    Address address;

    // Shallow copy (default clone behavior)
    @Override
    protected Object clone() throws CloneNotSupportedException {
        return super.clone();
    }
}

Person p1 = new Person();
p1.name = "Alice";
p1.address = new Address("Delhi");

Person p2 = (Person) p1.clone();  // shallow copy
p2.name = "Bob";          // doesn't affect p1
p2.address.city = "Mumbai"; // AFFECTS p1.address.city too! ❌
\`\`\`

**Deep Copy:**
- Creates a **completely independent copy**
- Nested objects are also copied
- Changes to one don't affect the other

\`\`\`java
class Person implements Cloneable {
    String name;
    Address address;

    // Deep copy
    @Override
    protected Object clone() throws CloneNotSupportedException {
        Person copy = (Person) super.clone();
        copy.address = new Address(this.address.city);  // copy nested object too
        return copy;
    }
}

Person p1 = new Person();
p1.address = new Address("Delhi");

Person p2 = (Person) p1.clone();  // deep copy
p2.address.city = "Mumbai";  // does NOT affect p1.address ✅
\`\`\`

**Other ways for deep copy:**
- **Serialization/Deserialization**
- **Copy constructor**
- Libraries like Apache Commons, ModelMapper

| Feature | Shallow Copy | Deep Copy |
|---|---|---|
| Nested objects | Shared (same ref) | New copies |
| Independence | Partial | Complete |
| Performance | Faster | Slower |`,
    tags: ["Shallow Copy", "Deep Copy", "clone", "Object Copy"],
  },
  {
    id: 83,
    difficulty: "Hard",
    category: "Core Java",
    question: "What is the volatile keyword in Java?",
    answer: `The **\`volatile\`** keyword is used to mark a variable so that **all reads and writes go directly to main memory** (not from CPU cache), ensuring **visibility across threads**.

**The Problem volatile solves:**

In a multi-threaded program, each thread may cache variables in its own CPU cache for performance. This means:
- Thread A updates a variable
- Thread B may still read the old cached value!

\`\`\`java
// Without volatile — Thread B may never see the update!
class SharedFlag {
    boolean flag = false;  // cached in thread's memory

    void setFlag() { flag = true; }  // Thread A
    void checkFlag() {
        while (!flag) { }  // Thread B may loop forever!
        System.out.println("Flag changed!");
    }
}
\`\`\`

**With volatile — guarantees visibility:**
\`\`\`java
class SharedFlag {
    volatile boolean flag = false;  // always read/write to main memory

    void setFlag() { flag = true; }
    void checkFlag() {
        while (!flag) { }  // Thread B will see update ✅
        System.out.println("Flag changed!");
    }
}
\`\`\`

**What volatile does:**
1. Ensures **visibility** — all threads see latest value
2. Prevents **instruction reordering** (memory barrier)
3. Does **NOT** ensure **atomicity** (no synchronization for compound operations)

**volatile vs synchronized:**
| Feature | volatile | synchronized |
|---|---|---|
| Visibility | ✅ Yes | ✅ Yes |
| Atomicity | ❌ No | ✅ Yes |
| Performance | Faster | Slower |
| Use case | Simple flag/state | Compound operations |

**When to use volatile:**
- Simple boolean flags
- Stop flags for threads
- Singleton double-checked locking`,
    tags: ["volatile", "Visibility", "Thread Safety", "Memory Model"],
  },
  {
    id: 84,
    difficulty: "Medium",
    category: "Core Java",
    question: "What is try-with-resources in Java?",
    answer: `**Try-with-resources** (introduced in Java 7) is a try statement that **automatically closes resources** (files, connections, streams) after use, without needing explicit \`finally\` block.

**Problem with old approach:**
\`\`\`java
// Old way — messy, risky if close() itself throws exception
FileReader fr = null;
try {
    fr = new FileReader("file.txt");
    // read file...
} catch (IOException e) {
    e.printStackTrace();
} finally {
    if (fr != null) {
        try {
            fr.close();  // another try-catch needed!
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}
\`\`\`

**Try-with-resources (clean approach):**
\`\`\`java
// Resources declared in try() — automatically closed!
try (FileReader fr = new FileReader("file.txt");
     BufferedReader br = new BufferedReader(fr)) {
    String line;
    while ((line = br.readLine()) != null) {
        System.out.println(line);
    }
} catch (IOException e) {
    e.printStackTrace();
}
// fr and br are automatically closed here, even if exception occurred ✅
\`\`\`

**Requirements:**
- The resource class must implement \`AutoCloseable\` interface (has \`close()\` method)
- \`java.io\` classes implement it: \`FileReader\`, \`FileWriter\`, \`Connection\`, \`PreparedStatement\`, etc.

**Multiple resources:** Closed in **reverse order** of declaration.

**Custom AutoCloseable:**
\`\`\`java
class DBConnection implements AutoCloseable {
    DBConnection() { System.out.println("Connection opened"); }

    @Override
    public void close() { System.out.println("Connection closed"); }
}

try (DBConnection conn = new DBConnection()) {
    // use connection
}
// Output: Connection opened → Connection closed (auto!)
\`\`\``,
    tags: ["try-with-resources", "AutoCloseable", "Java 7", "Resource Management"],
  },
  {
    id: 85,
    difficulty: "Easy",
    category: "Core Java",
    question: "What is the difference between throw and throws in Java?",
    answer: `**\`throw\`:**
- Used to **manually throw** an exception at a specific point in code
- Used inside a method body
- Followed by an exception **object** (instance)
- Throws a single exception at a time

\`\`\`java
public void validateAge(int age) {
    if (age < 18) {
        throw new IllegalArgumentException("Age must be 18+");  // throw object
    }
    System.out.println("Valid age");
}

// Usage:
try {
    validateAge(15);
} catch (IllegalArgumentException e) {
    System.out.println(e.getMessage());  // Age must be 18+
}
\`\`\`

**\`throws\`:**
- Used in **method signature** to declare which exceptions a method may throw
- Informs the caller to handle or propagate the exception
- Can declare multiple exceptions: \`throws IOException, SQLException\`

\`\`\`java
public void readFile(String path) throws IOException {
    FileReader fr = new FileReader(path);  // may throw IOException
    // ...
}

// Caller must handle:
try {
    readFile("data.txt");
} catch (IOException e) {
    System.out.println("Error: " + e.getMessage());
}
\`\`\`

**Combined usage:**
\`\`\`java
public void processFile(String path) throws IOException {
    if (path == null) {
        throw new IllegalArgumentException("Path cannot be null");  // throw
    }
    FileReader fr = new FileReader(path);  // throws IOException
}
\`\`\`

| | throw | throws |
|---|---|---|
| Where | Method body | Method signature |
| Followed by | Exception object | Exception class name(s) |
| Purpose | Actually throw exception | Declare possible exceptions |`,
    tags: ["throw", "throws", "Exception Handling"],
  },
  {
    id: 86,
    difficulty: "Medium",
    category: "Core Java",
    question: "What is String immutability in Java? Why is String immutable?",
    answer: `In Java, **String is immutable** — once a String object is created, its value **cannot be changed**.

**How immutability works:**
\`\`\`java
String s = "Hello";
s = s + " World";  // This does NOT modify "Hello"
                   // Creates a NEW String "Hello World"
                   // s now points to new object
                   // Old "Hello" remains in String Pool
\`\`\`

**Why is String made immutable? (Important!)**

**1. String Pool (Memory efficiency):**
- Multiple references can safely share the same String object
- If strings were mutable, changing one reference would affect all others
\`\`\`java
String s1 = "Hello";
String s2 = "Hello";  // same pool object — safe because immutable!
\`\`\`

**2. Thread Safety:**
- Immutable objects are inherently **thread-safe**
- Multiple threads can use the same String without synchronization

**3. Security:**
- Strings are used for class names, URLs, passwords, file paths
- If mutable, a hacker could change them after validation

**4. Hashcode Caching:**
- String's hash code is cached after first calculation
- Safe because value never changes
- Used efficiently as HashMap keys

**5. Class Loading:**
- JVM uses String for class loading
- Immutability prevents tampering with class names

\`\`\`java
// Proof of immutability
String s1 = "Hello";
String s2 = s1;
s1 = s1.concat(" World");  // new object created

System.out.println(s1);  // Hello World (new object)
System.out.println(s2);  // Hello (original unchanged)
\`\`\`

**Use StringBuilder/StringBuffer** when you need to modify strings frequently.`,
    tags: ["String", "Immutability", "String Pool", "Thread Safety"],
  },
  {
    id: 87,
    difficulty: "Medium",
    category: "Core Java",
    question: "What is a nested class and what are its types?",
    answer: `A **nested class** is a class defined **inside another class**. Java supports 4 types:

**1. Static Nested Class:**
- Declared with \`static\` keyword inside outer class
- Can access outer class **static members** only (not instance members)
- Instantiated without outer class object
\`\`\`java
class Outer {
    static int x = 10;
    int y = 20;

    static class StaticNested {
        void display() {
            System.out.println(x);  // ✅ static member
            // System.out.println(y);  // ❌ cannot access instance var
        }
    }
}
Outer.StaticNested sn = new Outer.StaticNested();
\`\`\`

**2. Inner Class (Non-static Nested):**
- Instance of inner class tied to outer class instance
- Can access **all** outer class members (static + instance)
\`\`\`java
class Outer {
    int y = 20;
    class Inner {
        void display() { System.out.println(y); }  // ✅
    }
}
Outer outer = new Outer();
Outer.Inner inner = outer.new Inner();
\`\`\`

**3. Local Class:**
- Defined inside a method
- Only accessible within that method
\`\`\`java
void method() {
    class Local {
        void greet() { System.out.println("Hi from local"); }
    }
    new Local().greet();
}
\`\`\`

**4. Anonymous Class:**
- No name, defined and instantiated at the same time
- Typically used to implement interfaces or extend classes on the fly
\`\`\`java
Runnable r = new Runnable() {
    public void run() { System.out.println("Anonymous class"); }
};
r.run();
\`\`\`

**Why use nested classes?**
- Logically groups classes that belong together
- Increases encapsulation
- Leads to more readable code`,
    tags: ["Nested Class", "Inner Class", "Anonymous Class", "Static Nested"],
  },
  {
    id: 88,
    difficulty: "Medium",
    category: "Core Java",
    question: "What is the difference between Iterator and ListIterator?",
    answer: `Both are used to iterate over collections, but **ListIterator** is more powerful.

**Iterator:**
- Available for **all collections** (List, Set, Map values, etc.)
- Can only traverse in **forward direction**
- Can **remove** elements during iteration

\`\`\`java
List<String> list = Arrays.asList("A", "B", "C");
Iterator<String> it = list.iterator();

while (it.hasNext()) {
    String val = it.next();
    System.out.println(val);
}
\`\`\`

**Iterator methods:**
- \`hasNext()\` — checks if more elements
- \`next()\` — returns next element
- \`remove()\` — removes current element

**ListIterator:**
- Only for **List** implementations (ArrayList, LinkedList)
- Can traverse **forward and backward**
- Can **add, remove, and set** elements
- Can get current **index**

\`\`\`java
List<String> list = new ArrayList<>(Arrays.asList("A", "B", "C"));
ListIterator<String> lit = list.listIterator();

// Forward
while (lit.hasNext()) {
    System.out.println(lit.nextIndex() + ": " + lit.next());
}

// Backward
while (lit.hasPrevious()) {
    System.out.println(lit.previous());
}

// Modify while iterating
lit = list.listIterator();
while (lit.hasNext()) {
    String s = lit.next();
    lit.set(s.toLowerCase());  // modify
}
\`\`\`

| Feature | Iterator | ListIterator |
|---|---|---|
| Direction | Forward only | Both directions |
| Available for | All collections | Lists only |
| add() | No | Yes |
| set() | No | Yes |
| Index access | No | Yes |`,
    tags: ["Iterator", "ListIterator", "Collections", "Iteration"],
  },
  {
    id: 89,
    difficulty: "Easy",
    category: "Core Java",
    question: "What is the difference between Array and ArrayList in Java?",
    answer: `**Arrays** and **ArrayList** both store multiple elements, but they have key differences:

**Array:**
- **Fixed size** — size must be defined at creation, cannot change
- Can store **primitives** (int, char, etc.) and objects
- Faster access — **O(1)** random access
- Not part of Collections framework (no utility methods)
- Supports **multidimensional** arrays

\`\`\`java
int[] arr = new int[5];  // fixed size
arr[0] = 10;
arr[5] = 50;  // ❌ ArrayIndexOutOfBoundsException!

String[] names = {"Alice", "Bob", "Charlie"};
\`\`\`

**ArrayList:**
- **Dynamic size** — grows automatically as elements are added
- Can only store **objects** (not primitives — use Integer for int, etc.)
- Part of **Java Collections Framework** — rich API
- Slightly slower due to resizing overhead
- More features: \`add()\`, \`remove()\`, \`contains()\`, \`sort()\`, etc.

\`\`\`java
ArrayList<String> list = new ArrayList<>();
list.add("Alice");
list.add("Bob");
list.add("Charlie");
list.remove("Bob");
System.out.println(list.size());      // 2
System.out.println(list.contains("Alice"));  // true
\`\`\`

**ArrayList Internal:** Backed by an array. Default capacity 10. When full, creates new array of **1.5x size** and copies elements.

| Feature | Array | ArrayList |
|---|---|---|
| Size | Fixed | Dynamic |
| Primitives | Yes | No (wrapper needed) |
| Performance | Faster | Slightly slower |
| Methods | Limited | Rich API |
| Null values | Yes | Yes |`,
    tags: ["Array", "ArrayList", "Collections", "Data Structures"],
  },
  {
    id: 90,
    difficulty: "Medium",
    category: "Multithreading",
    question: "What is a deadlock in Java? How can it be prevented?",
    answer: `**Deadlock** is a situation where **two or more threads are waiting for each other** to release locks, and **none can proceed** — they're stuck forever.

**Classic Deadlock scenario:**
\`\`\`java
Object lock1 = new Object();
Object lock2 = new Object();

Thread t1 = new Thread(() -> {
    synchronized (lock1) {  // T1 gets lock1
        System.out.println("T1 has lock1, waiting for lock2");
        synchronized (lock2) {  // T1 waits for lock2 (held by T2)
            System.out.println("T1 has both locks");
        }
    }
});

Thread t2 = new Thread(() -> {
    synchronized (lock2) {  // T2 gets lock2
        System.out.println("T2 has lock2, waiting for lock1");
        synchronized (lock1) {  // T2 waits for lock1 (held by T1)
            System.out.println("T2 has both locks");
        }
    }
});

t1.start();
t2.start();
// DEADLOCK! T1 waits for T2, T2 waits for T1 — forever stuck!
\`\`\`

**4 Conditions for Deadlock (Coffman conditions):**
1. **Mutual Exclusion** — resource held by only one thread
2. **Hold and Wait** — holding one lock, waiting for another
3. **No Preemption** — locks not taken forcibly
4. **Circular Wait** — circular chain of waiting

**Prevention strategies:**

**1. Lock ordering — always acquire locks in same order:**
\`\`\`java
// Both threads acquire lock1 first, then lock2
synchronized (lock1) {
    synchronized (lock2) { ... }
}
\`\`\`

**2. Use \`tryLock()\` with timeout:**
\`\`\`java
ReentrantLock l1 = new ReentrantLock();
if (l1.tryLock(1, TimeUnit.SECONDS)) {
    try { ... } finally { l1.unlock(); }
} else {
    // couldn't get lock — back off
}
\`\`\`

**3. Avoid nested locks** when possible
**4. Use higher-level concurrency tools** (Semaphore, ConcurrentHashMap)`,
    tags: ["Deadlock", "Synchronization", "Multithreading", "Lock"],
  },
  {
    id: 91,
    difficulty: "Medium",
    category: "Core Java",
    question: "What is the difference between Enumeration and Iterator?",
    answer: `Both are used to iterate over collections, but **Iterator** is the modern replacement for **Enumeration**.

**Enumeration (legacy — Java 1.0):**
- Available in legacy classes: \`Vector\`, \`Hashtable\`, \`Stack\`
- Only **read** — cannot remove elements during iteration
- Method names are longer and less readable

\`\`\`java
Vector<String> v = new Vector<>(Arrays.asList("A", "B", "C"));
Enumeration<String> e = v.elements();

while (e.hasMoreElements()) {
    System.out.println(e.nextElement());
}
\`\`\`

**Iterator (modern — Java 1.2):**
- Available for **all Collection classes** (ArrayList, HashSet, etc.)
- Can **remove** elements during iteration using \`remove()\`
- Cleaner method names
- Supports enhanced for-each via \`Iterable\`

\`\`\`java
List<String> list = new ArrayList<>(Arrays.asList("A", "B", "C"));
Iterator<String> it = list.iterator();

while (it.hasNext()) {
    String val = it.next();
    if (val.equals("B")) {
        it.remove();  // safe remove during iteration
    }
}
System.out.println(list);  // [A, C]
\`\`\`

| Feature | Enumeration | Iterator |
|---|---|---|
| Introduced | Java 1.0 | Java 1.2 |
| remove() | ❌ No | ✅ Yes |
| Available for | Legacy classes | All collections |
| Method names | hasMoreElements/nextElement | hasNext/next |
| Status | Legacy | Preferred |

**Bottom line:** Always use **Iterator** (or enhanced for-each) in new code. Enumeration is only used with legacy classes.`,
    tags: ["Enumeration", "Iterator", "Collections", "Legacy"],
  },
  {
    id: 92,
    difficulty: "Hard",
    category: "Core Java",
    question: "What is generics in Java? Why are they used?",
    answer: `**Generics** allow you to write **type-safe, reusable code** by parameterizing types. They let you specify the type at the time of use.

**Problem without generics:**
\`\`\`java
List list = new ArrayList();  // raw type
list.add("Hello");
list.add(42);  // No error — but bad!

String s = (String) list.get(1);  // ClassCastException at runtime!
\`\`\`

**With generics — type-safe:**
\`\`\`java
List<String> list = new ArrayList<>();
list.add("Hello");
// list.add(42);  // ❌ Compile error — caught early!

String s = list.get(0);  // no cast needed ✅
\`\`\`

**Generic Class:**
\`\`\`java
class Pair<T, U> {
    T first;
    U second;

    Pair(T first, U second) {
        this.first = first;
        this.second = second;
    }
}

Pair<String, Integer> p = new Pair<>("Alice", 90);
System.out.println(p.first + ": " + p.second);
\`\`\`

**Generic Method:**
\`\`\`java
public <T> void printArray(T[] arr) {
    for (T item : arr) {
        System.out.print(item + " ");
    }
}
printArray(new Integer[]{1, 2, 3});
printArray(new String[]{"A", "B"});
\`\`\`

**Bounded Type Parameters:**
\`\`\`java
// T must be a Number or subclass
public <T extends Number> double sum(List<T> list) {
    return list.stream().mapToDouble(Number::doubleValue).sum();
}

// Wildcards
void printList(List<?> list) { ... }           // any type
void addNumbers(List<? extends Number> list)   // Number or subtype
\`\`\`

**Benefits of Generics:**
- ✅ Type safety at compile time
- ✅ No casting needed
- ✅ Code reusability
- ✅ Better readability`,
    tags: ["Generics", "Type Safety", "Wildcards", "Bounded Types"],
  },
  {
    id: 93,
    difficulty: "Easy",
    category: "Core Java",
    question: "What is an enum in Java? When should it be used?",
    answer: `**Enum** (Enumeration) is a special Java type used to define a collection of **named constants**. It was introduced in Java 5.

**Basic Enum:**
\`\`\`java
enum Day {
    MONDAY, TUESDAY, WEDNESDAY, THURSDAY, FRIDAY, SATURDAY, SUNDAY
}

Day today = Day.MONDAY;
System.out.println(today);  // MONDAY
\`\`\`

**Enum in switch:**
\`\`\`java
switch (today) {
    case MONDAY: System.out.println("Start of work week"); break;
    case FRIDAY: System.out.println("TGIF!"); break;
    case SATURDAY: case SUNDAY: System.out.println("Weekend!"); break;
}
\`\`\`

**Enum with fields and methods:**
\`\`\`java
enum Planet {
    MERCURY(3.303e+23, 2.4397e6),
    VENUS(4.869e+24, 6.0518e6),
    EARTH(5.976e+24, 6.37814e6);

    private final double mass;
    private final double radius;

    Planet(double mass, double radius) {
        this.mass = mass;
        this.radius = radius;
    }

    double surfaceGravity() { return 6.67300E-11 * mass / (radius * radius); }
}
System.out.println(Planet.EARTH.surfaceGravity());
\`\`\`

**Useful enum methods:**
\`\`\`java
Day.values()              // returns all enum values
Day.valueOf("MONDAY")     // string to enum
Day.MONDAY.name()         // "MONDAY" (string)
Day.MONDAY.ordinal()      // 0 (position, 0-indexed)
\`\`\`

**When to use Enum:**
- Fixed set of constants (days, months, seasons, status codes)
- State machines (ORDER_STATUS: PLACED, PROCESSING, SHIPPED, DELIVERED)
- Direction (NORTH, SOUTH, EAST, WEST)
- Replaces old \`public static final int\` pattern`,
    tags: ["Enum", "Constants", "switch", "Java 5"],
  },
  {
    id: 94,
    difficulty: "Medium",
    category: "Core Java",
    question: "What is method reference in Java 8?",
    answer: `**Method references** are a shorthand for lambda expressions that **call an existing method**. They use the \`::\` operator.

**4 Types of Method References:**

**1. Static Method Reference:** \`ClassName::staticMethod\`
\`\`\`java
// Lambda
Function<String, Integer> f1 = s -> Integer.parseInt(s);

// Method reference (cleaner!)
Function<String, Integer> f2 = Integer::parseInt;

System.out.println(f2.apply("42"));  // 42
\`\`\`

**2. Instance Method Reference (on specific instance):** \`instance::method\`
\`\`\`java
String prefix = "Hello, ";
Function<String, String> f = prefix::concat;
System.out.println(f.apply("Alice"));  // Hello, Alice
\`\`\`

**3. Instance Method Reference (on arbitrary instance):** \`ClassName::instanceMethod\`
\`\`\`java
// Lambda
List<String> names = Arrays.asList("Charlie", "Alice", "Bob");
names.sort((s1, s2) -> s1.compareTo(s2));

// Method reference
names.sort(String::compareTo);
\`\`\`

**4. Constructor Reference:** \`ClassName::new\`
\`\`\`java
Supplier<ArrayList> supplier = ArrayList::new;
ArrayList<String> list = supplier.get();

// Creating objects from stream
List<String> names = Arrays.asList("Alice", "Bob");
List<Student> students = names.stream()
    .map(Student::new)  // calls Student(String) constructor
    .collect(Collectors.toList());
\`\`\`

**forEach with method reference:**
\`\`\`java
List<String> list = Arrays.asList("A", "B", "C");

// Lambda
list.forEach(s -> System.out.println(s));

// Method reference (cleaner)
list.forEach(System.out::println);
\`\`\`

**When to use:** When a lambda simply calls an existing method — method reference is more readable and concise.`,
    tags: ["Method Reference", "Java 8", "Lambda", "::", "Functional"],
  },
  {
    id: 95,
    difficulty: "Hard",
    category: "Core Java",
    question: "What is the difference between Comparable and Comparator? When to use which?",
    answer: `Already answered above in Q76, but here we dive into a more interview-focused perspective with advanced examples.

**Decision Framework:**

**Use Comparable when:**
- You own the class
- There's a **natural/default ordering** (e.g., students by ID by default)
- You want one standard sort order

**Use Comparator when:**
- You **don't own the class** (library class like String, Integer)
- You need **multiple different orderings**
- You want to sort without modifying the original class

**Advanced Comparator (Java 8+):**
\`\`\`java
List<Employee> employees = getEmployees();

// Sort by salary ascending, then by name if same salary
Comparator<Employee> comp = Comparator
    .comparingDouble(Employee::getSalary)
    .thenComparing(Employee::getName);

employees.sort(comp);

// Reverse a comparator
Comparator<Employee> desc = comp.reversed();

// Null-safe comparison
Comparator<Employee> nullSafe = Comparator.nullsFirst(
    Comparator.comparing(Employee::getName)
);
\`\`\`

**Chaining comparators:**
\`\`\`java
employees.sort(
    Comparator.comparing(Employee::getDepartment)
              .thenComparingInt(Employee::getAge)
              .thenComparing(Employee::getName)
              .reversed()
);
\`\`\`

**TreeMap / TreeSet with Comparator:**
\`\`\`java
// TreeMap sorted by key length
TreeMap<String, Integer> map = new TreeMap<>(
    Comparator.comparingInt(String::length).thenComparing(Comparator.naturalOrder())
);
map.put("Charlie", 1);
map.put("Bob", 2);
map.put("Alice", 3);
// Sorted by name length
\`\`\`

**Summary:**
- **Comparable** = built into the class, single sort order
- **Comparator** = external, flexible, multiple sort orders, Java 8 has builder-style API`,
    tags: ["Comparable", "Comparator", "Java 8", "Sorting", "Advanced"],
  },
  {
    id: 96,
    difficulty: "Medium",
    category: "Core Java",
    question: "What is a record class in Java 14+?",
    answer: `**Records** (introduced as preview in Java 14, stable in Java 16) are a concise way to create **immutable data carrier classes** — classes that just hold data.

**Problem records solve:**
\`\`\`java
// Traditional POJO — boilerplate heavy!
class Point {
    private final int x;
    private final int y;

    Point(int x, int y) { this.x = x; this.y = y; }
    int x() { return x; }
    int y() { return y; }

    @Override
    public boolean equals(Object o) { ... }
    @Override
    public int hashCode() { ... }
    @Override
    public String toString() { return "Point[x=" + x + ", y=" + y + "]"; }
}
\`\`\`

**With Records — same thing in one line:**
\`\`\`java
record Point(int x, int y) {}

// That's it! Java auto-generates:
// - Constructor
// - Accessor methods: x(), y()
// - equals(), hashCode(), toString()
\`\`\`

**Using records:**
\`\`\`java
Point p = new Point(3, 4);
System.out.println(p.x());    // 3
System.out.println(p.y());    // 4
System.out.println(p);        // Point[x=3, y=4]

Point p2 = new Point(3, 4);
System.out.println(p.equals(p2));  // true (value comparison)
\`\`\`

**Custom compact constructor (with validation):**
\`\`\`java
record Person(String name, int age) {
    Person {  // compact constructor
        if (age < 0) throw new IllegalArgumentException("Age cannot be negative");
        name = name.trim();  // normalize
    }
}
\`\`\`

**Records are:**
- **Immutable** — fields are final
- **Transparent** — fields match constructor params
- Great for DTOs, value objects, API responses

**Limitations:** Cannot extend other classes (implicitly extends Record), cannot be abstract, fields are final.`,
    tags: ["Record", "Java 14", "Immutable", "DTO", "Data Class"],
  },
  {
    id: 97,
    difficulty: "Hard",
    category: "Core Java",
    question: "What is the difference between process and thread?",
    answer: `Understanding the difference between a process and a thread is fundamental for concurrent programming.

**Process:**
- An **independent program** running in its own memory space
- Has its own: code, data, heap, stack, OS resources
- Communication between processes is expensive (**IPC** — pipes, sockets)
- Crash of one process doesn't affect others
- **Heavier** — more resources, slower to create
- Examples: your browser, IDE, and Java app are separate processes

**Thread:**
- A **lightweight unit of execution** within a process
- **Shares** memory (heap) with other threads of the same process
- Communication between threads is easy (shared variables)
- Crash of one thread can bring down the whole process
- **Lighter** — less resources, faster to create
- Java program starts with at least one thread: **main thread**

\`\`\`
Process A (JVM)
├── Main Thread
├── Worker Thread 1    ──┐
├── Worker Thread 2    ──┤  All share the same heap
└── GC Thread          ──┘  (but each has own stack)
\`\`\`

**Java perspective:**
\`\`\`java
// Main thread
public static void main(String[] args) {
    System.out.println(Thread.currentThread().getName());  // main

    Thread t = new Thread(() -> {
        System.out.println(Thread.currentThread().getName());  // Thread-0
    });
    t.start();
}
\`\`\`

| Feature | Process | Thread |
|---|---|---|
| Memory | Independent | Shared (heap) |
| Communication | Complex (IPC) | Easy (shared vars) |
| Creation | Slow | Fast |
| Failure impact | Isolated | Affects all threads |
| Context switch | Expensive | Cheap |
| Example | Chrome browser | Chrome tab |`,
    tags: ["Process", "Thread", "Concurrency", "JVM", "Multithreading"],
  },
  {
    id: 98,
    difficulty: "Medium",
    category: "Core Java",
    question: "What is the Collections utility class in Java?",
    answer: `**\`Collections\`** (in \`java.util\`) is a utility class with **static methods** for operations on collection objects.

**Important methods:**

**Sorting:**
\`\`\`java
List<Integer> nums = new ArrayList<>(Arrays.asList(3, 1, 4, 1, 5, 9));
Collections.sort(nums);             // [1, 1, 3, 4, 5, 9]
Collections.sort(nums, Comparator.reverseOrder());  // [9, 5, 4, 3, 1, 1]
\`\`\`

**Searching:**
\`\`\`java
Collections.binarySearch(sorted, 4);  // returns index (list must be sorted)
\`\`\`

**Min/Max:**
\`\`\`java
System.out.println(Collections.min(nums));  // 1
System.out.println(Collections.max(nums));  // 9
\`\`\`

**Shuffling and filling:**
\`\`\`java
Collections.shuffle(nums);              // random order
Collections.reverse(nums);             // reverse order
Collections.fill(nums, 0);             // fill all with 0
Collections.swap(nums, 0, 2);          // swap elements at index 0 and 2
\`\`\`

**Counting frequency:**
\`\`\`java
List<String> words = Arrays.asList("a", "b", "a", "c", "a");
System.out.println(Collections.frequency(words, "a"));  // 3
\`\`\`

**Unmodifiable collections (read-only):**
\`\`\`java
List<String> immutable = Collections.unmodifiableList(nums);
// immutable.add("x");  // ❌ UnsupportedOperationException

// Java 9+ alternative:
List<String> fixed = List.of("A", "B", "C");  // truly immutable
\`\`\`

**Synchronized collections (thread-safe):**
\`\`\`java
List<String> syncList = Collections.synchronizedList(new ArrayList<>());
Map<String, Integer> syncMap = Collections.synchronizedMap(new HashMap<>());
\`\`\`

**Singleton collections:**
\`\`\`java
Set<String> single = Collections.singleton("Only");
List<Integer> oneItem = Collections.singletonList(42);
\`\`\``,
    tags: ["Collections", "Utility Class", "sort", "shuffle", "unmodifiable"],
  },
  {
    id: 99,
    difficulty: "Medium",
    category: "Core Java",
    question: "What is the difference between HashSet, LinkedHashSet, and TreeSet?",
    answer: `All three implement the **\`Set\`** interface (no duplicates), but differ in **ordering** and **performance**.

**HashSet:**
- **No guaranteed order** (random order)
- Backed by **HashMap** internally
- Best performance — O(1) for add/remove/contains
- Allows **one null** value

\`\`\`java
Set<String> hs = new HashSet<>(Arrays.asList("Banana", "Apple", "Cherry", "Apple"));
System.out.println(hs);  // [Cherry, Apple, Banana] — unordered, no duplicates
\`\`\`

**LinkedHashSet:**
- Maintains **insertion order**
- Backed by **LinkedHashMap** internally
- Slightly slower than HashSet (maintains a linked list)
- Allows **one null**

\`\`\`java
Set<String> lhs = new LinkedHashSet<>(Arrays.asList("Banana", "Apple", "Cherry"));
System.out.println(lhs);  // [Banana, Apple, Cherry] — insertion order preserved
\`\`\`

**TreeSet:**
- Maintains **natural sorted order** (or custom Comparator)
- Backed by **TreeMap** (Red-Black Tree) internally
- O(log n) for add/remove/contains
- **Does NOT allow null** (NullPointerException)
- Implements **NavigableSet** — provides floor(), ceiling(), headSet(), tailSet()

\`\`\`java
Set<String> ts = new TreeSet<>(Arrays.asList("Banana", "Apple", "Cherry"));
System.out.println(ts);  // [Apple, Banana, Cherry] — sorted alphabetically

TreeSet<Integer> nums = new TreeSet<>(Arrays.asList(5, 2, 8, 1, 9));
System.out.println(nums.floor(6));    // 5 (largest ≤ 6)
System.out.println(nums.ceiling(6));  // 8 (smallest ≥ 6)
System.out.println(nums.headSet(5));  // [1, 2] (< 5)
\`\`\`

| Feature | HashSet | LinkedHashSet | TreeSet |
|---|---|---|---|
| Order | None | Insertion | Sorted |
| Performance | O(1) | O(1) | O(log n) |
| Null allowed | Yes | Yes | No |
| Backed by | HashMap | LinkedHashMap | TreeMap |`,
    tags: ["HashSet", "LinkedHashSet", "TreeSet", "Set", "Collections"],
  },
  {
    id: 100,
    difficulty: "Hard",
    category: "Core Java",
    question: "What is the ExecutorService in Java? Why use it over creating threads directly?",
    answer: `**ExecutorService** (in \`java.util.concurrent\`) provides a framework to **manage and reuse threads** via a thread pool, avoiding the overhead of creating new threads for each task.

**Problems with creating threads directly:**
\`\`\`java
// Creating a new thread for each task — BAD!
for (int i = 0; i < 1000; i++) {
    new Thread(() -> processRequest()).start();  // 1000 threads!
}
// Problem: thread creation is expensive, too many threads = OutOfMemory
\`\`\`

**ExecutorService with Thread Pool:**
\`\`\`java
// Fixed pool of 10 threads — reuses them for all tasks
ExecutorService executor = Executors.newFixedThreadPool(10);

for (int i = 0; i < 1000; i++) {
    executor.submit(() -> processRequest());  // tasks queued, reused
}

executor.shutdown();       // no new tasks accepted
executor.awaitTermination(60, TimeUnit.SECONDS);  // wait for completion
\`\`\`

**Types of thread pools:**
\`\`\`java
// Fixed pool — fixed number of threads
ExecutorService fixed = Executors.newFixedThreadPool(4);

// Cached pool — creates threads as needed, reuses idle ones
ExecutorService cached = Executors.newCachedThreadPool();

// Single thread — one thread, tasks in queue
ExecutorService single = Executors.newSingleThreadExecutor();

// Scheduled pool — for delayed or periodic tasks
ScheduledExecutorService scheduled = Executors.newScheduledThreadPool(2);
scheduled.scheduleAtFixedRate(() -> System.out.println("tick"), 0, 1, TimeUnit.SECONDS);
\`\`\`

**Future — getting results from tasks:**
\`\`\`java
Future<Integer> future = executor.submit(() -> {
    Thread.sleep(2000);
    return 42;
});

// Do other work...
int result = future.get();  // blocks until result is ready
System.out.println(result); // 42
\`\`\`

**Benefits of ExecutorService:**
- ♻️ Thread reuse — no overhead of creating/destroying
- 🎯 Thread pool size control
- ✅ Task queuing
- 🔄 Future/Callable for results
- ⏰ Scheduled execution`,
    tags: ["ExecutorService", "Thread Pool", "Concurrency", "Future", "Java 5"],
  },
];

export const DSA_QUESTIONS = [
  {
    id: 1,
    difficulty: "Easy",
    category: "Array",
    question: "Reverse an Array in-place",
    answer: `Array ko reverse karo bina extra space use kiye (in-place).

**Approach:** Two pointers — left aur right, swap karte raho jab tak left < right.

**Java Solution:**
\`\`\`java
public class ReverseArray {
    public static void reverse(int[] arr) {
        int left = 0, right = arr.length - 1;
        while (left < right) {
            int temp = arr[left];
            arr[left] = arr[right];
            arr[right] = temp;
            left++;
            right--;
        }
    }

    public static void main(String[] args) {
        int[] arr = {1, 2, 3, 4, 5};
        reverse(arr);
        System.out.println(Arrays.toString(arr)); // [5, 4, 3, 2, 1]
    }
}
\`\`\`

**Python Solution:**
\`\`\`python
def reverse_array(arr):
    left, right = 0, len(arr) - 1
    while left < right:
        arr[left], arr[right] = arr[right], arr[left]
        left += 1
        right -= 1
    return arr

arr = [1, 2, 3, 4, 5]
print(reverse_array(arr))  # [5, 4, 3, 2, 1]
# One-liner alternative:
arr[::-1]
\`\`\`

**Time Complexity:** O(n) | **Space Complexity:** O(1)`,
    tags: ["Array", "Two Pointer", "Easy"],
  },
  {
    id: 2,
    difficulty: "Easy",
    category: "Array",
    question: "Find the Maximum and Minimum element in an Array",
    answer: `Array mein sabse bada aur sabse chhota element dhundho.

**Approach:** Single pass — ek baar traverse karke max aur min track karo.

**Java Solution:**
\`\`\`java
public class MaxMin {
    public static void findMaxMin(int[] arr) {
        int max = arr[0], min = arr[0];
        for (int i = 1; i < arr.length; i++) {
            if (arr[i] > max) max = arr[i];
            if (arr[i] < min) min = arr[i];
        }
        System.out.println("Max: " + max + ", Min: " + min);
    }

    public static void main(String[] args) {
        int[] arr = {3, 1, 7, 2, 9, 4};
        findMaxMin(arr); // Max: 9, Min: 1
    }
}
\`\`\`

**Python Solution:**
\`\`\`python
def find_max_min(arr):
    max_val = min_val = arr[0]
    for num in arr[1:]:
        if num > max_val:
            max_val = num
        if num < min_val:
            min_val = num
    return max_val, min_val

arr = [3, 1, 7, 2, 9, 4]
print(find_max_min(arr))  # (9, 1)
# Built-in: max(arr), min(arr)
\`\`\`

**Time Complexity:** O(n) | **Space Complexity:** O(1)`,
    tags: ["Array", "Linear Search", "Easy"],
  },
  {
    id: 3,
    difficulty: "Easy",
    category: "Array",
    question: "Check if Array is Sorted",
    answer: `Array sorted hai ya nahi check karo (ascending order mein).

**Java Solution:**
\`\`\`java
public class IsSorted {
    public static boolean isSorted(int[] arr) {
        for (int i = 1; i < arr.length; i++) {
            if (arr[i] < arr[i - 1]) return false;
        }
        return true;
    }

    public static void main(String[] args) {
        System.out.println(isSorted(new int[]{1, 2, 3, 4})); // true
        System.out.println(isSorted(new int[]{1, 3, 2, 4})); // false
    }
}
\`\`\`

**Python Solution:**
\`\`\`python
def is_sorted(arr):
    for i in range(1, len(arr)):
        if arr[i] < arr[i - 1]:
            return False
    return True

# One-liner:
def is_sorted(arr):
    return all(arr[i] <= arr[i+1] for i in range(len(arr)-1))

print(is_sorted([1, 2, 3, 4]))  # True
print(is_sorted([1, 3, 2, 4]))  # False
\`\`\`

**Time Complexity:** O(n) | **Space Complexity:** O(1)`,
    tags: ["Array", "Easy"],
  },
  {
    id: 4,
    difficulty: "Easy",
    category: "Array",
    question: "Find Duplicate Elements in an Array",
    answer: `Array mein duplicate elements dhundho.

**Approach:** HashSet use karo — agar element already set mein hai toh duplicate hai.

**Java Solution:**
\`\`\`java
import java.util.*;

public class FindDuplicates {
    public static List<Integer> findDuplicates(int[] arr) {
        Set<Integer> seen = new HashSet<>();
        List<Integer> duplicates = new ArrayList<>();
        for (int num : arr) {
            if (!seen.add(num)) {  // add() returns false if already present
                duplicates.add(num);
            }
        }
        return duplicates;
    }

    public static void main(String[] args) {
        int[] arr = {1, 2, 3, 2, 4, 3, 5};
        System.out.println(findDuplicates(arr)); // [2, 3]
    }
}
\`\`\`

**Python Solution:**
\`\`\`python
def find_duplicates(arr):
    seen = set()
    duplicates = []
    for num in arr:
        if num in seen:
            duplicates.append(num)
        else:
            seen.add(num)
    return duplicates

arr = [1, 2, 3, 2, 4, 3, 5]
print(find_duplicates(arr))  # [2, 3]
\`\`\`

**Time Complexity:** O(n) | **Space Complexity:** O(n)`,
    tags: ["Array", "HashSet", "Easy"],
  },
  {
    id: 5,
    difficulty: "Easy",
    category: "Array",
    question: "Two Sum – Find pair with given sum",
    answer: `Array mein do numbers dhundho jinka sum target ke barabar ho.

**Approach:** HashMap — har element ke liye check karo ki (target - element) already map mein hai.

**Java Solution:**
\`\`\`java
import java.util.*;

public class TwoSum {
    public static int[] twoSum(int[] nums, int target) {
        Map<Integer, Integer> map = new HashMap<>();
        for (int i = 0; i < nums.length; i++) {
            int complement = target - nums[i];
            if (map.containsKey(complement)) {
                return new int[]{map.get(complement), i};
            }
            map.put(nums[i], i);
        }
        return new int[]{};
    }

    public static void main(String[] args) {
        int[] result = twoSum(new int[]{2, 7, 11, 15}, 9);
        System.out.println(Arrays.toString(result)); // [0, 1]
    }
}
\`\`\`

**Python Solution:**
\`\`\`python
def two_sum(nums, target):
    seen = {}
    for i, num in enumerate(nums):
        complement = target - num
        if complement in seen:
            return [seen[complement], i]
        seen[num] = i
    return []

print(two_sum([2, 7, 11, 15], 9))  # [0, 1]
\`\`\`

**Time Complexity:** O(n) | **Space Complexity:** O(n)`,
    tags: ["Array", "HashMap", "LeetCode", "Easy"],
  },
  {
    id: 6,
    difficulty: "Easy",
    category: "String",
    question: "Check if a String is Palindrome",
    answer: `String palindrome hai ya nahi check karo (e.g., "madam", "racecar").

**Java Solution:**
\`\`\`java
public class Palindrome {
    public static boolean isPalindrome(String s) {
        int left = 0, right = s.length() - 1;
        while (left < right) {
            if (s.charAt(left) != s.charAt(right)) return false;
            left++;
            right--;
        }
        return true;
    }

    public static void main(String[] args) {
        System.out.println(isPalindrome("madam"));   // true
        System.out.println(isPalindrome("hello"));   // false
    }
}
\`\`\`

**Python Solution:**
\`\`\`python
def is_palindrome(s):
    left, right = 0, len(s) - 1
    while left < right:
        if s[left] != s[right]:
            return False
        left += 1
        right -= 1
    return True

# One-liner:
def is_palindrome(s):
    return s == s[::-1]

print(is_palindrome("madam"))  # True
print(is_palindrome("hello"))  # False
\`\`\`

**Time Complexity:** O(n) | **Space Complexity:** O(1)`,
    tags: ["String", "Two Pointer", "Easy"],
  },
  {
    id: 7,
    difficulty: "Easy",
    category: "String",
    question: "Reverse a String",
    answer: `String ko reverse karo.

**Java Solution:**
\`\`\`java
public class ReverseString {
    // Method 1: StringBuilder
    public static String reverse(String s) {
        return new StringBuilder(s).reverse().toString();
    }

    // Method 2: Two pointer (char array)
    public static String reverseManual(String s) {
        char[] chars = s.toCharArray();
        int left = 0, right = chars.length - 1;
        while (left < right) {
            char temp = chars[left];
            chars[left++] = chars[right];
            chars[right--] = temp;
        }
        return new String(chars);
    }

    public static void main(String[] args) {
        System.out.println(reverse("hello"));       // olleh
        System.out.println(reverseManual("world")); // dlrow
    }
}
\`\`\`

**Python Solution:**
\`\`\`python
def reverse_string(s):
    return s[::-1]

# Or using reversed():
def reverse_string(s):
    return ''.join(reversed(s))

print(reverse_string("hello"))  # olleh
\`\`\`

**Time Complexity:** O(n) | **Space Complexity:** O(n)`,
    tags: ["String", "Easy"],
  },
  {
    id: 8,
    difficulty: "Easy",
    category: "String",
    question: "Count Vowels and Consonants in a String",
    answer: `String mein vowels aur consonants count karo.

**Java Solution:**
\`\`\`java
public class VowelConsonant {
    public static void count(String s) {
        s = s.toLowerCase();
        int vowels = 0, consonants = 0;
        String vowelSet = "aeiou";
        for (char c : s.toCharArray()) {
            if (Character.isLetter(c)) {
                if (vowelSet.indexOf(c) != -1) vowels++;
                else consonants++;
            }
        }
        System.out.println("Vowels: " + vowels + ", Consonants: " + consonants);
    }

    public static void main(String[] args) {
        count("Hello World"); // Vowels: 3, Consonants: 7
    }
}
\`\`\`

**Python Solution:**
\`\`\`python
def count_vowels_consonants(s):
    vowels = "aeiouAEIOU"
    v_count = sum(1 for c in s if c in vowels)
    c_count = sum(1 for c in s if c.isalpha() and c not in vowels)
    return v_count, c_count

v, c = count_vowels_consonants("Hello World")
print(f"Vowels: {v}, Consonants: {c}")  # Vowels: 3, Consonants: 7
\`\`\`

**Time Complexity:** O(n) | **Space Complexity:** O(1)`,
    tags: ["String", "Easy"],
  },
  {
    id: 9,
    difficulty: "Easy",
    category: "String",
    question: "Check if Two Strings are Anagrams",
    answer: `Do strings anagram hain ya nahi check karo. Anagram = same characters, different order (e.g., "listen" and "silent").

**Java Solution:**
\`\`\`java
import java.util.Arrays;

public class Anagram {
    public static boolean isAnagram(String s1, String s2) {
        if (s1.length() != s2.length()) return false;
        char[] a = s1.toLowerCase().toCharArray();
        char[] b = s2.toLowerCase().toCharArray();
        Arrays.sort(a);
        Arrays.sort(b);
        return Arrays.equals(a, b);
    }

    public static void main(String[] args) {
        System.out.println(isAnagram("listen", "silent")); // true
        System.out.println(isAnagram("hello", "world"));   // false
    }
}
\`\`\`

**Python Solution:**
\`\`\`python
from collections import Counter

def is_anagram(s1, s2):
    return Counter(s1.lower()) == Counter(s2.lower())

# Alternative (sorting):
def is_anagram(s1, s2):
    return sorted(s1.lower()) == sorted(s2.lower())

print(is_anagram("listen", "silent"))  # True
print(is_anagram("hello", "world"))    # False
\`\`\`

**Time Complexity:** O(n log n) sort / O(n) counter | **Space Complexity:** O(n)`,
    tags: ["String", "HashMap", "Easy"],
  },
  {
    id: 10,
    difficulty: "Easy",
    category: "Linked List",
    question: "Reverse a Linked List",
    answer: `Linked List ko reverse karo.

**Approach:** Iterative — prev, curr, next pointers use karo.

**Java Solution:**
\`\`\`java
class Node {
    int data;
    Node next;
    Node(int data) { this.data = data; }
}

public class ReverseLL {
    public static Node reverse(Node head) {
        Node prev = null, curr = head;
        while (curr != null) {
            Node next = curr.next;
            curr.next = prev;
            prev = curr;
            curr = next;
        }
        return prev; // new head
    }
}
\`\`\`

**Python Solution:**
\`\`\`python
class Node:
    def __init__(self, data):
        self.data = data
        self.next = None

def reverse_linked_list(head):
    prev = None
    curr = head
    while curr:
        next_node = curr.next
        curr.next = prev
        prev = curr
        curr = next_node
    return prev  # new head
\`\`\`

**Time Complexity:** O(n) | **Space Complexity:** O(1)`,
    tags: ["Linked List", "Easy", "Most Asked"],
  },
  {
    id: 11,
    difficulty: "Easy",
    category: "Linked List",
    question: "Detect a Cycle in a Linked List",
    answer: `Linked List mein cycle (loop) hai ya nahi detect karo.

**Approach:** Floyd's Cycle Detection — Slow and Fast pointers (tortoise and hare).

**Java Solution:**
\`\`\`java
public class DetectCycle {
    public static boolean hasCycle(Node head) {
        Node slow = head, fast = head;
        while (fast != null && fast.next != null) {
            slow = slow.next;
            fast = fast.next.next;
            if (slow == fast) return true; // cycle detected
        }
        return false;
    }
}
\`\`\`

**Python Solution:**
\`\`\`python
def has_cycle(head):
    slow = fast = head
    while fast and fast.next:
        slow = slow.next
        fast = fast.next.next
        if slow == fast:
            return True  # cycle detected
    return False
\`\`\`

**Why it works:** Agar cycle hai toh fast pointer eventually slow pointer ko pakad lega.

**Time Complexity:** O(n) | **Space Complexity:** O(1)`,
    tags: ["Linked List", "Two Pointer", "Floyd's Algorithm", "Easy"],
  },
  {
    id: 12,
    difficulty: "Easy",
    category: "Linked List",
    question: "Find the Middle of a Linked List",
    answer: `Linked List ka middle node dhundho.

**Approach:** Slow and Fast pointer — fast double speed se chalega, jab fast end pe pahunche slow middle pe hoga.

**Java Solution:**
\`\`\`java
public class MiddleNode {
    public static Node findMiddle(Node head) {
        Node slow = head, fast = head;
        while (fast != null && fast.next != null) {
            slow = slow.next;
            fast = fast.next.next;
        }
        return slow; // middle node
    }
}
\`\`\`

**Python Solution:**
\`\`\`python
def find_middle(head):
    slow = fast = head
    while fast and fast.next:
        slow = slow.next
        fast = fast.next.next
    return slow  # middle node
\`\`\`

**Example:** 1→2→3→4→5, Middle = 3  
**Even length:** 1→2→3→4, Middle = 3 (second middle)

**Time Complexity:** O(n) | **Space Complexity:** O(1)`,
    tags: ["Linked List", "Two Pointer", "Easy"],
  },
  {
    id: 13,
    difficulty: "Medium",
    category: "Stack",
    question: "Valid Parentheses – Check Balanced Brackets",
    answer: `String mein brackets balanced hain ya nahi check karo. E.g., "()[]{}" → valid, "([)]" → invalid.

**Approach:** Stack — opening bracket push karo, closing bracket aaye toh top se match karo.

**Java Solution:**
\`\`\`java
import java.util.Stack;

public class ValidParentheses {
    public static boolean isValid(String s) {
        Stack<Character> stack = new Stack<>();
        for (char c : s.toCharArray()) {
            if (c == '(' || c == '[' || c == '{') {
                stack.push(c);
            } else {
                if (stack.isEmpty()) return false;
                char top = stack.pop();
                if (c == ')' && top != '(') return false;
                if (c == ']' && top != '[') return false;
                if (c == '}' && top != '{') return false;
            }
        }
        return stack.isEmpty();
    }

    public static void main(String[] args) {
        System.out.println(isValid("()[]{}")); // true
        System.out.println(isValid("([)]"));   // false
    }
}
\`\`\`

**Python Solution:**
\`\`\`python
def is_valid(s):
    stack = []
    mapping = {')': '(', ']': '[', '}': '{'}
    for char in s:
        if char in mapping:
            top = stack.pop() if stack else '#'
            if mapping[char] != top:
                return False
        else:
            stack.append(char)
    return not stack

print(is_valid("()[]{}"))  # True
print(is_valid("([)]"))    # False
\`\`\`

**Time Complexity:** O(n) | **Space Complexity:** O(n)`,
    tags: ["Stack", "String", "LeetCode", "Medium"],
  },
  {
    id: 14,
    difficulty: "Medium",
    category: "Stack",
    question: "Implement a Stack using Arrays/ArrayList",
    answer: `Stack implement karo array ya ArrayList use karke with push, pop, peek operations.

**Java Solution:**
\`\`\`java
import java.util.ArrayList;

public class MyStack {
    private ArrayList<Integer> stack = new ArrayList<>();

    public void push(int val) {
        stack.add(val);
    }

    public int pop() {
        if (isEmpty()) throw new RuntimeException("Stack is empty");
        return stack.remove(stack.size() - 1);
    }

    public int peek() {
        if (isEmpty()) throw new RuntimeException("Stack is empty");
        return stack.get(stack.size() - 1);
    }

    public boolean isEmpty() {
        return stack.isEmpty();
    }

    public int size() {
        return stack.size();
    }

    public static void main(String[] args) {
        MyStack s = new MyStack();
        s.push(1); s.push(2); s.push(3);
        System.out.println(s.peek()); // 3
        System.out.println(s.pop());  // 3
        System.out.println(s.pop());  // 2
    }
}
\`\`\`

**Python Solution:**
\`\`\`python
class MyStack:
    def __init__(self):
        self.stack = []

    def push(self, val):
        self.stack.append(val)

    def pop(self):
        if self.is_empty():
            raise Exception("Stack is empty")
        return self.stack.pop()

    def peek(self):
        if self.is_empty():
            raise Exception("Stack is empty")
        return self.stack[-1]

    def is_empty(self):
        return len(self.stack) == 0

s = MyStack()
s.push(1); s.push(2); s.push(3)
print(s.peek())  # 3
print(s.pop())   # 3
\`\`\`

**Time Complexity:** Push/Pop/Peek → O(1)`,
    tags: ["Stack", "Data Structure", "Medium"],
  },
  {
    id: 15,
    difficulty: "Medium",
    category: "Recursion",
    question: "Fibonacci Series using Recursion and Dynamic Programming",
    answer: `Nth Fibonacci number find karo — recursion aur DP dono approaches.

**Java Solution:**
\`\`\`java
public class Fibonacci {
    // Recursion (slow — O(2^n))
    public static int fibRecursive(int n) {
        if (n <= 1) return n;
        return fibRecursive(n - 1) + fibRecursive(n - 2);
    }

    // Memoization (fast — O(n))
    static int[] memo = new int[100];
    public static int fibMemo(int n) {
        if (n <= 1) return n;
        if (memo[n] != 0) return memo[n];
        memo[n] = fibMemo(n - 1) + fibMemo(n - 2);
        return memo[n];
    }

    // Bottom-up DP (O(n) time, O(n) space)
    public static int fibDP(int n) {
        if (n <= 1) return n;
        int[] dp = new int[n + 1];
        dp[0] = 0; dp[1] = 1;
        for (int i = 2; i <= n; i++)
            dp[i] = dp[i-1] + dp[i-2];
        return dp[n];
    }

    // Optimized (O(n) time, O(1) space)
    public static int fibOptimal(int n) {
        if (n <= 1) return n;
        int a = 0, b = 1;
        for (int i = 2; i <= n; i++) {
            int c = a + b;
            a = b; b = c;
        }
        return b;
    }

    public static void main(String[] args) {
        System.out.println(fibOptimal(10)); // 55
    }
}
\`\`\`

**Python Solution:**
\`\`\`python
from functools import lru_cache

# Memoization with decorator
@lru_cache(maxsize=None)
def fib(n):
    if n <= 1:
        return n
    return fib(n-1) + fib(n-2)

# Iterative (optimal)
def fib_iterative(n):
    a, b = 0, 1
    for _ in range(n):
        a, b = b, a + b
    return a

print(fib(10))           # 55
print(fib_iterative(10)) # 55
\`\`\`

**Time:** O(n) with DP | **Space:** O(1) with optimized`,
    tags: ["Recursion", "Dynamic Programming", "Medium"],
  },
  {
    id: 16,
    difficulty: "Medium",
    category: "Sorting",
    question: "Bubble Sort – Implement and Explain",
    answer: `Bubble Sort implement karo aur complexity batao.

**How it works:** Adjacent elements compare karo, agar galat order mein hain toh swap karo. Har pass mein largest element end mein aa jata hai.

**Java Solution:**
\`\`\`java
import java.util.Arrays;

public class BubbleSort {
    public static void bubbleSort(int[] arr) {
        int n = arr.length;
        for (int i = 0; i < n - 1; i++) {
            boolean swapped = false;
            for (int j = 0; j < n - i - 1; j++) {
                if (arr[j] > arr[j + 1]) {
                    int temp = arr[j];
                    arr[j] = arr[j + 1];
                    arr[j + 1] = temp;
                    swapped = true;
                }
            }
            if (!swapped) break; // already sorted
        }
    }

    public static void main(String[] args) {
        int[] arr = {64, 34, 25, 12, 22, 11, 90};
        bubbleSort(arr);
        System.out.println(Arrays.toString(arr));
        // [11, 12, 22, 25, 34, 64, 90]
    }
}
\`\`\`

**Python Solution:**
\`\`\`python
def bubble_sort(arr):
    n = len(arr)
    for i in range(n - 1):
        swapped = False
        for j in range(n - i - 1):
            if arr[j] > arr[j + 1]:
                arr[j], arr[j + 1] = arr[j + 1], arr[j]
                swapped = True
        if not swapped:
            break  # already sorted
    return arr

arr = [64, 34, 25, 12, 22, 11, 90]
print(bubble_sort(arr))  # [11, 12, 22, 25, 34, 64, 90]
\`\`\`

**Time:** Best O(n) / Average & Worst O(n²) | **Space:** O(1)`,
    tags: ["Sorting", "Medium"],
  },
  {
    id: 17,
    difficulty: "Medium",
    category: "Sorting",
    question: "Binary Search – Iterative and Recursive",
    answer: `Sorted array mein element dhundho Binary Search se.

**Condition:** Array sorted hona chahiye!

**Java Solution:**
\`\`\`java
public class BinarySearch {
    // Iterative
    public static int binarySearch(int[] arr, int target) {
        int left = 0, right = arr.length - 1;
        while (left <= right) {
            int mid = left + (right - left) / 2; // overflow avoid
            if (arr[mid] == target) return mid;
            else if (arr[mid] < target) left = mid + 1;
            else right = mid - 1;
        }
        return -1; // not found
    }

    // Recursive
    public static int binarySearchRecursive(int[] arr, int left, int right, int target) {
        if (left > right) return -1;
        int mid = left + (right - left) / 2;
        if (arr[mid] == target) return mid;
        if (arr[mid] < target) return binarySearchRecursive(arr, mid + 1, right, target);
        return binarySearchRecursive(arr, left, mid - 1, target);
    }

    public static void main(String[] args) {
        int[] arr = {1, 3, 5, 7, 9, 11, 13};
        System.out.println(binarySearch(arr, 7)); // 3
        System.out.println(binarySearch(arr, 6)); // -1
    }
}
\`\`\`

**Python Solution:**
\`\`\`python
def binary_search(arr, target):
    left, right = 0, len(arr) - 1
    while left <= right:
        mid = (left + right) // 2
        if arr[mid] == target:
            return mid
        elif arr[mid] < target:
            left = mid + 1
        else:
            right = mid - 1
    return -1

arr = [1, 3, 5, 7, 9, 11, 13]
print(binary_search(arr, 7))   # 3
print(binary_search(arr, 6))   # -1

# Python built-in:
import bisect
idx = bisect.bisect_left(arr, 7)
\`\`\`

**Time Complexity:** O(log n) | **Space:** O(1) iterative, O(log n) recursive`,
    tags: ["Searching", "Binary Search", "Medium"],
  },
  {
    id: 18,
    difficulty: "Medium",
    category: "Tree",
    question: "Tree Traversal – Inorder, Preorder, Postorder",
    answer: `Binary Tree ke teeno traversals implement karo.

**Java Solution:**
\`\`\`java
class TreeNode {
    int val;
    TreeNode left, right;
    TreeNode(int val) { this.val = val; }
}

public class TreeTraversal {
    // Inorder: Left → Root → Right (gives sorted order for BST)
    public static void inorder(TreeNode root) {
        if (root == null) return;
        inorder(root.left);
        System.out.print(root.val + " ");
        inorder(root.right);
    }

    // Preorder: Root → Left → Right
    public static void preorder(TreeNode root) {
        if (root == null) return;
        System.out.print(root.val + " ");
        preorder(root.left);
        preorder(root.right);
    }

    // Postorder: Left → Right → Root
    public static void postorder(TreeNode root) {
        if (root == null) return;
        postorder(root.left);
        postorder(root.right);
        System.out.print(root.val + " ");
    }
}
\`\`\`

**Python Solution:**
\`\`\`python
class TreeNode:
    def __init__(self, val):
        self.val = val
        self.left = self.right = None

def inorder(root):
    if not root:
        return []
    return inorder(root.left) + [root.val] + inorder(root.right)

def preorder(root):
    if not root:
        return []
    return [root.val] + preorder(root.left) + preorder(root.right)

def postorder(root):
    if not root:
        return []
    return postorder(root.left) + postorder(root.right) + [root.val]
\`\`\`

**Memory trick:** Pre = Root first, In = Root middle, Post = Root last`,
    tags: ["Tree", "Recursion", "Medium"],
  },
  {
    id: 19,
    difficulty: "Medium",
    category: "Tree",
    question: "Find Height of a Binary Tree",
    answer: `Binary Tree ki height (depth) find karo.

**Height = Root se deepest leaf tak ka distance**

**Java Solution:**
\`\`\`java
public class TreeHeight {
    public static int height(TreeNode root) {
        if (root == null) return 0;
        int leftHeight = height(root.left);
        int rightHeight = height(root.right);
        return 1 + Math.max(leftHeight, rightHeight);
    }

    public static void main(String[] args) {
        TreeNode root = new TreeNode(1);
        root.left = new TreeNode(2);
        root.right = new TreeNode(3);
        root.left.left = new TreeNode(4);
        System.out.println(height(root)); // 3
    }
}
\`\`\`

**Python Solution:**
\`\`\`python
def height(root):
    if not root:
        return 0
    left_h = height(root.left)
    right_h = height(root.right)
    return 1 + max(left_h, right_h)

# Test
root = TreeNode(1)
root.left = TreeNode(2)
root.right = TreeNode(3)
root.left.left = TreeNode(4)
print(height(root))  # 3
\`\`\`

**Time Complexity:** O(n) — har node ek baar visit  
**Space Complexity:** O(h) — recursion stack (h = height)`,
    tags: ["Tree", "Recursion", "Medium"],
  },
  {
    id: 20,
    difficulty: "Medium",
    category: "Dynamic Programming",
    question: "Factorial using Recursion",
    answer: `N! (factorial) calculate karo recursion se.

**Java Solution:**
\`\`\`java
public class Factorial {
    // Recursive
    public static long factorial(int n) {
        if (n == 0 || n == 1) return 1;
        return n * factorial(n - 1);
    }

    // Iterative (avoid stack overflow for large n)
    public static long factorialIterative(int n) {
        long result = 1;
        for (int i = 2; i <= n; i++) {
            result *= i;
        }
        return result;
    }

    public static void main(String[] args) {
        System.out.println(factorial(10));         // 3628800
        System.out.println(factorialIterative(10)); // 3628800
    }
}
\`\`\`

**Python Solution:**
\`\`\`python
def factorial(n):
    if n == 0 or n == 1:
        return 1
    return n * factorial(n - 1)

# Iterative
def factorial_iterative(n):
    result = 1
    for i in range(2, n + 1):
        result *= i
    return result

# Built-in
import math
print(math.factorial(10))    # 3628800
print(factorial(10))         # 3628800
\`\`\`

**Time Complexity:** O(n) | **Space:** O(n) recursive, O(1) iterative`,
    tags: ["Recursion", "Math", "Easy"],
  },
  {
    id: 21,
    difficulty: "Medium",
    category: "Array",
    question: "Find the Second Largest Element in Array",
    answer: `Array mein doosra sabse bada element dhundho.

**Approach:** Single pass — max aur secondMax track karo.

**Java Solution:**
\`\`\`java
public class SecondLargest {
    public static int findSecondLargest(int[] arr) {
        int max = Integer.MIN_VALUE;
        int secondMax = Integer.MIN_VALUE;
        for (int num : arr) {
            if (num > max) {
                secondMax = max;
                max = num;
            } else if (num > secondMax && num != max) {
                secondMax = num;
            }
        }
        return secondMax;
    }

    public static void main(String[] args) {
        int[] arr = {12, 35, 1, 10, 34, 1};
        System.out.println(findSecondLargest(arr)); // 34
    }
}
\`\`\`

**Python Solution:**
\`\`\`python
def second_largest(arr):
    max_val = second_max = float('-inf')
    for num in arr:
        if num > max_val:
            second_max = max_val
            max_val = num
        elif num > second_max and num != max_val:
            second_max = num
    return second_max

arr = [12, 35, 1, 10, 34, 1]
print(second_largest(arr))  # 34

# Pythonic way:
print(sorted(set(arr))[-2])  # 34
\`\`\`

**Time Complexity:** O(n) | **Space:** O(1)`,
    tags: ["Array", "Medium"],
  },
  {
    id: 22,
    difficulty: "Medium",
    category: "Array",
    question: "Maximum Subarray Sum – Kadane's Algorithm",
    answer: `Contiguous subarray ka maximum sum find karo.

**Kadane's Algorithm:** Har position pe decide karo — current element ko current subarray mein add karo ya naya subarray shuru karo.

**Java Solution:**
\`\`\`java
public class MaxSubarraySum {
    public static int maxSubArray(int[] nums) {
        int maxSum = nums[0];
        int currentSum = nums[0];

        for (int i = 1; i < nums.length; i++) {
            currentSum = Math.max(nums[i], currentSum + nums[i]);
            maxSum = Math.max(maxSum, currentSum);
        }
        return maxSum;
    }

    public static void main(String[] args) {
        int[] nums = {-2, 1, -3, 4, -1, 2, 1, -5, 4};
        System.out.println(maxSubArray(nums)); // 6 → [4, -1, 2, 1]
    }
}
\`\`\`

**Python Solution:**
\`\`\`python
def max_subarray(nums):
    max_sum = current_sum = nums[0]
    for num in nums[1:]:
        current_sum = max(num, current_sum + num)
        max_sum = max(max_sum, current_sum)
    return max_sum

nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4]
print(max_subarray(nums))  # 6
\`\`\`

**Time Complexity:** O(n) | **Space:** O(1)  
**Subarray:** [4, -1, 2, 1] = 6`,
    tags: ["Array", "Dynamic Programming", "Kadane", "LeetCode", "Medium"],
  },
  {
    id: 23,
    difficulty: "Medium",
    category: "HashMap",
    question: "Frequency Count of Elements in an Array",
    answer: `Array ke har element ki frequency count karo.

**Java Solution:**
\`\`\`java
import java.util.*;

public class FrequencyCount {
    public static Map<Integer, Integer> countFrequency(int[] arr) {
        Map<Integer, Integer> freqMap = new HashMap<>();
        for (int num : arr) {
            freqMap.put(num, freqMap.getOrDefault(num, 0) + 1);
        }
        return freqMap;
    }

    public static void main(String[] args) {
        int[] arr = {1, 2, 2, 3, 3, 3, 4};
        Map<Integer, Integer> freq = countFrequency(arr);
        freq.forEach((k, v) -> System.out.println(k + " → " + v));
        // 1 → 1, 2 → 2, 3 → 3, 4 → 1
    }
}
\`\`\`

**Python Solution:**
\`\`\`python
from collections import Counter

def count_frequency(arr):
    return dict(Counter(arr))

arr = [1, 2, 2, 3, 3, 3, 4]
freq = count_frequency(arr)
print(freq)  # {1: 1, 2: 2, 3: 3, 4: 1}

# Manual approach:
def count_freq_manual(arr):
    freq = {}
    for num in arr:
        freq[num] = freq.get(num, 0) + 1
    return freq
\`\`\`

**Time Complexity:** O(n) | **Space:** O(n)`,
    tags: ["HashMap", "Array", "Easy"],
  },
  {
    id: 24,
    difficulty: "Medium",
    category: "Array",
    question: "Move all Zeros to End of Array",
    answer: `Array ke saare zeros ko end mein move karo, baki elements ka order preserve karo.

**Java Solution:**
\`\`\`java
public class MoveZeros {
    public static void moveZeroes(int[] nums) {
        int insertPos = 0;
        // First pass: move non-zero elements to front
        for (int num : nums) {
            if (num != 0) nums[insertPos++] = num;
        }
        // Fill rest with zeros
        while (insertPos < nums.length) {
            nums[insertPos++] = 0;
        }
    }

    public static void main(String[] args) {
        int[] arr = {0, 1, 0, 3, 12};
        moveZeroes(arr);
        System.out.println(Arrays.toString(arr)); // [1, 3, 12, 0, 0]
    }
}
\`\`\`

**Python Solution:**
\`\`\`python
def move_zeros(nums):
    insert_pos = 0
    for num in nums:
        if num != 0:
            nums[insert_pos] = num
            insert_pos += 1
    while insert_pos < len(nums):
        nums[insert_pos] = 0
        insert_pos += 1
    return nums

# Pythonic:
def move_zeros_pythonic(nums):
    non_zeros = [x for x in nums if x != 0]
    zeros = [0] * (len(nums) - len(non_zeros))
    return non_zeros + zeros

print(move_zeros([0, 1, 0, 3, 12]))  # [1, 3, 12, 0, 0]
\`\`\`

**Time Complexity:** O(n) | **Space:** O(1)`,
    tags: ["Array", "Two Pointer", "LeetCode", "Medium"],
  },
  {
    id: 25,
    difficulty: "Medium",
    category: "String",
    question: "Find the First Non-Repeating Character in a String",
    answer: `String mein pehla aisa character dhundho jo sirf ek baar aaya ho.

**Java Solution:**
\`\`\`java
import java.util.*;

public class FirstUnique {
    public static char firstUnique(String s) {
        Map<Character, Integer> freq = new LinkedHashMap<>();
        for (char c : s.toCharArray()) {
            freq.put(c, freq.getOrDefault(c, 0) + 1);
        }
        for (Map.Entry<Character, Integer> entry : freq.entrySet()) {
            if (entry.getValue() == 1) return entry.getKey();
        }
        return '_'; // no unique character
    }

    public static void main(String[] args) {
        System.out.println(firstUnique("leetcode"));    // l
        System.out.println(firstUnique("loveleetcode")); // v
    }
}
\`\`\`

**Python Solution:**
\`\`\`python
from collections import Counter

def first_unique(s):
    freq = Counter(s)
    for char in s:
        if freq[char] == 1:
            return char
    return None

print(first_unique("leetcode"))     # l
print(first_unique("loveleetcode")) # v
\`\`\`

**Time Complexity:** O(n) | **Space:** O(1) — max 26 chars for alphabet`,
    tags: ["String", "HashMap", "LeetCode", "Medium"],
  },
  {
    id: 26,
    difficulty: "Medium",
    category: "Recursion",
    question: "Power of a Number – Fast Exponentiation",
    answer: `x^n calculate karo efficiently (x ki n power).

**Java Solution:**
\`\`\`java
public class Power {
    // Fast exponentiation O(log n)
    public static double myPow(double x, int n) {
        if (n == 0) return 1;
        if (n < 0) { x = 1 / x; n = -n; }
        if (n % 2 == 0) {
            double half = myPow(x, n / 2);
            return half * half;
        } else {
            return x * myPow(x, n - 1);
        }
    }

    public static void main(String[] args) {
        System.out.println(myPow(2, 10));  // 1024.0
        System.out.println(myPow(2, -2));  // 0.25
    }
}
\`\`\`

**Python Solution:**
\`\`\`python
def my_pow(x, n):
    if n == 0:
        return 1
    if n < 0:
        x = 1 / x
        n = -n
    if n % 2 == 0:
        half = my_pow(x, n // 2)
        return half * half
    else:
        return x * my_pow(x, n - 1)

print(my_pow(2, 10))  # 1024.0
print(my_pow(2, -2))  # 0.25

# Python built-in: pow(2, 10) or 2**10
\`\`\`

**Time:** O(log n) | **Space:** O(log n) recursive stack  
**vs Naive:** O(n) — brute force multiply n times`,
    tags: ["Recursion", "Math", "Medium"],
  },
  {
    id: 27,
    difficulty: "Hard",
    category: "Array",
    question: "3Sum – Find all triplets that sum to zero",
    answer: `Array mein saare unique triplets dhundho jinka sum 0 ho.

**Approach:** Sort karo, phir har element ke liye two-pointer use karo.

**Java Solution:**
\`\`\`java
import java.util.*;

public class ThreeSum {
    public static List<List<Integer>> threeSum(int[] nums) {
        List<List<Integer>> result = new ArrayList<>();
        Arrays.sort(nums);
        for (int i = 0; i < nums.length - 2; i++) {
            if (i > 0 && nums[i] == nums[i - 1]) continue; // skip duplicates
            int left = i + 1, right = nums.length - 1;
            while (left < right) {
                int sum = nums[i] + nums[left] + nums[right];
                if (sum == 0) {
                    result.add(Arrays.asList(nums[i], nums[left], nums[right]));
                    while (left < right && nums[left] == nums[left + 1]) left++;
                    while (left < right && nums[right] == nums[right - 1]) right--;
                    left++; right--;
                } else if (sum < 0) left++;
                else right--;
            }
        }
        return result;
    }

    public static void main(String[] args) {
        System.out.println(threeSum(new int[]{-1, 0, 1, 2, -1, -4}));
        // [[-1, -1, 2], [-1, 0, 1]]
    }
}
\`\`\`

**Python Solution:**
\`\`\`python
def three_sum(nums):
    nums.sort()
    result = []
    for i in range(len(nums) - 2):
        if i > 0 and nums[i] == nums[i-1]:
            continue  # skip duplicates
        left, right = i + 1, len(nums) - 1
        while left < right:
            s = nums[i] + nums[left] + nums[right]
            if s == 0:
                result.append([nums[i], nums[left], nums[right]])
                while left < right and nums[left] == nums[left+1]: left += 1
                while left < right and nums[right] == nums[right-1]: right -= 1
                left += 1; right -= 1
            elif s < 0:
                left += 1
            else:
                right -= 1
    return result

print(three_sum([-1, 0, 1, 2, -1, -4]))
# [[-1, -1, 2], [-1, 0, 1]]
\`\`\`

**Time:** O(n²) | **Space:** O(1) excluding output`,
    tags: ["Array", "Two Pointer", "LeetCode", "Hard"],
  },
  {
    id: 28,
    difficulty: "Medium",
    category: "Tree",
    question: "Level Order Traversal of Binary Tree (BFS)",
    answer: `Binary Tree ka Level Order (BFS) traversal karo — har level ke nodes print karo.

**Approach:** Queue use karo.

**Java Solution:**
\`\`\`java
import java.util.*;

public class LevelOrder {
    public static List<List<Integer>> levelOrder(TreeNode root) {
        List<List<Integer>> result = new ArrayList<>();
        if (root == null) return result;
        Queue<TreeNode> queue = new LinkedList<>();
        queue.offer(root);
        while (!queue.isEmpty()) {
            int size = queue.size();
            List<Integer> level = new ArrayList<>();
            for (int i = 0; i < size; i++) {
                TreeNode node = queue.poll();
                level.add(node.val);
                if (node.left != null) queue.offer(node.left);
                if (node.right != null) queue.offer(node.right);
            }
            result.add(level);
        }
        return result;
    }
}
\`\`\`

**Python Solution:**
\`\`\`python
from collections import deque

def level_order(root):
    if not root:
        return []
    result = []
    queue = deque([root])
    while queue:
        level = []
        for _ in range(len(queue)):
            node = queue.popleft()
            level.append(node.val)
            if node.left:  queue.append(node.left)
            if node.right: queue.append(node.right)
        result.append(level)
    return result
\`\`\`

**Time:** O(n) | **Space:** O(n) — queue holds at most one level`,
    tags: ["Tree", "BFS", "Queue", "LeetCode", "Medium"],
  },
  {
    id: 29,
    difficulty: "Hard",
    category: "Dynamic Programming",
    question: "Longest Common Subsequence (LCS)",
    answer: `Do strings ka Longest Common Subsequence find karo.

**Example:** "ABCBDAB" aur "BDCAB" → LCS = "BCAB" (length 4)

**Java Solution:**
\`\`\`java
public class LCS {
    public static int lcs(String s1, String s2) {
        int m = s1.length(), n = s2.length();
        int[][] dp = new int[m + 1][n + 1];
        for (int i = 1; i <= m; i++) {
            for (int j = 1; j <= n; j++) {
                if (s1.charAt(i-1) == s2.charAt(j-1)) {
                    dp[i][j] = 1 + dp[i-1][j-1];
                } else {
                    dp[i][j] = Math.max(dp[i-1][j], dp[i][j-1]);
                }
            }
        }
        return dp[m][n];
    }

    public static void main(String[] args) {
        System.out.println(lcs("ABCBDAB", "BDCAB")); // 4
    }
}
\`\`\`

**Python Solution:**
\`\`\`python
def lcs(s1, s2):
    m, n = len(s1), len(s2)
    dp = [[0] * (n + 1) for _ in range(m + 1)]
    for i in range(1, m + 1):
        for j in range(1, n + 1):
            if s1[i-1] == s2[j-1]:
                dp[i][j] = 1 + dp[i-1][j-1]
            else:
                dp[i][j] = max(dp[i-1][j], dp[i][j-1])
    return dp[m][n]

print(lcs("ABCBDAB", "BDCAB"))  # 4
\`\`\`

**Time:** O(m×n) | **Space:** O(m×n) DP table`,
    tags: ["Dynamic Programming", "String", "Hard"],
  },
  {
    id: 30,
    difficulty: "Hard",
    category: "Graph",
    question: "Graph BFS and DFS Traversal",
    answer: `Graph ka BFS (Breadth First Search) aur DFS (Depth First Search) implement karo.

**Java Solution:**
\`\`\`java
import java.util.*;

public class GraphTraversal {
    // BFS
    public static void bfs(Map<Integer, List<Integer>> graph, int start) {
        Set<Integer> visited = new HashSet<>();
        Queue<Integer> queue = new LinkedList<>();
        queue.offer(start);
        visited.add(start);
        while (!queue.isEmpty()) {
            int node = queue.poll();
            System.out.print(node + " ");
            for (int neighbor : graph.getOrDefault(node, new ArrayList<>())) {
                if (!visited.contains(neighbor)) {
                    visited.add(neighbor);
                    queue.offer(neighbor);
                }
            }
        }
    }

    // DFS (Recursive)
    public static void dfs(Map<Integer, List<Integer>> graph, int node, Set<Integer> visited) {
        visited.add(node);
        System.out.print(node + " ");
        for (int neighbor : graph.getOrDefault(node, new ArrayList<>())) {
            if (!visited.contains(neighbor)) {
                dfs(graph, neighbor, visited);
            }
        }
    }
}
\`\`\`

**Python Solution:**
\`\`\`python
from collections import deque

def bfs(graph, start):
    visited = set([start])
    queue = deque([start])
    result = []
    while queue:
        node = queue.popleft()
        result.append(node)
        for neighbor in graph.get(node, []):
            if neighbor not in visited:
                visited.add(neighbor)
                queue.append(neighbor)
    return result

def dfs(graph, node, visited=None):
    if visited is None:
        visited = set()
    visited.add(node)
    result = [node]
    for neighbor in graph.get(node, []):
        if neighbor not in visited:
            result.extend(dfs(graph, neighbor, visited))
    return result

# Test
graph = {0: [1, 2], 1: [0, 3], 2: [0, 4], 3: [1], 4: [2]}
print("BFS:", bfs(graph, 0))   # [0, 1, 2, 3, 4]
print("DFS:", dfs(graph, 0))   # [0, 1, 3, 2, 4]
\`\`\`

**BFS:** Level by level — shortest path ke liye  
**DFS:** Deep dive — cycle detection, topological sort ke liye  
**Time:** O(V + E) | **Space:** O(V)`,
    tags: ["Graph", "BFS", "DFS", "Hard"],
  },
  {
    id: 31,
    difficulty: "Easy",
    category: "Math",
    question: "Check if a Number is Prime",
    answer: `Ek number prime hai ya nahi check karo. Prime number wo hota hai jo sirf 1 aur khud se divisible ho.

**Java Solution:**
\`\`\`java
public class PrimeCheck {
    public static boolean isPrime(int n) {
        if (n < 2) return false;
        if (n == 2) return true;
        if (n % 2 == 0) return false;
        for (int i = 3; i * i <= n; i += 2) {
            if (n % i == 0) return false;
        }
        return true;
    }

    public static void main(String[] args) {
        System.out.println(isPrime(17)); // true
        System.out.println(isPrime(18)); // false
        System.out.println(isPrime(2));  // true
    }
}
\`\`\`

**Python Solution:**
\`\`\`python
def is_prime(n):
    if n < 2:
        return False
    if n == 2:
        return True
    if n % 2 == 0:
        return False
    for i in range(3, int(n**0.5) + 1, 2):
        if n % i == 0:
            return False
    return True

print(is_prime(17))  # True
print(is_prime(18))  # False
\`\`\`

**Key optimization:** Sirf √n tak check karo — agar n ka koi factor hai toh woh √n se chhota hoga.

**Time Complexity:** O(√n) | **Space:** O(1)`,
    tags: ["Math", "Easy", "Most Asked"],
  },
  {
    id: 32,
    difficulty: "Easy",
    category: "Math",
    question: "Reverse a Number (e.g., 1234 → 4321)",
    answer: `Integer ko reverse karo digits ke hisaab se.

**Java Solution:**
\`\`\`java
public class ReverseNumber {
    public static int reverse(int n) {
        boolean isNegative = n < 0;
        n = Math.abs(n);
        int reversed = 0;
        while (n != 0) {
            int digit = n % 10;
            reversed = reversed * 10 + digit;
            n /= 10;
        }
        return isNegative ? -reversed : reversed;
    }

    public static void main(String[] args) {
        System.out.println(reverse(1234));  // 4321
        System.out.println(reverse(-456));  // -654
        System.out.println(reverse(1200));  // 21
    }
}
\`\`\`

**Python Solution:**
\`\`\`python
def reverse_number(n):
    negative = n < 0
    n = abs(n)
    reversed_n = int(str(n)[::-1])
    return -reversed_n if negative else reversed_n

# Manual approach:
def reverse_number_manual(n):
    negative = n < 0
    n = abs(n)
    result = 0
    while n != 0:
        result = result * 10 + n % 10
        n //= 10
    return -result if negative else result

print(reverse_number(1234))  # 4321
print(reverse_number(-456))  # -654
\`\`\`

**Time Complexity:** O(d) — d = number of digits | **Space:** O(1)`,
    tags: ["Math", "Easy"],
  },
  {
    id: 33,
    difficulty: "Easy",
    category: "Math",
    question: "Check Armstrong Number (e.g., 153 = 1³+5³+3³)",
    answer: `Armstrong number wo hota hai jahan har digit ko uski position ki power se raise karke add karo toh original number mile.

**Example:** 153 = 1³ + 5³ + 3³ = 1 + 125 + 27 = 153 ✅

**Java Solution:**
\`\`\`java
public class Armstrong {
    public static boolean isArmstrong(int n) {
        int original = n, sum = 0;
        int digits = String.valueOf(n).length();
        while (n > 0) {
            int d = n % 10;
            sum += Math.pow(d, digits);
            n /= 10;
        }
        return sum == original;
    }

    public static void main(String[] args) {
        System.out.println(isArmstrong(153)); // true
        System.out.println(isArmstrong(370)); // true
        System.out.println(isArmstrong(123)); // false
    }
}
\`\`\`

**Python Solution:**
\`\`\`python
def is_armstrong(n):
    digits = len(str(n))
    return sum(int(d) ** digits for d in str(n)) == n

print(is_armstrong(153))  # True
print(is_armstrong(370))  # True
print(is_armstrong(123))  # False

# Print all 3-digit Armstrong numbers:
print([n for n in range(100, 1000) if is_armstrong(n)])
# [153, 370, 371, 407]
\`\`\`

**Time Complexity:** O(d) | **Space:** O(1)`,
    tags: ["Math", "Easy"],
  },
  {
    id: 34,
    difficulty: "Easy",
    category: "Math",
    question: "GCD and LCM of Two Numbers",
    answer: `Do numbers ka GCD (Greatest Common Divisor) aur LCM (Least Common Multiple) find karo.

**Formula:** LCM(a, b) = (a × b) / GCD(a, b)

**Java Solution:**
\`\`\`java
public class GCDandLCM {
    // Euclidean Algorithm
    public static int gcd(int a, int b) {
        while (b != 0) {
            int temp = b;
            b = a % b;
            a = temp;
        }
        return a;
    }

    public static int lcm(int a, int b) {
        return (a / gcd(a, b)) * b; // divide first to avoid overflow
    }

    public static void main(String[] args) {
        System.out.println("GCD(12,18) = " + gcd(12, 18)); // 6
        System.out.println("LCM(12,18) = " + lcm(12, 18)); // 36
    }
}
\`\`\`

**Python Solution:**
\`\`\`python
def gcd(a, b):
    while b:
        a, b = b, a % b
    return a

def lcm(a, b):
    return (a * b) // gcd(a, b)

print(f"GCD(12,18) = {gcd(12, 18)}")  # 6
print(f"LCM(12,18) = {lcm(12, 18)}")  # 36

# Python built-in (Python 3.5+):
import math
print(math.gcd(12, 18))  # 6
print(math.lcm(12, 18))  # 36 (Python 3.9+)
\`\`\`

**Euclidean Algorithm:** gcd(a, b) = gcd(b, a % b) until b = 0

**Time Complexity:** O(log(min(a,b))) | **Space:** O(1)`,
    tags: ["Math", "Easy", "Most Asked"],
  },
  {
    id: 35,
    difficulty: "Medium",
    category: "Array",
    question: "Rotate an Array by K positions",
    answer: `Array ko K positions right rotate karo.

**Example:** [1,2,3,4,5], K=2 → [4,5,1,2,3]

**Java Solution:**
\`\`\`java
import java.util.Arrays;

public class RotateArray {
    // Reversal Algorithm - O(n) time, O(1) space
    public static void rotate(int[] nums, int k) {
        k = k % nums.length; // handle k > length
        reverse(nums, 0, nums.length - 1);
        reverse(nums, 0, k - 1);
        reverse(nums, k, nums.length - 1);
    }

    private static void reverse(int[] arr, int left, int right) {
        while (left < right) {
            int temp = arr[left];
            arr[left++] = arr[right];
            arr[right--] = temp;
        }
    }

    public static void main(String[] args) {
        int[] arr = {1, 2, 3, 4, 5};
        rotate(arr, 2);
        System.out.println(Arrays.toString(arr)); // [4, 5, 1, 2, 3]
    }
}
\`\`\`

**Python Solution:**
\`\`\`python
def rotate(nums, k):
    n = len(nums)
    k = k % n

    def reverse(arr, left, right):
        while left < right:
            arr[left], arr[right] = arr[right], arr[left]
            left += 1
            right -= 1

    reverse(nums, 0, n - 1)
    reverse(nums, 0, k - 1)
    reverse(nums, k, n - 1)
    return nums

# Pythonic one-liner:
def rotate_pythonic(nums, k):
    k = k % len(nums)
    return nums[-k:] + nums[:-k]

print(rotate([1, 2, 3, 4, 5], 2))  # [4, 5, 1, 2, 3]
\`\`\`

**Time:** O(n) | **Space:** O(1) reversal method`,
    tags: ["Array", "Medium", "LeetCode"],
  },
  {
    id: 36,
    difficulty: "Medium",
    category: "String",
    question: "Longest Substring Without Repeating Characters",
    answer: `String mein longest substring dhundho jisme koi character repeat na ho.

**Example:** "abcabcbb" → "abc" (length 3)

**Approach:** Sliding Window + HashSet

**Java Solution:**
\`\`\`java
import java.util.*;

public class LongestUniqueSubstring {
    public static int lengthOfLongestSubstring(String s) {
        Set<Character> set = new HashSet<>();
        int left = 0, maxLen = 0;

        for (int right = 0; right < s.length(); right++) {
            while (set.contains(s.charAt(right))) {
                set.remove(s.charAt(left));
                left++;
            }
            set.add(s.charAt(right));
            maxLen = Math.max(maxLen, right - left + 1);
        }
        return maxLen;
    }

    public static void main(String[] args) {
        System.out.println(lengthOfLongestSubstring("abcabcbb")); // 3
        System.out.println(lengthOfLongestSubstring("bbbbb"));    // 1
        System.out.println(lengthOfLongestSubstring("pwwkew"));   // 3
    }
}
\`\`\`

**Python Solution:**
\`\`\`python
def length_of_longest_substring(s):
    char_set = set()
    left = 0
    max_len = 0

    for right in range(len(s)):
        while s[right] in char_set:
            char_set.remove(s[left])
            left += 1
        char_set.add(s[right])
        max_len = max(max_len, right - left + 1)

    return max_len

print(length_of_longest_substring("abcabcbb"))  # 3
print(length_of_longest_substring("pwwkew"))    # 3
\`\`\`

**Time:** O(n) | **Space:** O(min(n, 26)) for alphabet`,
    tags: ["String", "Sliding Window", "HashSet", "LeetCode", "Medium"],
  },
  {
    id: 37,
    difficulty: "Medium",
    category: "Array",
    question: "Merge Two Sorted Arrays",
    answer: `Do sorted arrays ko ek sorted array mein merge karo.

**Java Solution:**
\`\`\`java
import java.util.Arrays;

public class MergeSortedArrays {
    public static int[] merge(int[] a, int[] b) {
        int[] result = new int[a.length + b.length];
        int i = 0, j = 0, k = 0;

        while (i < a.length && j < b.length) {
            if (a[i] <= b[j]) result[k++] = a[i++];
            else result[k++] = b[j++];
        }
        while (i < a.length) result[k++] = a[i++];
        while (j < b.length) result[k++] = b[j++];

        return result;
    }

    public static void main(String[] args) {
        int[] a = {1, 3, 5, 7};
        int[] b = {2, 4, 6, 8};
        System.out.println(Arrays.toString(merge(a, b)));
        // [1, 2, 3, 4, 5, 6, 7, 8]
    }
}
\`\`\`

**Python Solution:**
\`\`\`python
def merge_sorted(a, b):
    result = []
    i = j = 0
    while i < len(a) and j < len(b):
        if a[i] <= b[j]:
            result.append(a[i]); i += 1
        else:
            result.append(b[j]); j += 1
    result.extend(a[i:])
    result.extend(b[j:])
    return result

a = [1, 3, 5, 7]
b = [2, 4, 6, 8]
print(merge_sorted(a, b))  # [1, 2, 3, 4, 5, 6, 7, 8]

# Python built-in:
import heapq
print(list(heapq.merge(a, b)))
\`\`\`

**Time:** O(m + n) | **Space:** O(m + n)`,
    tags: ["Array", "Sorting", "Medium"],
  },
  {
    id: 38,
    difficulty: "Medium",
    category: "Array",
    question: "Missing Number in Array (1 to N)",
    answer: `1 se N tak ke numbers mein se ek number missing hai — wo dhundho.

**Example:** [1, 2, 4, 5] → Missing = 3 (N = 5)

**Java Solution:**
\`\`\`java
public class MissingNumber {
    // Method 1: Sum formula O(n), O(1)
    public static int findMissing(int[] arr, int n) {
        int expectedSum = n * (n + 1) / 2;
        int actualSum = 0;
        for (int num : arr) actualSum += num;
        return expectedSum - actualSum;
    }

    // Method 2: XOR O(n), O(1)
    public static int findMissingXOR(int[] arr, int n) {
        int xor = 0;
        for (int i = 1; i <= n; i++) xor ^= i;
        for (int num : arr) xor ^= num;
        return xor;
    }

    public static void main(String[] args) {
        int[] arr = {1, 2, 4, 5, 6};
        System.out.println(findMissing(arr, 6));    // 3
        System.out.println(findMissingXOR(arr, 6)); // 3
    }
}
\`\`\`

**Python Solution:**
\`\`\`python
def find_missing(arr, n):
    expected = n * (n + 1) // 2
    return expected - sum(arr)

# Using XOR:
def find_missing_xor(arr, n):
    xor = 0
    for i in range(1, n + 1):
        xor ^= i
    for num in arr:
        xor ^= num
    return xor

arr = [1, 2, 4, 5, 6]
print(find_missing(arr, 6))     # 3
print(find_missing_xor(arr, 6)) # 3
\`\`\`

**Time:** O(n) | **Space:** O(1)  
**Sum formula trick:** Expected sum - Actual sum = Missing number`,
    tags: ["Array", "Math", "XOR", "Medium", "Most Asked"],
  },
  {
    id: 39,
    difficulty: "Medium",
    category: "String",
    question: "Count occurrences of a character in String",
    answer: `String mein ek specific character kitni baar aata hai count karo.

**Java Solution:**
\`\`\`java
public class CharCount {
    public static int countChar(String s, char target) {
        int count = 0;
        for (char c : s.toCharArray()) {
            if (c == target) count++;
        }
        return count;
    }

    // Using streams (Java 8+)
    public static long countCharStream(String s, char target) {
        return s.chars().filter(c -> c == target).count();
    }

    public static void main(String[] args) {
        System.out.println(countChar("programming", 'g'));       // 2
        System.out.println(countCharStream("programming", 'g')); // 2
    }
}
\`\`\`

**Python Solution:**
\`\`\`python
def count_char(s, target):
    count = 0
    for c in s:
        if c == target:
            count += 1
    return count

# Built-in:
s = "programming"
print(s.count('g'))       # 2
print(count_char(s, 'g')) # 2

# Using Counter:
from collections import Counter
print(Counter(s)['g'])    # 2
\`\`\`

**Time:** O(n) | **Space:** O(1)`,
    tags: ["String", "Easy"],
  },
  {
    id: 40,
    difficulty: "Medium",
    category: "Linked List",
    question: "Merge Two Sorted Linked Lists",
    answer: `Do sorted linked lists ko ek sorted linked list mein merge karo.

**Java Solution:**
\`\`\`java
public class MergeSortedLL {
    public static Node mergeTwoLists(Node l1, Node l2) {
        Node dummy = new Node(0);
        Node current = dummy;

        while (l1 != null && l2 != null) {
            if (l1.data <= l2.data) {
                current.next = l1;
                l1 = l1.next;
            } else {
                current.next = l2;
                l2 = l2.next;
            }
            current = current.next;
        }
        // Attach remaining nodes
        current.next = (l1 != null) ? l1 : l2;
        return dummy.next;
    }
}
\`\`\`

**Python Solution:**
\`\`\`python
class Node:
    def __init__(self, data):
        self.data = data
        self.next = None

def merge_two_lists(l1, l2):
    dummy = Node(0)
    current = dummy

    while l1 and l2:
        if l1.data <= l2.data:
            current.next = l1
            l1 = l1.next
        else:
            current.next = l2
            l2 = l2.next
        current = current.next

    current.next = l1 if l1 else l2
    return dummy.next

# Recursive approach:
def merge_recursive(l1, l2):
    if not l1: return l2
    if not l2: return l1
    if l1.data <= l2.data:
        l1.next = merge_recursive(l1.next, l2)
        return l1
    else:
        l2.next = merge_recursive(l1, l2.next)
        return l2
\`\`\`

**Time:** O(m + n) | **Space:** O(1) iterative`,
    tags: ["Linked List", "Medium", "LeetCode"],
  },
  {
    id: 41,
    difficulty: "Medium",
    category: "Stack",
    question: "Next Greater Element for each Array element",
    answer: `Har element ke liye uska next greater element dhundho. Agar koi nahi hai toh -1.

**Example:** [4, 5, 2, 10] → [5, 10, 10, -1]

**Approach:** Monotonic Stack

**Java Solution:**
\`\`\`java
import java.util.*;

public class NextGreaterElement {
    public static int[] nextGreater(int[] arr) {
        int n = arr.length;
        int[] result = new int[n];
        Arrays.fill(result, -1);
        Stack<Integer> stack = new Stack<>(); // stores indices

        for (int i = 0; i < n; i++) {
            while (!stack.isEmpty() && arr[stack.peek()] < arr[i]) {
                result[stack.pop()] = arr[i];
            }
            stack.push(i);
        }
        return result;
    }

    public static void main(String[] args) {
        System.out.println(Arrays.toString(nextGreater(new int[]{4, 5, 2, 10})));
        // [5, 10, 10, -1]
    }
}
\`\`\`

**Python Solution:**
\`\`\`python
def next_greater(arr):
    n = len(arr)
    result = [-1] * n
    stack = []  # stores indices

    for i in range(n):
        while stack and arr[stack[-1]] < arr[i]:
            result[stack.pop()] = arr[i]
        stack.append(i)

    return result

print(next_greater([4, 5, 2, 10]))  # [5, 10, 10, -1]
print(next_greater([1, 3, 2, 4]))   # [3, 4, 4, -1]
\`\`\`

**Time:** O(n) — har element stack mein ek baar push/pop hota hai  
**Space:** O(n)`,
    tags: ["Stack", "Monotonic Stack", "Medium", "Most Asked"],
  },
  {
    id: 42,
    difficulty: "Medium",
    category: "Tree",
    question: "Check if Binary Tree is a BST",
    answer: `Binary Tree valid BST hai ya nahi check karo.

**BST property:** Left subtree < Root < Right subtree (for all nodes, not just direct children!)

**Java Solution:**
\`\`\`java
public class ValidBST {
    public static boolean isValidBST(TreeNode root) {
        return validate(root, Long.MIN_VALUE, Long.MAX_VALUE);
    }

    private static boolean validate(TreeNode node, long min, long max) {
        if (node == null) return true;
        if (node.val <= min || node.val >= max) return false;
        return validate(node.left, min, node.val) &&
               validate(node.right, node.val, max);
    }

    public static void main(String[] args) {
        TreeNode root = new TreeNode(5);
        root.left = new TreeNode(3);
        root.right = new TreeNode(7);
        root.left.left = new TreeNode(1);
        root.left.right = new TreeNode(4);
        System.out.println(isValidBST(root)); // true
    }
}
\`\`\`

**Python Solution:**
\`\`\`python
def is_valid_bst(root, min_val=float('-inf'), max_val=float('inf')):
    if not root:
        return True
    if root.val <= min_val or root.val >= max_val:
        return False
    return (is_valid_bst(root.left, min_val, root.val) and
            is_valid_bst(root.right, root.val, max_val))
\`\`\`

**Common mistake:** Sirf parent check karna kaafi nahi — range propagate karni padti hai.

**Time:** O(n) | **Space:** O(h)`,
    tags: ["Tree", "BST", "Recursion", "Medium"],
  },
  {
    id: 43,
    difficulty: "Easy",
    category: "Array",
    question: "Remove Duplicates from Sorted Array (in-place)",
    answer: `Sorted array se duplicates remove karo in-place aur unique elements ki count return karo.

**Java Solution:**
\`\`\`java
public class RemoveDuplicates {
    public static int removeDuplicates(int[] nums) {
        if (nums.length == 0) return 0;
        int k = 1; // pointer for unique elements
        for (int i = 1; i < nums.length; i++) {
            if (nums[i] != nums[i - 1]) {
                nums[k++] = nums[i];
            }
        }
        return k; // first k elements are unique
    }

    public static void main(String[] args) {
        int[] arr = {1, 1, 2, 2, 3, 4, 4, 5};
        int k = removeDuplicates(arr);
        System.out.println("Unique count: " + k);  // 5
        System.out.println(Arrays.toString(Arrays.copyOf(arr, k)));
        // [1, 2, 3, 4, 5]
    }
}
\`\`\`

**Python Solution:**
\`\`\`python
def remove_duplicates(nums):
    if not nums:
        return 0
    k = 1
    for i in range(1, len(nums)):
        if nums[i] != nums[i - 1]:
            nums[k] = nums[i]
            k += 1
    return k

nums = [1, 1, 2, 2, 3, 4, 4, 5]
k = remove_duplicates(nums)
print(f"Unique count: {k}")     # 5
print(nums[:k])                  # [1, 2, 3, 4, 5]

# Pythonic (extra space):
print(list(dict.fromkeys(nums))) # preserves order
\`\`\`

**Time:** O(n) | **Space:** O(1) in-place`,
    tags: ["Array", "Two Pointer", "LeetCode", "Easy"],
  },
  {
    id: 44,
    difficulty: "Medium",
    category: "Dynamic Programming",
    question: "0/1 Knapsack Problem",
    answer: `N items hain, har item ka weight aur value hai. Capacity W ke bag mein maximum value pack karo (har item ek baar).

**Java Solution:**
\`\`\`java
public class Knapsack {
    public static int knapsack(int[] weights, int[] values, int W) {
        int n = weights.length;
        int[][] dp = new int[n + 1][W + 1];

        for (int i = 1; i <= n; i++) {
            for (int w = 0; w <= W; w++) {
                // Don't take item i
                dp[i][w] = dp[i-1][w];
                // Take item i (if it fits)
                if (weights[i-1] <= w) {
                    dp[i][w] = Math.max(dp[i][w],
                        values[i-1] + dp[i-1][w - weights[i-1]]);
                }
            }
        }
        return dp[n][W];
    }

    public static void main(String[] args) {
        int[] weights = {1, 3, 4, 5};
        int[] values  = {1, 4, 5, 7};
        System.out.println(knapsack(weights, values, 7)); // 9
    }
}
\`\`\`

**Python Solution:**
\`\`\`python
def knapsack(weights, values, W):
    n = len(weights)
    dp = [[0] * (W + 1) for _ in range(n + 1)]

    for i in range(1, n + 1):
        for w in range(W + 1):
            dp[i][w] = dp[i-1][w]  # don't take
            if weights[i-1] <= w:
                dp[i][w] = max(dp[i][w],
                    values[i-1] + dp[i-1][w - weights[i-1]])

    return dp[n][W]

weights = [1, 3, 4, 5]
values  = [1, 4, 5, 7]
print(knapsack(weights, values, 7))  # 9
\`\`\`

**Time:** O(n × W) | **Space:** O(n × W)`,
    tags: ["Dynamic Programming", "Medium", "Most Asked"],
  },
  {
    id: 45,
    difficulty: "Medium",
    category: "Sorting",
    question: "Merge Sort – Implement and Explain",
    answer: `Merge Sort implement karo — divide and conquer algorithm.

**How it works:** Array ko do halves mein divide karo, recursively sort karo, phir merge karo.

**Java Solution:**
\`\`\`java
import java.util.Arrays;

public class MergeSort {
    public static void mergeSort(int[] arr, int left, int right) {
        if (left < right) {
            int mid = (left + right) / 2;
            mergeSort(arr, left, mid);
            mergeSort(arr, mid + 1, right);
            merge(arr, left, mid, right);
        }
    }

    private static void merge(int[] arr, int left, int mid, int right) {
        int n1 = mid - left + 1;
        int n2 = right - mid;
        int[] L = Arrays.copyOfRange(arr, left, mid + 1);
        int[] R = Arrays.copyOfRange(arr, mid + 1, right + 1);

        int i = 0, j = 0, k = left;
        while (i < n1 && j < n2) {
            if (L[i] <= R[j]) arr[k++] = L[i++];
            else arr[k++] = R[j++];
        }
        while (i < n1) arr[k++] = L[i++];
        while (j < n2) arr[k++] = R[j++];
    }

    public static void main(String[] args) {
        int[] arr = {38, 27, 43, 3, 9, 82, 10};
        mergeSort(arr, 0, arr.length - 1);
        System.out.println(Arrays.toString(arr));
        // [3, 9, 10, 27, 38, 43, 82]
    }
}
\`\`\`

**Python Solution:**
\`\`\`python
def merge_sort(arr):
    if len(arr) <= 1:
        return arr
    mid = len(arr) // 2
    left = merge_sort(arr[:mid])
    right = merge_sort(arr[mid:])
    return merge(left, right)

def merge(left, right):
    result = []
    i = j = 0
    while i < len(left) and j < len(right):
        if left[i] <= right[j]:
            result.append(left[i]); i += 1
        else:
            result.append(right[j]); j += 1
    result.extend(left[i:])
    result.extend(right[j:])
    return result

arr = [38, 27, 43, 3, 9, 82, 10]
print(merge_sort(arr))  # [3, 9, 10, 27, 38, 43, 82]
\`\`\`

**Time:** O(n log n) always | **Space:** O(n) — best stable sort`,
    tags: ["Sorting", "Divide and Conquer", "Medium"],
  },
  {
    id: 46,
    difficulty: "Medium",
    category: "Sorting",
    question: "Quick Sort – Implement and Explain",
    answer: `Quick Sort implement karo — sabse fast sorting algorithm in practice.

**How it works:** Pivot choose karo, usse sahi position pe rakho (partition), phir recursively sort karo.

**Java Solution:**
\`\`\`java
public class QuickSort {
    public static void quickSort(int[] arr, int low, int high) {
        if (low < high) {
            int pi = partition(arr, low, high);
            quickSort(arr, low, pi - 1);
            quickSort(arr, pi + 1, high);
        }
    }

    private static int partition(int[] arr, int low, int high) {
        int pivot = arr[high]; // last element as pivot
        int i = low - 1;
        for (int j = low; j < high; j++) {
            if (arr[j] <= pivot) {
                i++;
                int temp = arr[i]; arr[i] = arr[j]; arr[j] = temp;
            }
        }
        int temp = arr[i+1]; arr[i+1] = arr[high]; arr[high] = temp;
        return i + 1;
    }

    public static void main(String[] args) {
        int[] arr = {10, 7, 8, 9, 1, 5};
        quickSort(arr, 0, arr.length - 1);
        System.out.println(Arrays.toString(arr));
        // [1, 5, 7, 8, 9, 10]
    }
}
\`\`\`

**Python Solution:**
\`\`\`python
def quick_sort(arr, low=0, high=None):
    if high is None:
        high = len(arr) - 1
    if low < high:
        pi = partition(arr, low, high)
        quick_sort(arr, low, pi - 1)
        quick_sort(arr, pi + 1, high)
    return arr

def partition(arr, low, high):
    pivot = arr[high]
    i = low - 1
    for j in range(low, high):
        if arr[j] <= pivot:
            i += 1
            arr[i], arr[j] = arr[j], arr[i]
    arr[i+1], arr[high] = arr[high], arr[i+1]
    return i + 1

arr = [10, 7, 8, 9, 1, 5]
print(quick_sort(arr))  # [1, 5, 7, 8, 9, 10]
\`\`\`

**Time:** Avg O(n log n), Worst O(n²) | **Space:** O(log n)  
**vs Merge Sort:** Quick sort faster in practice (cache friendly), but not stable`,
    tags: ["Sorting", "Divide and Conquer", "Medium"],
  },
  {
    id: 47,
    difficulty: "Medium",
    category: "String",
    question: "Roman to Integer Conversion",
    answer: `Roman numeral string ko integer mein convert karo.

**Rules:** I=1, V=5, X=10, L=50, C=100, D=500, M=1000  
**Exception:** Agar chhota value bade se pehle aaye → subtract karo (e.g., IV=4, IX=9)

**Java Solution:**
\`\`\`java
import java.util.HashMap;
import java.util.Map;

public class RomanToInt {
    public static int romanToInt(String s) {
        Map<Character, Integer> map = new HashMap<>();
        map.put('I', 1); map.put('V', 5); map.put('X', 10);
        map.put('L', 50); map.put('C', 100); map.put('D', 500);
        map.put('M', 1000);

        int result = 0;
        for (int i = 0; i < s.length(); i++) {
            int curr = map.get(s.charAt(i));
            int next = (i + 1 < s.length()) ? map.get(s.charAt(i + 1)) : 0;
            if (curr < next) result -= curr;
            else result += curr;
        }
        return result;
    }

    public static void main(String[] args) {
        System.out.println(romanToInt("III"));    // 3
        System.out.println(romanToInt("LVIII"));  // 58
        System.out.println(romanToInt("MCMXCIV")); // 1994
    }
}
\`\`\`

**Python Solution:**
\`\`\`python
def roman_to_int(s):
    values = {'I': 1, 'V': 5, 'X': 10, 'L': 50,
              'C': 100, 'D': 500, 'M': 1000}
    result = 0
    for i in range(len(s)):
        curr = values[s[i]]
        next_val = values[s[i+1]] if i + 1 < len(s) else 0
        if curr < next_val:
            result -= curr
        else:
            result += curr
    return result

print(roman_to_int("III"))     # 3
print(roman_to_int("LVIII"))   # 58
print(roman_to_int("MCMXCIV")) # 1994
\`\`\`

**Time:** O(n) | **Space:** O(1)`,
    tags: ["String", "HashMap", "LeetCode", "Medium"],
  },
  {
    id: 48,
    difficulty: "Medium",
    category: "Recursion",
    question: "Generate all Subsets (Power Set) of an Array",
    answer: `Array ke saare possible subsets generate karo.

**Example:** [1,2,3] → [], [1], [2], [3], [1,2], [1,3], [2,3], [1,2,3]  
Total subsets = 2^n

**Java Solution:**
\`\`\`java
import java.util.*;

public class Subsets {
    public static List<List<Integer>> subsets(int[] nums) {
        List<List<Integer>> result = new ArrayList<>();
        backtrack(nums, 0, new ArrayList<>(), result);
        return result;
    }

    private static void backtrack(int[] nums, int start,
                                   List<Integer> current,
                                   List<List<Integer>> result) {
        result.add(new ArrayList<>(current));
        for (int i = start; i < nums.length; i++) {
            current.add(nums[i]);
            backtrack(nums, i + 1, current, result);
            current.remove(current.size() - 1); // backtrack
        }
    }

    public static void main(String[] args) {
        System.out.println(subsets(new int[]{1, 2, 3}));
        // [[], [1], [1,2], [1,2,3], [1,3], [2], [2,3], [3]]
    }
}
\`\`\`

**Python Solution:**
\`\`\`python
def subsets(nums):
    result = []

    def backtrack(start, current):
        result.append(current[:])
        for i in range(start, len(nums)):
            current.append(nums[i])
            backtrack(i + 1, current)
            current.pop()  # backtrack

    backtrack(0, [])
    return result

print(subsets([1, 2, 3]))
# [[], [1], [1,2], [1,2,3], [1,3], [2], [2,3], [3]]

# Iterative approach:
def subsets_iterative(nums):
    result = [[]]
    for num in nums:
        result += [s + [num] for s in result]
    return result
\`\`\`

**Time:** O(2^n × n) | **Space:** O(n) recursion stack`,
    tags: ["Recursion", "Backtracking", "Medium", "LeetCode"],
  },
  {
    id: 49,
    difficulty: "Easy",
    category: "Math",
    question: "Print Pascal's Triangle",
    answer: `Pascal's Triangle print karo N rows tak.

**Pattern:** Har row ka pehla aur aakhri element 1 hai, baaki elements upar ke do elements ka sum.

**Java Solution:**
\`\`\`java
import java.util.*;

public class PascalTriangle {
    public static List<List<Integer>> generate(int numRows) {
        List<List<Integer>> triangle = new ArrayList<>();
        for (int i = 0; i < numRows; i++) {
            List<Integer> row = new ArrayList<>();
            row.add(1); // first element always 1
            for (int j = 1; j < i; j++) {
                List<Integer> prev = triangle.get(i - 1);
                row.add(prev.get(j - 1) + prev.get(j));
            }
            if (i > 0) row.add(1); // last element always 1
            triangle.add(row);
        }
        return triangle;
    }

    public static void main(String[] args) {
        generate(5).forEach(System.out::println);
        // [1]
        // [1, 1]
        // [1, 2, 1]
        // [1, 3, 3, 1]
        // [1, 4, 6, 4, 1]
    }
}
\`\`\`

**Python Solution:**
\`\`\`python
def generate_pascal(num_rows):
    triangle = []
    for i in range(num_rows):
        row = [1] * (i + 1)
        for j in range(1, i):
            row[j] = triangle[i-1][j-1] + triangle[i-1][j]
        triangle.append(row)
    return triangle

for row in generate_pascal(5):
    print(row)
# [1]
# [1, 1]
# [1, 2, 1]
# [1, 3, 3, 1]
# [1, 4, 6, 4, 1]
\`\`\`

**Time:** O(n²) | **Space:** O(n²)`,
    tags: ["Math", "Array", "Easy", "LeetCode"],
  },
  {
    id: 50,
    difficulty: "Hard",
    category: "Dynamic Programming",
    question: "Longest Increasing Subsequence (LIS)",
    answer: `Array mein longest strictly increasing subsequence ki length find karo.

**Example:** [10, 9, 2, 5, 3, 7, 101, 18] → LIS = [2, 3, 7, 101] → Length 4

**Java Solution:**
\`\`\`java
public class LIS {
    // DP Approach O(n²)
    public static int lengthOfLIS(int[] nums) {
        int n = nums.length;
        int[] dp = new int[n];
        Arrays.fill(dp, 1);
        int maxLen = 1;

        for (int i = 1; i < n; i++) {
            for (int j = 0; j < i; j++) {
                if (nums[j] < nums[i]) {
                    dp[i] = Math.max(dp[i], dp[j] + 1);
                }
            }
            maxLen = Math.max(maxLen, dp[i]);
        }
        return maxLen;
    }

    // Binary Search Approach O(n log n)
    public static int lengthOfLISOptimal(int[] nums) {
        List<Integer> tails = new ArrayList<>();
        for (int num : nums) {
            int pos = Collections.binarySearch(tails, num);
            if (pos < 0) pos = -(pos + 1);
            if (pos == tails.size()) tails.add(num);
            else tails.set(pos, num);
        }
        return tails.size();
    }

    public static void main(String[] args) {
        int[] nums = {10, 9, 2, 5, 3, 7, 101, 18};
        System.out.println(lengthOfLIS(nums));        // 4
        System.out.println(lengthOfLISOptimal(nums)); // 4
    }
}
\`\`\`

**Python Solution:**
\`\`\`python
def length_of_lis(nums):
    n = len(nums)
    dp = [1] * n
    for i in range(1, n):
        for j in range(i):
            if nums[j] < nums[i]:
                dp[i] = max(dp[i], dp[j] + 1)
    return max(dp)

# O(n log n) using bisect:
from bisect import bisect_left

def length_of_lis_fast(nums):
    tails = []
    for num in nums:
        pos = bisect_left(tails, num)
        if pos == len(tails):
            tails.append(num)
        else:
            tails[pos] = num
    return len(tails)

nums = [10, 9, 2, 5, 3, 7, 101, 18]
print(length_of_lis(nums))       # 4
print(length_of_lis_fast(nums))  # 4
\`\`\`

**Time:** O(n²) DP / O(n log n) binary search | **Space:** O(n)`,
    tags: ["Dynamic Programming", "Binary Search", "Hard", "LeetCode", "Most Asked"],
  },
];
