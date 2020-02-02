package ibdb.utils;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Arrays;
import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationListener;
import org.springframework.context.event.ContextRefreshedEvent;
import org.springframework.stereotype.Component;

import ibdb.entities.address.Address;
import ibdb.entities.address.IAddressService;
import ibdb.entities.authors.Author;
import ibdb.entities.authors.IAuthorService;
import ibdb.entities.books.Book;
import ibdb.entities.books.IBookService;
import ibdb.entities.categories.Category;
import ibdb.entities.categories.ICategoryService;
import ibdb.entities.feedback.Feedback;
import ibdb.entities.feedback.IFeedbackService;
import ibdb.entities.permissions.IPermissionService;
import ibdb.entities.permissions.Permission;
import ibdb.entities.publishers.IPublisherService;
import ibdb.entities.publishers.Publisher;
import ibdb.entities.reviews.IReviewService;
import ibdb.entities.reviews.Review;
import ibdb.entities.roles.IRoleService;
import ibdb.entities.roles.Role;
import ibdb.entities.subcategories.ISubcategoryService;
import ibdb.entities.subcategories.Subcategory;
import ibdb.entities.users.IUserAccountService;
import ibdb.entities.users.UserAccount;

@Component
public class DataLoader implements ApplicationListener<ContextRefreshedEvent> {

	@Autowired
	private ICategoryService categoryService;
	@Autowired
	private ISubcategoryService subcategoryService;
	@Autowired
	private IAddressService addressService;
	@Autowired
	private IUserAccountService userAccountService;
	@Autowired
	private IRoleService roleService;
	@Autowired
	private IPermissionService permissionService;
	@Autowired
	private IPublisherService publisherService;
	@Autowired
	private IAuthorService authorService;
	@Autowired
	private IBookService bookService;
	@Autowired
	private IReviewService reviewService;
	@Autowired
	private IFeedbackService feedbackService;
	@Autowired
	private DisplayData displayData;
	
	public Date dateFormat(String date) { 
		Date formattedDate = null;
		String pattern = "dd/MM/yyyy";
		SimpleDateFormat simpleDateFormat = new SimpleDateFormat(pattern);
		
		try {
			formattedDate = simpleDateFormat.parse(date);
		} catch (ParseException e) {
			e.printStackTrace();
		}
		
		return formattedDate;
	}

	public void onApplicationEvent(ContextRefreshedEvent event) {
		loadData();
	}

	private void loadData() {
		displayData.printInfo("Starting data loading...");
		try {
			updateCategory();
			updateSubcategory();
			updateAddress();
			updateAuthor();
			updateRole();
			updatePermission();
			updateUserAccount();
			updatePublisher();
			updateBook();
			updateFeedback();
			updateReview();
		} catch (Exception e) {
			System.out.println(e);
		}

		displayData.printInfo("Data successfully loaded.");
	}

	private void updateCategory() {
		Category category1 = new Category(300, "Fiction");
		Category category2 = new Category(301, "Non-fiction");

		categoryService.insertCategory(category1);
		categoryService.insertCategory(category2);
	}

	private void updateSubcategory() {
		
		List<Category> categories = categoryService.findAllCategories();
		
		Subcategory subcategory1 = new Subcategory(990, "Action and Adventure");
		subcategory1.setCategory(categories.get(0));
		Subcategory subcategory2 = new Subcategory(991, "Anthology");
		subcategory2.setCategory(categories.get(0));
		Subcategory subcategory3 = new Subcategory(992, "Classic");
		subcategory3.setCategory(categories.get(0));
		Subcategory subcategory4 = new Subcategory(993, "Comic/Graphic Novel");
		subcategory4.setCategory(categories.get(0));
		Subcategory subcategory5 = new Subcategory(994, "Crime and Detective");
		subcategory5.setCategory(categories.get(0));
		Subcategory subcategory6 = new Subcategory(995, "Drama");
		subcategory6.setCategory(categories.get(0));
		Subcategory subcategory7 = new Subcategory(996, "Fable");
		subcategory7.setCategory(categories.get(0));
		Subcategory subcategory8 = new Subcategory(997, "Fairy Tale");
		subcategory8.setCategory(categories.get(0));
		Subcategory subcategory9 = new Subcategory(998, "Fan-Fiction");
		subcategory9.setCategory(categories.get(0));
		Subcategory subcategory10 = new Subcategory(999, "Fantasy");
		subcategory10.setCategory(categories.get(0));
		Subcategory subcategory11 = new Subcategory(1000, "Historical Fiction");
		subcategory11.setCategory(categories.get(0));
		Subcategory subcategory12 = new Subcategory(1001, "Horror");
		subcategory12.setCategory(categories.get(0));
		Subcategory subcategory13 = new Subcategory(1002, "Humor");
		subcategory13.setCategory(categories.get(0));
		Subcategory subcategory14 = new Subcategory(1003, "Legend");
		subcategory14.setCategory(categories.get(0));
		Subcategory subcategory15 = new Subcategory(1004, "Magical Realism");
		subcategory15.setCategory(categories.get(0));
		Subcategory subcategory16 = new Subcategory(1005, "Mystery");
		subcategory16.setCategory(categories.get(0));
		Subcategory subcategory17 = new Subcategory(1006, "Mythology");
		subcategory17.setCategory(categories.get(0));
		Subcategory subcategory18 = new Subcategory(1007, "Historical Fiction");
		subcategory18.setCategory(categories.get(0));
		Subcategory subcategory19 = new Subcategory(1008, "Realistic Fiction");
		subcategory19.setCategory(categories.get(0));
		Subcategory subcategory20 = new Subcategory(1009, "Romance");
		subcategory20.setCategory(categories.get(0));
		Subcategory subcategory21 = new Subcategory(1010, "Satire");
		subcategory21.setCategory(categories.get(0));
		Subcategory subcategory22 = new Subcategory(1011, "Science Fiction");
		subcategory22.setCategory(categories.get(0));
		Subcategory subcategory23 = new Subcategory(1012, "Short Story");
		subcategory23.setCategory(categories.get(0));
		Subcategory subcategory24 = new Subcategory(1013, "Suspense/Thriller");
		subcategory24.setCategory(categories.get(0));

		Subcategory subcategory25 = new Subcategory(1014, "Biography");
		subcategory25.setCategory(categories.get(1));
		Subcategory subcategory26 = new Subcategory(1015, "Essay");
		subcategory26.setCategory(categories.get(1));
		Subcategory subcategory27 = new Subcategory(1016, "Memoir");
		subcategory27.setCategory(categories.get(1));
		Subcategory subcategory28 = new Subcategory(1017, "Narrative Nonfiction");
		subcategory28.setCategory(categories.get(1));
		Subcategory subcategory29 = new Subcategory(1018, "Periodicals");
		subcategory29.setCategory(categories.get(1));
		Subcategory subcategory30 = new Subcategory(1019, "Reference Books");
		subcategory30.setCategory(categories.get(1));
		Subcategory subcategory31 = new Subcategory(1020, "Self-help Book");
		subcategory31.setCategory(categories.get(1));
		Subcategory subcategory32 = new Subcategory(1021, "Speech");
		subcategory32.setCategory(categories.get(1));
		Subcategory subcategory33 = new Subcategory(1022, "Textbook");
		subcategory33.setCategory(categories.get(1));
		Subcategory subcategory34 = new Subcategory(1023, "Poetry");
		subcategory34.setCategory(categories.get(1));

		subcategoryService.insertSubcategory(subcategory1);
		subcategoryService.insertSubcategory(subcategory2);
		subcategoryService.insertSubcategory(subcategory3);
		subcategoryService.insertSubcategory(subcategory4);
		subcategoryService.insertSubcategory(subcategory5);
		subcategoryService.insertSubcategory(subcategory6);
		subcategoryService.insertSubcategory(subcategory7);
		subcategoryService.insertSubcategory(subcategory8);
		subcategoryService.insertSubcategory(subcategory9);
		subcategoryService.insertSubcategory(subcategory10);
		subcategoryService.insertSubcategory(subcategory11);
		subcategoryService.insertSubcategory(subcategory12);
		subcategoryService.insertSubcategory(subcategory13);
		subcategoryService.insertSubcategory(subcategory14);
		subcategoryService.insertSubcategory(subcategory15);
		subcategoryService.insertSubcategory(subcategory16);
		subcategoryService.insertSubcategory(subcategory17);
		subcategoryService.insertSubcategory(subcategory18);
		subcategoryService.insertSubcategory(subcategory19);
		subcategoryService.insertSubcategory(subcategory20);
		subcategoryService.insertSubcategory(subcategory21);
		subcategoryService.insertSubcategory(subcategory22);
		subcategoryService.insertSubcategory(subcategory23);
		subcategoryService.insertSubcategory(subcategory24);
		subcategoryService.insertSubcategory(subcategory25);
		subcategoryService.insertSubcategory(subcategory26);
		subcategoryService.insertSubcategory(subcategory27);
		subcategoryService.insertSubcategory(subcategory28);
		subcategoryService.insertSubcategory(subcategory29);
		subcategoryService.insertSubcategory(subcategory30);
		subcategoryService.insertSubcategory(subcategory31);
		subcategoryService.insertSubcategory(subcategory32);
		subcategoryService.insertSubcategory(subcategory33);
		subcategoryService.insertSubcategory(subcategory34);

	}

	private void updateAddress() {
		
		Address address1 = new Address(1000, null, null, null, "Manchester", "United Kingdom");
		Address address2 = new Address(1001, null, null, null, "Portland", "U.S.A");
		Address address3 = new Address(1002, null, null, null, "Beaconsfield", "United Kingdom");
		Address address4 = new Address(1003, null, null, null, "Stratford-upon-Avon", "United Kingdom");
		Address address5 = new Address(1004, null, null, null, "Bloemfontein", "South Africa");
		Address address6 = new Address(1005, null, null, null, "London", "United Kingdom");
		Address address7 = new Address(1006, null, null, null, "Porchester", "United Kingdom");
		Address address8 = new Address(1007, null, null, null, "Manryland", "U.S.A");
		Address address9 = new Address(1008, null, null, null, "Jonoesboro", "U.S.A");
		Address address10 = new Address(1009, null, null, null, "Hartford", "U.S.A");
		Address address11 = new Address(1010, null, null, null, "South River", "U.S.A");
		Address address12 = new Address(1011, null, null, null, "Tourquay", "United Kingdom");
		Address address13 = new Address(1012, null, null, null, "Palm Beach", "U.S.A");
		Address address14 = new Address(1013, null, null, null, "Winchester", "United Kingdom");
		Address address15 = new Address(1014, null, null, null, "Portsmouth", "United Kingdom");
		Address address16 = new Address(1015, null, null, null, "Petrovici", "Russia");
		Address address17 = new Address(1016, null, null, null, "Motihari", "India");
		Address address18 = new Address(1017, "Bedford Square", 50, null, "London", "United Kingdom");
		Address address19 = new Address(1018, "Alexander Ln", 83, null, "Crows Nest", "Australia");
		Address address20 = new Address(1019, "Strand", 80, null, "London", "United Kingdom");
		Address address21 = new Address(1020, null, null, null, "Brasov", "Romania");
		Address address22 = new Address(1021, null, null, null, "Iasi", "Romania");
		Address address23 = new Address(1022, null, null, null, "Bacau", "Romania");
		Address address24 = new Address(1023, null, null, null, "Chisinau", "Moldova");
		
		addressService.insertAddress(address1);
		addressService.insertAddress(address2);
		addressService.insertAddress(address3);
		addressService.insertAddress(address4);
		addressService.insertAddress(address5);
		addressService.insertAddress(address6);
		addressService.insertAddress(address7);
		addressService.insertAddress(address8);
		addressService.insertAddress(address9);
		addressService.insertAddress(address10);
		addressService.insertAddress(address11);
		addressService.insertAddress(address12);
		addressService.insertAddress(address13);
		addressService.insertAddress(address14);
		addressService.insertAddress(address15);
		addressService.insertAddress(address16);
		addressService.insertAddress(address17);
		addressService.insertAddress(address18);
		addressService.insertAddress(address19);
		addressService.insertAddress(address20);
		addressService.insertAddress(address21);
		addressService.insertAddress(address22);
		addressService.insertAddress(address23);
		addressService.insertAddress(address24);
		
	}

	private void updateAuthor() {
		
		List<Address> addresses = addressService.findAllAddresses();
		
		Author author1 = new Author(1, "Rowling", "Joanne", dateFormat("14/07/1965"));
		author1.setAddress(addresses.get(0));
		Author author2 = new Author(2, "King", "Stephen", dateFormat("21/09/1947"));
		author2.setAddress(addresses.get(1));
		Author author3 = new Author(3, "Pratchett", "Terry", dateFormat("28/04/1948"));
		author3.setAddress(addresses.get(2));
		Author author4 = new Author(4, "Shakespeare", "William", dateFormat("10/04/1564"));
		author4.setAddress(addresses.get(3));
		Author author5 = new Author(5, "Tolkien", "John", dateFormat("03/01/1892"));
		author5.setAddress(addresses.get(4));
		Author author6 = new Author(6, "Lewis", "Clive", dateFormat("08/09/1965"));
		author6.setAddress(addresses.get(5));
		Author author7 = new Author(7, "Gaiman", "Neil", dateFormat("10/11/1960"));
		author7.setAddress(addresses.get(6));
		Author author8 = new Author(8, "Roberts", "Nora", dateFormat("14/07/1965"));
		author8.setAddress(addresses.get(7));
		Author author9 = new Author(9, "Grisham", "John", dateFormat("08/02/1955"));
		author9.setAddress(addresses.get(8));
		Author author10 = new Author(10, "Meyer", "Stephenie", dateFormat("24/12/1973"));
		author10.setAddress(addresses.get(9));
		Author author11 = new Author(11, "Evanovich", "Janet", dateFormat("22/04/1943"));
		author11.setAddress(addresses.get(10));
		Author author12 = new Author(12, "Christie", "Agatha", dateFormat("15/09/1894"));
		author12.setAddress(addresses.get(11));
		Author author13 = new Author(13, "Patterson", "James", dateFormat("22/03/1947"));
		author13.setAddress(addresses.get(12));
		Author author14 = new Author(14, "Austen", "Jane", dateFormat("15/09/1894"));
		author14.setAddress(addresses.get(13));
		Author author15 = new Author(15, "Dickens", "Charles", dateFormat("10/11/1960"));
		author15.setAddress(addresses.get(14));
		Author author16 = new Author(16, "Asimov", "Isaac", dateFormat("14/07/1965"));
		author16.setAddress(addresses.get(15));
		Author author17 = new Author(17, "Orwell", "George", dateFormat("25/06/190"));
		author17.setAddress(addresses.get(16));
				
		
		authorService.insertAuthor(author1);
		authorService.insertAuthor(author2);
		authorService.insertAuthor(author3);
		authorService.insertAuthor(author4);
		authorService.insertAuthor(author5);
		authorService.insertAuthor(author6);
		authorService.insertAuthor(author7);
		authorService.insertAuthor(author8);
		authorService.insertAuthor(author9);
		authorService.insertAuthor(author10);
		authorService.insertAuthor(author11);
		authorService.insertAuthor(author12);
		authorService.insertAuthor(author13);
		authorService.insertAuthor(author14);
		authorService.insertAuthor(author15);
		authorService.insertAuthor(author16);
		authorService.insertAuthor(author17);
	}

	private void updatePublisher() {
		
		List<Address> addresses = addressService.findAllAddresses();
		
		Publisher publisher1 = new Publisher(20000, "Bloomsbury Publishing");
		publisher1.setAddress(addresses.get(17));
		Publisher publisher2 = new Publisher(20001, "Allen & Unwin");
		publisher2.setAddress(addresses.get(18));
		Publisher publisher3 = new Publisher(20002, "Harvill Secker");
		publisher3.setAddress(addresses.get(18));
		
		publisherService.insertPublisher(publisher1);
		publisherService.insertPublisher(publisher2);
		publisherService.insertPublisher(publisher3);
		
	}

	private void updateRole() {

		Role role1 = new Role(50, "Admin", "This role has the right to create/update/delete data");	
		Role role2 = new Role(51, "Operator", "This role has the right to create/update data");	
		Role role3 = new Role(52, "Registered User", "This role has the right to create/update reviews");	
		Role role4 = new Role(53, "Guest", "This role has the right to view reviews");	
		
		roleService.insertRole(role1);
		roleService.insertRole(role2);
		roleService.insertRole(role3);
		roleService.insertRole(role4);
		
	}

	@SuppressWarnings("unchecked")
	private void updatePermission() {
		
		List<Role> roles = roleService.findAllRoles();
		
		Permission permission1 = new Permission(700, "canCreateReviews", "The user has the power to create reviews only if he is registered");
		permission1.setRoles(Arrays.asList(roles.get(2), roles.get(1)));
		Permission permission2 = new Permission(701, "canDeleteData", "The user belongs to the System Administrator for security purposes");
		permission2.setRoles(Arrays.asList(roles.get(0), roles.get(1)));
		Permission permission3 = new Permission(702, "canAddEditData", "The operators can add new data in the systems and update current data");
		permission3.setRoles(Arrays.asList(roles.get(1), roles.get(0)));
		Permission permission4 = new Permission(703, "canViewRSeviews", "Any user can view reviews, weather they do or do not have an account");
		permission4.setRoles(Arrays.asList(roles.get(3)));
		
		permissionService.insertPermission(permission1);
		permissionService.insertPermission(permission2);
		permissionService.insertPermission(permission3);
		permissionService.insertPermission(permission4);

	}

	private void updateUserAccount() {
		
		UserAccount userAccount1 = new UserAccount(9900, "adelaminculescu@gmail.com", "Minculecu", "Adela", "Female","Adela Minculescu",
				"@del@mincu22", dateFormat("12/03/1985"));
		userAccount1.setRole(roleService.findRoleById(52).get());
		
		UserAccount userAccount2 = new UserAccount(9901, "adinadima@gmail.com", "Dima", "Adina", "Female","Adina Dima", "adima127&", 
				dateFormat("18/03/1990"));
		userAccount2.setRole(roleService.findRoleById(52).get());
		
		UserAccount userAccount3 = new UserAccount(9902, "teodorBarbu@gmail.com", "Barbu", "Teodor", "Male","Teodor B.", 
				"theodor0242", dateFormat("10/02/1988"));
		userAccount3.setRole(roleService.findRoleById(52).get());
		
		UserAccount userAccount4 = new UserAccount(9903, "gabrieladobos@gmail.com", "Dobos", "Gabriela", "Female","Gabi", 
				"dobosgabi24", dateFormat("20/09/1992"));
		userAccount4.setRole(roleService.findRoleById(52).get());
		
		UserAccount userAccount5 = new UserAccount(9904, "eugenpapuc@gmail.com", "Papuc", "Eugen", "Male","Eugen", 
				"eugenpapuc34", dateFormat("12/08/1991"));
		userAccount5.setRole(roleService.findRoleById(52).get());
		userAccountService.insertUserAccount(userAccount1);
		userAccountService.insertUserAccount(userAccount2);
		userAccountService.insertUserAccount(userAccount3);
		userAccountService.insertUserAccount(userAccount4);
		userAccountService.insertUserAccount(userAccount5);
		
	}

	private void updateBook() {
		List<Author> authors = authorService.findAllAuthors();
		List<Publisher> publishers = publisherService.findAllPublishers();
		List<Subcategory> subcategories = subcategoryService.findAllSubcategories();
		
		Book book1 = new Book (10000, "9788700631625", "Harry Potter and the Sorcerer`s Stone");
		book1.setAuthor(authors.get(0));
		book1.setPublisher(publishers.get(0));
		book1.setSubcategory(subcategories.get(9));
		book1.setPublishDate(dateFormat("12/06/2001"));
		book1.setImage("../../../assets/images/books-images/HarryPotterandtheSorcerersStone.jpg");
		
		Book book2 = new Book (10001, "9788700631623", "Harry Potter and the Chamber of Secrets");
		book2.setAuthor(authors.get(0));
		book2.setPublisher(publishers.get(0));
		book2.setSubcategory(subcategories.get(9));
		book2.setPublishDate(dateFormat("11/07/2002"));
		book2.setImage("../../../assets/images/books-images/HarryPotterAndTheChamberOfSecrets.jpg");
		
		Book book3 = new Book (10002, "9788700631627", "Harry Potter and the Prisoner of Azkaban");
		book3.setAuthor(authors.get(0));
		book3.setPublisher(publishers.get(0));
		book3.setSubcategory(subcategories.get(9));
		book3.setPublishDate(dateFormat("10/10/2003"));
		book3.setImage("../../../assets/images/books-images/HarryPotterAndThePrisonerOfAzkaban.jpg");
		
		Book book4 = new Book (10003, "9788700631627", "Harry Potter and the Prisoner of Azkaban 2");
		book4.setAuthor(authors.get(0));
		book4.setPublisher(publishers.get(0));
		book4.setSubcategory(subcategories.get(9));
		book4.setPublishDate(dateFormat("17/02/2004"));
		book4.setImage("../../../assets/images/books-images/HarryPotterAndThePrisonerOfAzkaban2.jpg");
		
		Book book5 = new Book (10004, "9788700631622", "Harry Potter and the Half-Blood Prince");
		book5.setAuthor(authors.get(0));
		book5.setPublisher(publishers.get(0));
		book5.setSubcategory(subcategories.get(9));
		book5.setPublishDate(dateFormat("22/06/2005"));
		book5.setImage(".../../../assets/images/books-images/HarryPotterAnd The Half-BloodPrince.jpg");
		
		Book book6 = new Book (10005, "9788700631629", "Harry Potter and the Order of the Phoenix");
		book6.setAuthor(authors.get(0));
		book6.setPublisher(publishers.get(0));
		book6.setSubcategory(subcategories.get(9));
		book6.setPublishDate(dateFormat("21/06/2006"));
		book6.setImage("../../../assets/images/books-images/HarryPotterAndTheOrderOfThePhoenix.jpg");
		
		Book book7 = new Book (10006, "9788700631620", "Harry Potter and the Goblet of Fire");
		book7.setAuthor(authors.get(0));
		book7.setPublisher(publishers.get(0));
		book7.setSubcategory(subcategories.get(9));
		book7.setPublishDate(dateFormat("21/02/2007"));
		book7.setImage("../../../assets/images/books-images/HarryPotterandtheGobletofFire.jpg");
		
		Book book8 = new Book (10007, "9788700631672", "Harry Potter and the Deathly Hallows");
		book8.setAuthor(authors.get(0));
		book8.setPublisher(publishers.get(0));
		book8.setSubcategory(subcategories.get(9));
		book8.setPublishDate(dateFormat("12/09/2007"));
		book8.setImage("../../../assets/images/books-images/HarryPotterAndtheDeathlyHallows.jpg");
		
		Book book9 = new Book (10008, "9780582186552", "The Hobbit");
		book9.setAuthor(authors.get(4));
		book9.setPublisher(publishers.get(2));
		book9.setSubcategory(subcategories.get(9));
		book9.setPublishDate(dateFormat("21/09/1937"));
		book9.setImage("../../../assets/images/books-images/TheHobbit.jpg");
		
		Book book10 = new Book (10009, "9781328869333", "1984");
		book10.setAuthor(authors.get(16));
		book10.setPublisher(publishers.get(2));
		book10.setSubcategory(subcategories.get(27));
		book10.setPublishDate(dateFormat("8/06/1949"));
		book10.setImage("../../../assets/images/books-images/1984.jpg");
	
		bookService.insertBook(book1);
		bookService.insertBook(book2);
		bookService.insertBook(book3);
		bookService.insertBook(book4);
		bookService.insertBook(book5);
		bookService.insertBook(book6);
		bookService.insertBook(book7);
		bookService.insertBook(book8);
		bookService.insertBook(book9);
		bookService.insertBook(book10);
	}

	private void updateReview() {
		
		List<UserAccount> users = userAccountService.findAllUserAccounts();
		List<Book> books = bookService.findAllBooks();
		
		Review review1 = new Review(40000, "This is such an extraordinary book. It is definately one "
				+ "of my favorites. I tottally recomand this book to people of all ages. "
				+ "It is a must read!", dateFormat("09/08/2019"), 4);
		review1.setUser(users.get(0));
		review1.setBook(books.get(0));			
		Review review2 = new Review(40001, "Reading this book made me feel"
				+ " like a child again!", dateFormat("09/09/2019"), 5);
		review2.setUser(users.get(1));
		
		Review review3 = new Review(40002, "Better than the movie !!!!!", dateFormat("09/09/2019"), 5);
		review3.setUser(users.get(2));
		
		Review review4 = new Review(40003, "I am not that into this"
				+ " kind of books, but this one I actually liked.", dateFormat("05/01/2019"), 5);
		review4.setUser(users.get(3));
		
		Review review5 = new Review(40004, "The author is one of my favorites"
				+ " and this book is by far her masterpiece", dateFormat("19/10/2019"), 5);
		review5.setUser(users.get(4));
		
		reviewService.insertReview(review1);
		reviewService.insertReview(review2);
		reviewService.insertReview(review3);
		reviewService.insertReview(review4);
		reviewService.insertReview(review5);
	}

	private void updateFeedback() {
		
		List<UserAccount> users = userAccountService.findAllUserAccounts();
		
		Feedback feedback1 = new Feedback(4500, "Great app! I always use it whenever "
				+ "I want to read a new book.", "Web Search");
		feedback1.setSender(users.get(0));
		
		Feedback feedback2 = new Feedback(4501, "It's just like IBDB, only for book lovers",
				"Web Search");
		feedback2.setSender(users.get(2));
		Feedback feedback3 = new Feedback(4502, "Why don't you rate authors too, "
				+ "not just their books.", "Web Search");
		feedback3.setSender(users.get(3));
		
		feedbackService.insertFeedback(feedback1);
		feedbackService.insertFeedback(feedback2); 
		feedbackService.insertFeedback(feedback3);
	}

}
