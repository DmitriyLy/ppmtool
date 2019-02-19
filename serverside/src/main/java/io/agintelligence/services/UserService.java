package io.agintelligence.services;

import io.agintelligence.domain.User;
import io.agintelligence.exceptions.UsernameAlreadyExistsException;
import io.agintelligence.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private BCryptPasswordEncoder bCryptPasswordEncoder;

    public User saveUser(User user) {

        try {
            user.setPassword(bCryptPasswordEncoder.encode(user.getPassword()));

            return userRepository.save(user);

        } catch (Exception e) {
            throw new UsernameAlreadyExistsException("Username '" + user.getUsername() + "' already exists");
        }
    }

}
